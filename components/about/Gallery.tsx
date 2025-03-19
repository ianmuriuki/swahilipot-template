"use client"; // Ensure this is at the top

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      light: "/images/about/event.png",
      dark: "/images/about/event.png",
      alt: "An event at SwahiliPot Hub",
      caption: "Event led by Our Chief Mentor 001"
    },
    {
      light: "/images/about/pwani.png",
      dark: "/images/about/pwani.png",
      alt: "Art exhibition at SwahiliPot Hub",
      caption: "Pwani Innovation Week at Swahilipot Hub"
    },
    {
      light: "/images/about/attach.png",
      dark: "/images/about/attach.png",
      alt: "Kina Chris na Bruno",
      caption: "Techies and Volunteers at Swahilipot Hub"
    },
    {
      light: "/images/about/comm1.png",
      dark: "/images/about/comm1.png",
      alt: "Community meetup",
      caption: "Community gathering at Swahilipot Hub"
    },
    {
      light: "/images/about/mwanakupona.png",
      dark: "/images/about/mwanakupona.png",
      alt: "Hackathon event",
      caption: "Info session at Jitume Lab with techies"
    },
    {
      light: "/images/about/culture.png",
      dark: "/images/about/culture.png",
      alt: "Youth performance",
      caption: "Cultural performance by local youth"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-12 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Gallery</h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into our activities, events, and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-56 relative">
                <Image 
                  src={isDarkMode ? image.dark : image.light}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform hover:scale-105 cursor-pointer rounded-md shadow-sm hover:shadow-md"
                  layout="fill"
                  onClick={() => openLightbox(index)}
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{image.caption}</p>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button 
              className="absolute left-4 text-white text-4xl"
              onClick={() => navigateImage('prev')}
            >
              &#8249;
            </button>
            <div className="max-w-3xl max-h-[70vh]">
              <Image 
                src={isDarkMode ? images[selectedImage].dark : images[selectedImage].light} 
                alt={images[selectedImage].alt} 
                className="max-w-full max-h-[70vh] object-contain"
                layout="intrinsic" 
                width={700} 
                height={500} 
              />
              <p className="text-white text-center mt-3 text-sm">{images[selectedImage].caption}</p>
            </div>
            <button 
              className="absolute right-4 text-white text-4xl"
              onClick={() => navigateImage('next')}
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
