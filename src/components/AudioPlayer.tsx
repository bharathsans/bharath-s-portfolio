import React, { useRef, useState, useEffect, useCallback } from 'react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserMuted, setIsUserMuted] = useState(true); // Initial state: visually muted

  // Function to toggle play/pause and mute/unmute
  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current; // Capture the current ref value
    if (audio) {
      if (audio.paused || audio.muted) {
        // If paused or muted, attempt to play and unmute
        audio.muted = false; // Explicitly unmute
        audio.play().then(() => {
          setIsPlaying(true);
          setIsUserMuted(false); // Update visual state to unmuted
        }).catch(error => {
          console.error("Error playing audio:", error);
          // Fallback if autoplay is blocked: keep muted and not playing
          audio.muted = true;
          setIsPlaying(false);
          setIsUserMuted(true);
        });
      } else {
        // If playing and unmuted, pause and mute
        audio.pause();
        audio.muted = true; // Explicitly mute
        setIsPlaying(false);
        setIsUserMuted(true); // Update visual state to muted
      }
    }
  }, []);

  // Effect to ensure audio element is initially muted and volume is set
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true; // Ensure initial mute via JS
      audio.volume = 0.5; // Set a default volume
    }
  }, []);

  return (
    <div
      className="fixed right-8 bottom-8 z-40 cursor-pointer"
      onClick={togglePlayPause}
      aria-label={isUserMuted ? "Play audio" : "Pause audio"} // Aria label based on mute state
    >
      {/* Audio element. Start muted via HTML attribute. */}
      <audio ref={audioRef} src="/audio/nature-calming-310735.mp3" loop muted />
      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          border: '3px solid black', // Changed to black
          boxShadow: isPlaying && !isUserMuted ? '0 0 15px rgba(139, 92, 246, 0.8)' : 'none',
        }}
      >
        <img
          src="/speakers-svgrepo-com.svg"
          alt="Speaker icon"
          // Class for visual grayscale/opacity based on muted state
          className={`w-10 h-10 transition-all duration-300 ${isUserMuted ? 'filter grayscale opacity-60' : 'filter invert-0 opacity-100'}`}
        />
        {isUserMuted && ( // Show mute line if isUserMuted is true
          <div
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className="w-10 h-1 bg-red-500 transform rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer; 