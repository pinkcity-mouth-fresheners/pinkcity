'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useMobile } from "./MobileProvider";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

const Footer = () => {
  const isMobile = useMobile();

  return (
    <footer className="bg-white text-black flex flex-col items-center justify-center p-16" role="contentinfo">
      <div className={`w-full flex items-start justify-between ${isMobile ? "flex-col gap-4" : "flex-row"}`}>
        <div className={`flex flex-col ${isMobile ? "items-center pb-4" : "items-start"} gap-10`}>
          <div className="w-full flex items-start justify-start">
            <Image src={Logo} alt="PinkCity Mouth Freshener Logo" className={`h-auto ${isMobile ? "w-full" : "w-1/5"}`} />
          </div>
          <div className={`flex gap-4 ${!isMobile ? "ps-4" : "justify-center"}`} role="navigation" aria-label="Social media links">
            <a
              href="https://www.instagram.com/pinkcitymouthfresheners?igsh=eWNtYzB0NXV2Nnh5&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow PinkCity Mouth Freshener on Instagram"
            >
              <div className="bg-pinkcity-dark p-4 rounded-lg hover:bg-pinkcity transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/share/1PAhoafFNe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow PinkCity Mouth Freshener on Facebook"
            >
              <div className="bg-pinkcity-dark p-4 rounded-lg hover:bg-pinkcity transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
              </div>
            </a>
          </div>
        </div>
        <div className={`flex opacity-90 min-w-1/3 ${isMobile ? "flex-col gap-14" : "flex-row gap-24"}`}>
          <div className="text-left flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <a href="#about" className="text-sm hover:text-pinkcity transition-colors">About Us</a>
            <a href="#products" className="text-sm hover:text-pinkcity transition-colors">Our Products</a>
            <a href="#contact" className="text-sm hover:text-pinkcity transition-colors">Contact Us</a>
            <a href="#faq" className="text-sm hover:text-pinkcity transition-colors">FAQ</a>
          </div>
          <div className="text-left flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <a href="#products" className="text-sm hover:text-pinkcity transition-colors">Paan Mukhwas</a>
            <a href="#products" className="text-sm hover:text-pinkcity transition-colors">Traditional Mukhwas</a>
            <a href="#products" className="text-sm hover:text-pinkcity transition-colors">Saunf Products</a>
            <a href="#products" className="text-sm hover:text-pinkcity transition-colors">Supari Products</a>
          </div>
          <div className="sr-only">
            <h4 className="font-bold text-lg mb-4">Keywords</h4>
            <p className="text-xs">Mouth Freshener Jaipur</p>
            <p className="text-xs">Mukhwas Manufacturer</p>
            <p className="text-xs">Premium Mouth Freshener</p>
            <p className="text-xs">Wholesale Mukhwas</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 max-w-4xl">
        <p className="text-lg opacity-90 mb-2">
          © {new Date().getFullYear()} <strong>PinkCity Mouth Freshener</strong>. All rights reserved.
        </p>
        <p className="text-sm opacity-90 mb-4">
          Premium Mukhwas Manufacturer in Jaipur | Crafted with ❤️ in the Pink City since 1982
        </p>
        <p className="text-xs opacity-75">
          <strong>PinkCity Mouth Freshener</strong> - Your trusted source for authentic Indian mouth fresheners, traditional mukhwas, paan products, and premium quality supari. Serving Jaipur, Rajasthan, and all of India with the finest mouth freshening products.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
