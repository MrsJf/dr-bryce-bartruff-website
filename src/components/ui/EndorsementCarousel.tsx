'use client';

import { useState, useEffect } from 'react';
import { endorsements } from '@/data/endorsements';

export default function EndorsementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === endorsements.length - 1 ? 0 : prevIndex + 1
      );
    }, 9750); // Change every 9.75 seconds (6.75 + 3 more seconds)

    return () => clearInterval(timer);
  }, []);

  const currentEndorsement = endorsements[currentIndex];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-[700px] flex flex-col">
      <div className="text-center flex flex-col h-full">
        <svg 
          className="w-6 h-6 text-blue-400 mx-auto mb-2 flex-shrink-0" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.56-.024-.49.112-.919.31-1.285.594-.366.283-.659.63-.878 1.041-.219.41-.329.846-.329 1.306 0 .547.108 1.005.324 1.374.216.368.52.66.912.876.392.215.844.324 1.357.324.797 0 1.497-.235 2.099-.705.602-.47.903-1.066.903-1.787l-.526-1.97zM18.5 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.56-.024-.49.112-.919.31-1.285.594-.366.283-.659.63-.878 1.041-.219.41-.329.846-.329 1.306 0 .547.108 1.005.324 1.374.216.368.52.66.912.876.392.215.844.324 1.357.324.797 0 1.497-.235 2.099-.705.602-.47.903-1.066.903-1.787l-.526-1.97z"/>
        </svg>
        
        <div className="flex-1 flex items-center justify-center px-2 py-2">
          <blockquote className="text-gray-700 text-base italic leading-relaxed text-center">
            "{currentEndorsement.quote}"
          </blockquote>
        </div>
        
        <div className="border-t border-gray-200 pt-3 pb-2 flex-shrink-0">
          <p className="font-semibold text-gray-900 text-sm">{currentEndorsement.author}</p>
          {currentEndorsement.title && (
            <p className="text-xs text-gray-600 leading-tight mt-1">{currentEndorsement.title}</p>
          )}
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-2 space-x-2 flex-shrink-0">
          {endorsements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to endorsement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}