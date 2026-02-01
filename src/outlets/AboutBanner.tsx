'use client';
import React from 'react';
import DesignBanner from "../../public/images/design_banner.svg";
import HawMahal from "../../public/images/hawaMahal.svg";
import Image from 'next/image';
import { useMobile } from '@/components/MobileProvider';

const AboutBanner = () => {
  const isMobile = useMobile();

  return (
    <div id="about-banner" className={`${isMobile ? 'p-4' : 'mt-12  bg-pinkcity-dark'}`}>
      <div className={isMobile ? 'w-[95%] mx-auto bg-pinkcity-dark rounded-2xl overflow-hidden' : 'w-full flex flex-col'}>
        <Image src={DesignBanner} alt="Design Banner" layout="responsive" />
        <div className={isMobile ? '-mt-13 z-5' : '-mt-52 xl:-mt-68 z-5'}>
          <Image src={HawMahal} alt="Hawa Mahal" layout="responsive" />
        </div>
      </div>
    </div>
  )
}

export default AboutBanner;