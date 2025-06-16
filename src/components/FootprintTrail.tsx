import React, { useEffect, useState, useRef, useCallback } from 'react';

interface Footprint {
  id: number;
  x: number;
  y: number; // Absolute Y position
  opacity: number;
  rotation: number;
}

const FootprintTrail: React.FC = () => {
  const [footprints, setFootprints] = useState<Footprint[]>([]);
  const footprintIdCounter = useRef(0);
  const lastScrollY = useRef(0); // Tracks the window.scrollY position for generating new footprints

  // Constants - these can be adjusted for desired effect
  const GENERATION_DISTANCE_PX = 100; // Generate a new footprint every 100 pixels of scroll
  const FADE_DISTANCE_FROM_EDGE = 0.3; // Fraction of viewport height from edge to start fading

  const createFootprint = useCallback((currentScrollY: number) => {
    const newFootprint: Footprint = {
      id: footprintIdCounter.current++,
      x: window.innerWidth * 0.1 + (Math.random() - 0.5) * 60, // Moved further left (around 10% from left edge with 60px spread)
      y: currentScrollY + window.innerHeight * (0.2 + Math.random() * 0.6), // Y within middle 60% of current viewport
      opacity: 1,
      rotation: Math.random() * 360,
    };
    setFootprints((prev) => [...prev, newFootprint]);
    // lastScrollY.current is now updated in handleScroll, not here
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const viewportTop = currentScrollY;
    const viewportBottom = currentScrollY + window.innerHeight;

    // Generate a new footprint if scrolled past the generation threshold
    if (Math.abs(currentScrollY - lastScrollY.current) > GENERATION_DISTANCE_PX) {
      createFootprint(currentScrollY);
      lastScrollY.current = currentScrollY; // Update lastScrollY after generating
    }

    // Update opacity of existing footprints based on their distance from the viewport edges
    setFootprints((prevFootprints) =>
      prevFootprints
        .map((fp) => {
          let newOpacity = 1;
          const fadeThresholdPixels = window.innerHeight * FADE_DISTANCE_FROM_EDGE;

          // Distance from top of viewport
          const distanceFromTopEdge = fp.y - viewportTop;
          // Distance from bottom of viewport
          const distanceFromBottomEdge = viewportBottom - fp.y;

          if (distanceFromTopEdge < fadeThresholdPixels) {
            // Footprint is near the top edge, fade it out
            newOpacity = Math.max(0, distanceFromTopEdge / fadeThresholdPixels);
          } else if (distanceFromBottomEdge < fadeThresholdPixels) {
            // Footprint is near the bottom edge, fade it out
            newOpacity = Math.max(0, distanceFromBottomEdge / fadeThresholdPixels);
          }

          return { ...fp, opacity: Math.max(0, Math.min(1, newOpacity)) };
        })
        .filter((fp) => {
          // Remove footprints that are completely out of a very generous view range and fully faded
          const isCompletelyOffScreen = fp.y < viewportTop - window.innerHeight || fp.y > viewportBottom + window.innerHeight; // Keep a full viewport height buffer
          return fp.opacity > 0.01 || !isCompletelyOffScreen; // Keep visible or recently visible footprints
        })
    );
  }, [createFootprint, GENERATION_DISTANCE_PX, FADE_DISTANCE_FROM_EDGE]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    lastScrollY.current = window.scrollY; // Initialize lastScrollY to current scroll position
    createFootprint(window.scrollY); // Create initial footprint on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, createFootprint]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {footprints.map((fp) => (
        <div
          key={fp.id}
          className="absolute"
          style={{
            left: `${fp.x}px`,
            top: `${fp.y}px`,
            opacity: fp.opacity,
            transform: `translate(-50%, -50%) rotate(${fp.rotation}deg)`,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <span role="img" aria-label="footprint" className="text-2xl">👣</span>
        </div>
      ))}
    </div>
  );
};

export default FootprintTrail; 