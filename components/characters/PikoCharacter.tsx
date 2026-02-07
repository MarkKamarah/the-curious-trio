'use client';

import { useState, useEffect } from 'react';

interface PikoCharacterProps {
  state?: 'idle' | 'listening' | 'searching' | 'success' | 'error';
  message?: string;
}

export default function PikoCharacter({ state = 'idle', message }: PikoCharacterProps) {
  const [displayMessage, setDisplayMessage] = useState('');

  useEffect(() => {
    if (message) {
      setDisplayMessage(message);
    } else {
      // Default messages based on state
      switch (state) {
        case 'idle':
          setDisplayMessage('Hi! What should we explore today?');
          break;
        case 'listening':
          setDisplayMessage('I\'m listening...');
          break;
        case 'searching':
          setDisplayMessage('Let me find that for you!');
          break;
        case 'success':
          setDisplayMessage('Found it! Check out these results!');
          break;
        case 'error':
          setDisplayMessage('Oops! Something went wrong. Let\'s try again!');
          break;
        default:
          setDisplayMessage('Hi! What should we explore today?');
      }
    }
  }, [state, message]);

  const getEmoji = () => {
    switch (state) {
      case 'listening':
        return '👂';
      case 'searching':
        return '🔍';
      case 'success':
        return '🎉';
      case 'error':
        return '😅';
      default:
        return '🦊';
    }
  };

  const getAnimation = () => {
    switch (state) {
      case 'searching':
        return 'animate-bounce';
      case 'success':
        return 'animate-pulse';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      {/* Character Display - placeholder for future Lottie animation */}
      <div className={`text-8xl mb-4 ${getAnimation()}`}>
        {getEmoji()}
      </div>
      
      {/* Character Name */}
      <h2 className="text-2xl font-bold text-piko-primary mb-2">
        Piko the Red Panda
      </h2>
      
      {/* Speech Bubble */}
      {displayMessage && (
        <div className="relative bg-white rounded-2xl shadow-lg px-6 py-4 max-w-md">
          {/* Speech bubble arrow */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white"></div>
          
          <p className="text-center text-gray-700">
            {displayMessage}
          </p>
        </div>
      )}
      
      {/* Development Note */}
      <p className="mt-4 text-xs text-gray-400 italic">
        (Animations coming in Phase 3!)
      </p>
    </div>
  );
}
