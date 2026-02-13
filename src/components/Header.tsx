'use client';
import React, { useState } from "react";
import { useMobile } from "./MobileProvider";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";

const headers = [
  {
    name: "ABOUT US",
    link: "#about",
  },
  {
    name: "PRODUCTS",
    link: "#products",
  },
  // {
  //   name: "PREMIUM",
  //   link: "#",
  // },
];

const Header = ({ onBrochureClick }: { onBrochureClick: () => void }) => {
  const isMobile = useMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header
        className={`w-screen flex items-center justify-between fixed bg-white/80 z-30 backdrop-blur-lg shadow-xs ${isMobile ? "p-2 px-4 text-xs" : "p-3 px-10 text-sm"
          }`}
        role="banner"
      >
        <div className={`overflow-clip aspect-[301/72] ${isMobile ? `w-1/` : `w-1/5`}`}>
          <a
            href="#hero"
            className="cursor-pointer"
            aria-label="PinkCity Mouth Freshener - Home"
          >
            <Image src={Logo} alt="PinkCity Mouth Freshener Logo" className={`${isMobile ? `w-1/3` : `w-2/5`}`} priority />
          </a>
        </div>
        {isMobile ? (
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="text-pinkcity-dark p-2 rounded"
            aria-label="Open menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-pinkcity-dark mb-1"></span>
              <span className="block w-5 h-0.5 bg-pinkcity-dark mb-1"></span>
              <span className="block w-5 h-0.5 bg-pinkcity-dark"></span>
            </div>
          </button>
        ) : (
          <nav
            className="flex items-center justify-center gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <button
              onClick={onBrochureClick}
              className="relative group overflow-hidden px-3 py-2"
              aria-label="View Product Catalogue"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                CATALOGUE
              </span>
              <div className="absolute inset-0 bg-[#51914E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-10"></div>
            </button>
            {headers.map((header) => (
              <a
                href={header.link}
                key={header.name}
                className="relative group overflow-hidden px-3 py-2"
                aria-label={`View ${header.name}`}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {header.name}
                </span>
                <div className="absolute inset-0 bg-[#51914E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-10"></div>
              </a>
            ))}
            <a
              href="#contact"
              className="relative group bg-pinkcity-dark text-white py-2.5 px-5 rounded-[9] overflow-hidden"
              aria-label="Contact PinkCity Mouth Freshener"
            >
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-[#51914E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
          </nav>
        )}
      </header>
      {isMobile && (
        <div
          className={`fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 h-full w-3/5 bg-white text-xl pt-10 shadow-lg z-40 transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 text-gray-800 text-5xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            <div className="p-4 mt-10">
              <nav
                className="flex flex-col gap-4"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <button
                  onClick={() => {
                    onBrochureClick();
                    setIsDrawerOpen(false);
                  }}
                  className="text-left p-2 hover:bg-gray-100 rounded"
                  aria-label="View Product Catalogue"
                >
                  CATALOGUE
                </button>
                {headers.map((header) => (
                  <a
                    href={header.link}
                    key={header.name}
                    className="text-left p-2 hover:bg-gray-100 rounded"
                    aria-label={`View ${header.name}`}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {header.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="text-left p-2 bg-pinkcity-dark text-white rounded"
                  aria-label="Contact PinkCity Mouth Freshener"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  CONTACT US
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
