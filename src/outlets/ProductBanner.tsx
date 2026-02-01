'use client';
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useMobile } from "@/components/MobileProvider";

interface ProductBannerProps {
  title: string;
  description: string;
  image: StaticImageData;
  bgColor: string;
  imageClass: string;
  titleBgColor: string;
  alt?: string;
}

const ProductBanner: React.FC<ProductBannerProps> = ({ title, description, image, bgColor, imageClass, titleBgColor, alt }) => {
  const defaultAlt = `PinkCity ${title} - Premium mouth freshener product by Jaipur's finest manufacturer`;
  const isMobile = useMobile();
  return (
    <section className={`w-full flex justify-baseline ${bgColor} ${isMobile ? 'flex-col-reverse pt-6' : ''}`}>
      <div className={`${isMobile ? "w-full" : "w-1/2"} ${imageClass}`}>
        <Image
          src={image}
          alt={alt || defaultAlt}
          loading="lazy"
          className="object-fill origin-bottom-left"
        />
      </div>
      <div className={`${isMobile ? "w-full" : "w-1/2"} text-white flex flex-col items-center justify-center`}>
        <div className={`h-full ${isMobile ? "w-full" : "w-3/4"} flex flex-col justify-center ${!isMobile ? "items-start  px-16 pe-0" : "items-center px-6"} gap-12`}>
          <div className="relative">
            <div
              className={`absolute inset-0 ${titleBgColor} transform -rotate-2 origin-left`}
            ></div>
            <h2 className={`relative ps-2 pe-8 py-2 ${isMobile ? "text-3xl" : "text-6xl"} font-extrabold`}>{title}</h2>
          </div>
          <p className={`${isMobile ? "text-xs w-full" : "text-xl  max-w-3/4"}`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
