import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                {/* PinkCity themed loader - a pulsing circle or similar elegant animation */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                    <div className="absolute h-full w-full animate-ping rounded-full bg-[#FE5E85] opacity-20"></div>
                    <div className="relative h-12 w-12 rounded-full bg-[#D93A61] shadow-lg"></div>
                </div>
                <p className="animate-pulse text-sm font-medium tracking-widest text-[#51914E]">
                    PINKCITY
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
