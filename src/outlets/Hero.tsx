'use client';
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMobile } from "@/components/MobileProvider";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    setIsAnimated(false);
    const timer = setTimeout(
      () => {
        setIsAnimated(true);
      },
      isMobile ? 1 : 200
    );
    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleScroll = () => {
    let scrollId: number;
    const scrollSpeed = 1; // Adjust speed for "thorough" scrolling

    const stopScroll = () => {
      cancelAnimationFrame(scrollId);
      removeStopListeners();
    };

    const removeStopListeners = () => {
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchmove", stopScroll);
      window.removeEventListener("touchstart", stopScroll);
      window.removeEventListener("keydown", stopScroll);
      window.removeEventListener("mousedown", stopScroll);
    };

    const scrollStep = () => {
      window.scrollBy(0, scrollSpeed);

      // Stop if reached bottom (with small tolerance)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        stopScroll();
        return;
      }

      scrollId = requestAnimationFrame(scrollStep);
    };

    // Add listeners to stop scroll on valid user interaction
    window.addEventListener("wheel", stopScroll, { passive: true });
    window.addEventListener("touchmove", stopScroll, { passive: true });
    window.addEventListener("touchstart", stopScroll, { passive: true });
    window.addEventListener("keydown", stopScroll);
    window.addEventListener("mousedown", stopScroll);

    scrollId = requestAnimationFrame(scrollStep);
  };

  return (
    <>
      <div
        id="hero"
        className={`w-full h-screen bg-white flex items-center justify-center ${isMobile ? "pt-0" : "pt-24 px-10"
          }`}
      >
        <div
          className={`relative ${isMobile ? "w-full h-screen" : "w-full h-11/12"
            } text-center bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] ${isMobile ? "rounded-[0]" : "rounded-[59px]"
            } flex flex-col items-center ${isMobile ? "justify-center" : "justify-end"
            } gap-4 lg:gap-6 xl:gap-10`}
        >
          {/* Background Stars and Elaichi */}
          <div
            className={`absolute inset-0 overflow-hidden pointer-events-none rounded-[59] ${isMobile ? "hidden" : ""
              }`}
          >
            {/* Elaichi Background Elements */}
            <Image
              src="/images/elaichi.svg"
              alt="Premium cardamom elaichi used in PinkCity mouth freshener mukhwas"
              width={104}
              height={104}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 ${isAnimated
                ? "top-[-6%] right-[5%] scale-120 rotate-25"
                : "top-[-20%] right-[-20%] scale-160 rotate-75"
                }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Natural ingredients for authentic Jaipur mukhwas"
              width={112}
              height={112}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${isAnimated
                ? "top-[8%] left-[15%] scale-75 rotate-30"
                : "top-[5%] left-[5%] scale-100 rotate-2"
                }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Fresh ingredients for PinkCity mouth freshener products"
              width={112}
              height={112}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${isAnimated
                ? "bottom-[20%] left-[8%] scale-75 -rotate-45"
                : "bottom-[5%] left-[5%] scale-100 -rotate-5"
                }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Quality elaichi cardamom for traditional Indian mukhwas"
              width={112}
              height={112}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${isAnimated
                ? "bottom-[25%] right-[25%] scale-75 rotate-40"
                : "bottom-[5%] right-[5%] scale-100 rotate-13"
                }`}
            />
            {/* Top area stars */}
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[10%] left-[8%] text-pinkcity text-lg sm:text-2xl md:text-4xl transform rotate-12 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[15%] right-[12%] text-pinkcity-dark text-sm sm:text-lg md:text-xl transform -rotate-45 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[8%] left-[25%] text-pinkcity text-xs sm:text-sm md:text-lg transform rotate-90 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[12%] right-[30%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-30 opacity-90"
            />
            {/* Around main title stars */}
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[22%] left-[15%] text-pinkcity-dark text-lg sm:text-xl md:text-2xl transform rotate-45 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[28%] right-[18%] text-pinkcity text-sm sm:text-lg transform -rotate-60 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[25%] left-[40%] text-pinkcity-dark text-xs sm:text-sm md:text-lg transform rotate-15 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[32%] right-[45%] text-pinkcity text-sm sm:text-lg transform -rotate-75 opacity-90"
            />
            {/* Between title and subtitle stars */}
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[38%] left-[10%] text-pinkcity text-lg sm:text-xl transform rotate-90 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[42%] right-[8%] text-pinkcity-dark text-sm sm:text-lg md:text-xl transform -rotate-12 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[40%] left-[35%] text-pinkcity text-xs sm:text-sm transform rotate-135 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[44%] right-[35%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-45 opacity-90"
            />
            {/* Around subtitle stars */}
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[52%] left-[12%] text-pinkcity-dark text-lg sm:text-xl transform rotate-60 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[48%] right-[15%] text-pinkcity text-sm sm:text-lg transform -rotate-90 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[55%] left-[25%] text-pinkcity text-xs sm:text-sm md:text-lg transform rotate-30 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[50%] right-[25%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-105 opacity-90"
            />
            {/* Around tagline stars */}
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[62%] left-[8%] text-pinkcity text-lg sm:text-xl transform rotate-45 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[66%] right-[10%] text-pinkcity-dark text-sm sm:text-lg md:text-xl transform -rotate-75 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[64%] left-[30%] text-pinkcity-dark text-xs sm:text-sm transform rotate-120 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[68%] right-[30%] text-pinkcity text-sm sm:text-lg transform -rotate-15 opacity-90"
            />
            {/* Bottom area stars */}
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[75%] left-[15%] text-pinkcity-dark text-lg sm:text-xl transform rotate-75 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[72%] right-[20%] text-pinkcity text-sm sm:text-lg transform -rotate-30 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[78%] left-[40%] text-pinkcity text-xs sm:text-sm md:text-lg transform rotate-90 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[74%] right-[40%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-60 opacity-90"
            />
            {/* Additional scattered stars for density */}
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[18%] left-[60%] text-pinkcity text-xs sm:text-sm transform rotate-45 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[35%] left-[65%] text-pinkcity-dark text-sm transform -rotate-90 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[58%] left-[55%] text-pinkcity text-xs sm:text-sm transform rotate-15 opacity-90"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-[45%] left-[70%] text-pinkcity-dark text-sm transform -rotate-45 opacity-90"
            />
          </div>

          <div
            className={`flex items-center justify-center text-white font-bold relative z-10 ${isMobile ? "text-5xl gap-3" : "gap-6 text-7xl xl:text-8xl"
              }`}
          >
            <span
              className={`${isMobile ? "text-3xl" : "text-7xl xl:text-8xl"}`}
            >
              Aisa
            </span>
            <div className="relative">
              <div
                className={`absolute inset-0 bg-[#51914E] transform -rotate-2 origin-left transition-transform duration-2000 ${isAnimated ? "scale-x-100" : "scale-x-10"
                  }`}
              ></div>
              <span
                className={`relative py-2 ${isMobile ? "text-3xl px-3" : "px-6 text-7xl xl:text-8xl"
                  }`}
              >
                SWAAD,
              </span>
            </div>
          </div>
          <div className={`relative z-10 ${isMobile ? "-mt-3" : ""}`}>
            <span
              className={`text-white font-bold ${isMobile ? "text-3xl" : "text-7xl xl:text-8xl"
                }`}
            >
              Jo Sada Rahe Yaad
            </span>
          </div>
          <div className="relative z-10">
            <h1
              className={`text-white font-semibold ${isMobile ? "text-xs px-4" : "text-2xl md:text-3xl mb-2"
                }`}
            >
              PinkCity Mouth Freshener - Premium Mukhwas Manufacturer in Jaipur
              Since 1982
            </h1>
          </div>
          {!isMobile ? (
            <div className="relative h-4/10 lg:h-3/10 xl:h-1/10 min-h-42 w-full flex justify-center overflow-hidden">
              <button
                onClick={handleScroll}
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-2000 ${isAnimated
                  ? isMobile
                    ? "bottom-1/2"
                    : "bottom-[60%]"
                  : "bottom-[-10%] opacity-0"
                  } bg-[#51914E] rounded-[10] p-6 py-2 cursor-pointer hover:bg-[#437a40] active:scale-95`}
              >
                <h1
                  className={`text-white ${isMobile ? "text-2xl" : "text-3xl"}`}
                >
                  EXPLORE !
                </h1>
              </button>
            </div>
          ) : (
            <div
              onClick={handleScroll}
              className="absolute bottom-25 flex flex-col text-xl text-white opacity-50 animate-bounce cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronDown} />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
