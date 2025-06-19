import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const LightBulbInteractive: React.FC = () => {
  const [isGlowOn, setIsGlowOn] = useState(false);
  const constraintsRef = useRef(null); // Ref for the draggable constraints

  const toggleGlow = useCallback(() => {
    setIsGlowOn((prev) => !prev);
  }, []);

  return (
    <div
      ref={constraintsRef}
      className="fixed top-0 right-16 z-40 h-full w-24 flex justify-center pointer-events-none"
    >
      {/* The string - fixed at top, extends down */}
      <motion.div
        className="absolute top-0 w-0.5 bg-gray-800"
        initial={{ height: 0 }}
        animate={{ height: '200px' }} // Initial string length
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          originY: 0, // Pivot from the top
          left: '50%',
          x: '-50%', // Center the string
        }}
      />

      {/* The light bulb - draggable */}
      <motion.div
        className="absolute flex flex-col items-center cursor-grab pointer-events-auto"
        initial={{ y: 150 }} // Initial hanging position (slightly below string attachment)
        drag="y"
        dragConstraints={{ top: 150, bottom: 400 }} // Limit vertical drag
        dragElastic={0.2} // Makes it spring back nicely
        onDragEnd={toggleGlow} // Toggle glow on release after a drag
        onTap={toggleGlow} // Also toggle glow on a simple tap/click
        whileTap={{ scale: 0.95 }} // Slight press effect on tap
        style={{
          // Initial rotation for upside-down hanging
          rotate: 180,
          // Adjust position to align with string end
          left: '50%',
          x: '-50%',
        }}
      >
        <img
          src="/light-bulb-svgrepo-com.svg"
          alt="Light Bulb"
          className={`w-12 h-12 transition-all duration-300 transform ${isGlowOn ? 'filter brightness-200' : 'filter brightness-75'}`}
          style={{
            filter: isGlowOn ? 'drop-shadow(0 0 12px gold) drop-shadow(0 0 24px orange)' : 'none', // Glow effect
          }}
        />
        {/* Optional: Add a visual cue for the string attachment point if needed */}
        <div className="absolute -top-4 w-1 h-1 bg-gray-800 rounded-full" />
      </motion.div>
    </div>
  );
};

export default LightBulbInteractive;
