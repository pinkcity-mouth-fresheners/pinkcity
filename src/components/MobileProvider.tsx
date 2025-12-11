'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface MobileContextType {
  isMobile: boolean;
  isInitialized: boolean;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context.isMobile;
};

export const useMobileInitialized = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobileInitialized must be used within a MobileProvider');
  }
  return context.isInitialized;
};

export const MobileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
      setIsInitialized(true);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, isInitialized }}>
      {children}
    </MobileContext.Provider>
  );
};
