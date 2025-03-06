import React, { useState, useEffect } from 'react';

const Type = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      // Backspace effect
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, speed / 2); // Faster backspace speed

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false); // Switch back to typing
      }
    } else {
      // Typing effect
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // Start deleting after a short delay
        setTimeout(() => setIsDeleting(true), 1000); // Delay before backspacing
      }
    }
  }, [currentIndex, text, speed, isDeleting]);

  return (
    <div>
      {displayText}
      <span className="cursor">|</span> {/* Optional: Add a blinking cursor */}
    </div>
  );
};

export default Type;