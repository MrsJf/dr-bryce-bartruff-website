'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
  {
    src: '/images/carousel-1.jpg',
    alt: 'Dr. Bryce Bartruff speaking at conference'
  },
  {
    src: '/images/carousel-2.jpg',
    alt: 'Dr. Bryce Bartruff with family'
  },
  {
    src: '/images/carousel-3.jpg',
    alt: 'Dr. Bryce Bartruff ministry photo'
  },
  {
    src: '/images/carousel-4.jpg',
    alt: 'Dr. Bryce Bartruff professional photo'
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6500); // 25% slower than 5200: 5200 * 1.25 = 6500ms

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1);
    setIsPaused(false); // Resume auto-scroll when arrow is pressed
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1);
    setIsPaused(false); // Resume auto-scroll when arrow is pressed
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative h-96 mx-auto bg-gray-100 rounded-lg shadow-2xl overflow-hidden" style={{ width: '60%' }}>
      {/* Images */}
      <div className="relative h-full w-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={
                index === 0 || index === 3 
                  ? "object-contain scale-120" 
                  : "object-cover"
              }
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Invisible Pause/Play Button Overlay */}
      <button
        onClick={togglePause}
        className="absolute inset-0 w-full h-full bg-transparent cursor-pointer z-5 focus:outline-none"
        aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
        title={isPaused ? 'Click to resume' : 'Click to pause'}
      />

      {/* Pause/Play Icon Indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      )}

      {/* Navigation Arrows - Invisible but functional */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-0 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10 opacity-0"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-0 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10 opacity-0"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}