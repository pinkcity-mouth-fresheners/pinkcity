"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import Star from "../../public/images/star.svg";
import Image from "next/image";
import { useMobile } from "./MobileProvider";

type Props = {
  text: string;
  imageSrc: string;
  onClick?: () => void;
};

const TopSellerItem = ({ text, imageSrc, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMobile();
  const [initialHeight, setInitialHeight] = useState<number | undefined>(
    undefined
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setInitialHeight(containerRef.current.offsetHeight);
    }
  }, [isMobile]);

  return (
    <div
      className={`${isMobile ? "w-full" : "w-3/12"
        } flex flex-col justify-start items-center gap-4 pb-4 group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={{ minHeight: initialHeight }} className={`relative w-full`}>
        <div className={`w-full bg-white h-0 group-hover:h-full flex justify-center items-center ${!isMobile ? 'transition-all duration-200 delay-[1500ms]' : ''}`}>
          {!isMobile && (<p
            className={`text-pinkcity-dark font-medium opacity-0 group-hover:opacity-100 text-4xl ${!isMobile ? 'transition-all duration-200 [transition-delay:500ms] group-hover:[transition-delay:500ms]' : ''}`}
            style={{ fontFamily: "var(--font-bentham)" }}
          >
            EXPLORE
          </p>)}
        </div>
        <div
          ref={containerRef}
          id="container"
          className={`w-full absolute bottom-0 left-0 rounded-t-[20px] overflow-hidden bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] flex flex-col items-center ${!isMobile ? 'transition-all duration-1500' : ''} ${isHovered ? "" : "pt-20"
            }
            ${isMobile ? "aspect-square rounded-[20px]" : ""}
          `}
        >
          <div className="w-4/5 flex items-center justify-center relative">
            <Image
              src={Star}
              alt="star"
              className={`w-full opacity-50 scale-[1.2] -translate-y-[10%] origin-top group-hover:scale-[1] group-hover:scale-y-80 group-hover:translate-y-[10%] ${!isMobile ? 'transition-all duration-1500' : ''}`}
            />
          </div>
          <p
            className={`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[110%] text-white text-5xl text-center group-hover:opacity-0 group-hover:-translate-y-[400%] ${!isMobile ? 'transition-all duration-1500' : ''}`}
            style={{ fontFamily: "var(--font-bentham)" }}
          >
            {text
              .toUpperCase()
              .split(" ")
              .map((word, index, arr) => (
                <React.Fragment key={index}>
                  {word}
                  {index < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
          <div className={`absolute top-1/2 left-1/2 w-full -translate-x-1/2 flex justify-center ${isMobile ? '-translate-y-9/12 scale-[1.15]' : '-translate-y-2/3 scale-[1.3]'}`}>
            <Image
              src={imageSrc}
              alt={text}
              width={400}
              height={400}
              style={{ width: 'auto', height: 'auto' }}
              className={`w-full z-10 object-cover transform scale-[1.1] translate-y-[70%] group-hover:scale-[.5] group-hover:rotate-180 group-hover:translate-y-[15%] ${!isMobile ? 'transition-all duration-1500' : ''}`}
            />
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="w-full flex justify-between items-center text-xl">
          <h2 className="text-2xl font-medium">{text}</h2>
          <div>
            <FontAwesomeIcon icon={faArrowRight} className="text-pinkcity" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSellerItem;
