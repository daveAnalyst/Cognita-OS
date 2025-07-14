// components/ClientLayout.tsx
'use client';

import { useState, useEffect } from 'react';

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // This effect runs only once on the client after the component mounts
    // and confirms that we are ready to show content.
    setIsMounted(true);

    // Start the fade-out process after a short delay to ensure everything is rendered
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 100); // A small delay of 100ms

    // Clean up the timer if the component unmounts
    return () => clearTimeout(fadeOutTimer);
  }, []); // The empty dependency array ensures it runs only once

  return (
    <>
      {/* Loading screen overlay */}
      {/* This will only render if the component is NOT yet mounted */}
      {!isMounted && (
         <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
            <div className="loading-spinner"></div>
         </div>
      )}
      
      {/* We use a separate div for fading that gets removed */}
      {!isFadingOut && (
        <div 
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-100"
        >
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Main content */}
      <main className="relative min-h-screen">
        {children}
      </main>
    </>
  );
};