import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-800 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Futuristic loading ring */}
        <div className="relative w-80 h-80 mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-800">
            <div 
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500 transition-transform duration-100 ease-linear"
              style={{ transform: `rotate(${progress * 3.6}deg)` }}
            />
          </div>
          
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border border-gray-700">
            <div 
              className="absolute inset-0 rounded-full border border-transparent border-b-cyan-300 transition-transform duration-100 ease-linear"
              style={{ transform: `rotate(${-progress * 2.4}deg)` }}
            />
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-gray-900 px-8 py-4 rounded-lg border border-gray-700 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white mb-2">{progress}%</div>
              <div className="text-sm text-gray-400 tracking-wider">LOADING...</div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Progress bar */}
        <div className="w-96 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <div className="mt-6 text-gray-400 text-sm tracking-widest animate-pulse">
          INITIALIZING SOLAR DIAGNOSTICS...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;