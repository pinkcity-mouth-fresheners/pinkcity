'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import AboutBanner from "@/outlets/AboutBanner";
import AboutUs from "@/outlets/AboutUs";
import ContactUs from "@/outlets/ContactUs";
import Hero from "@/outlets/Hero";
import OurProducts from "@/outlets/OurProducts";
import ProductBanner from "@/outlets/ProductBanner";
import SocialMediaSection from "@/outlets/SocialMediaSection";
import TopSellers from "@/outlets/TopSellers";
import FAQ from "@/outlets/FAQ";
import Banner from "../../public/multimedia/banner.svg";
import Banner2 from "../../public/multimedia/banner_2.svg";
import Header from '@/components/Header';
import { MobileProvider, useMobile, useMobileInitialized } from '@/components/MobileProvider';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import LoadingScreen from '@/components/LoadingScreen';

const BrochureOverlay = dynamic(() => import('@/components/BrochureOverlay'), { ssr: false });

const productBanners = [
  {
    title: "PAAN MUKHWAS",
    description: "An indulgent fusion of authentic paan flavor and natural freshness — crafted to give you the true essence of India's favorite post-meal delight. PinkCity's premium paan mukhwas blends traditional Jaipur recipes with modern taste.",
    image: Banner,
    bgColor: "bg-[radial-gradient(circle,_#FE5E85,_#D93A61)]",
    titleBgColor: "bg-[#51914E]",
    alt: "PinkCity Paan Mukhwas - Authentic Indian mouth freshener with traditional paan flavor from Jaipur",
  },
  {
    title: "MUKHWAS",
    description: "A refreshing burst of mint, fennel, and handpicked spices — thoughtfully blended to invigorate your senses and keep your breath naturally fresh. Our traditional mukhwas represents the finest quality ingredients from Jaipur.",
    image: Banner2,
    bgColor: "bg-[radial-gradient(circle,_#FE5E85,_#D93A61)]",
    titleBgColor: "bg-[#51914E]",
    alt: "PinkCity Mukhwas - Premium traditional Indian mouth freshener with fennel and spices from Jaipur",
  },
];

const PageContent = () => {
  const isMobile = useMobile();
  return (
    <main className="mx-auto no-scrollbar max-w-screen">
      <Hero />
      {!isMobile && <AboutBanner />}
      <AboutUs />
      <ProductBanner {...productBanners[0]} />
      <TopSellers />
      <OurProducts />
      <ProductBanner {...productBanners[1]} />
      <SocialMediaSection />
      <FAQ />
      <ContactUs />
      <Footer />
      <Chatbot />
    </main>
  );
}

const AppShell = ({
  children,
  onBrochureClick,
  isBrochureOpen,
  onBrochureClose,
}: {
  children: React.ReactNode;
  onBrochureClick: () => void;
  isBrochureOpen: boolean;
  onBrochureClose: () => void;
}) => {
  const isInitialized = useMobileInitialized();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header onBrochureClick={onBrochureClick} />
      {isBrochureOpen && <BrochureOverlay onClose={onBrochureClose} />}
      {children}
    </>
  );
};

export default function Home() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const openBrochure = () => setIsBrochureOpen(true);
  const closeBrochure = () => setIsBrochureOpen(false);

  return (
    <MobileProvider>
      <AppShell
        onBrochureClick={openBrochure}
        isBrochureOpen={isBrochureOpen}
        onBrochureClose={closeBrochure}
      >
        <PageContent />
      </AppShell>
    </MobileProvider>
  );
}
