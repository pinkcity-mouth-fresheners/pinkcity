'use client';
import Image from "next/image";
import React, { useRef } from "react";
import AboutUsLogo from "../../public/images/about_us.svg";
import Logo from "../../public/images/logo.svg"
import SectionHeading from "@/components/SectionHeading";
import { useMobile } from "@/components/MobileProvider";
import AboutBanner from "./AboutBanner";

const AboutUs = () => {
  // const [isInView, setIsInView] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const philosophyImages = [AboutUs1, AboutUs2];

  // const nextSlide = useCallback(() => {
  //   setCurrentSlide((prev) =>
  //     prev === philosophyImages.length - 1 ? 0 : prev + 1
  //   );
  // }, [philosophyImages.length]);

  // useEffect(() => {
  //   if (isMobile) {
  //     const slideInterval = setInterval(nextSlide, 2000);
  //     return () => clearInterval(slideInterval);
  //   }
  // }, [isMobile, nextSlide]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setTimeout(() => {
  //         setIsInView(entry.isIntersecting);
  //       }, 500); // Delay of 500ms
  //     },
  //     {
  //       threshold: 0.2, // Trigger when 30% of the element is visible
  //       rootMargin: "0px 0px -10% 0px", // Trigger slightly before the element is fully visible
  //     }
  //   );

  //   if (imageContainerRef.current) {
  //     observer.observe(imageContainerRef.current);
  //   }

  //   return () => {
  //     if (imageContainerRef.current) {
  //       observer.unobserve(imageContainerRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div
      id="about"
      className="w-full py-14 px-0 flex flex-col justify-center items-center gap-6 relative">
      <div
        className={`${!isMobile ? "sticky" : ""
          } top-20 w-full flex justify-center bg-white z-20 py-4`}
      >
        <SectionHeading title="About Us" />
      </div>
      {isMobile && <AboutBanner />}
      {/* Desktop: Single flex row with sticky image on left, both text sections on right */}
      {!isMobile && (
        <div className="flex flex-row items-start justify-between w-full mt-14">
          {/* Sticky left image — spans both sections */}
          <div
            className="rounded-r-[50] max-w-1/3 overflow-hidden z-10 sticky top-45 relative"
          >
            <Image
              src={AboutUsLogo}
              alt="PinkCity Mouth Freshener - Premium Mukhwas Manufacturer in Jaipur Since 1982"
              className="z-10"
            />
            <Image
              src={Logo}
              alt="PinkCity Mouth Freshener Logo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            />
          </div>
          {/* Right column: both text sections stacked */}
          <div className="max-w-3/5 px-18 text-lg py-4 flex flex-col gap-12">
            {/* About Us Text */}
            <div>
              <h2 className="font-semibold text-2xl py-2 sticky top-40 bg-white z-10">
                PinkCity Mouth Freshener - Celebrating Tradition, Crafting
                Premium Mukhwas
              </h2>
            </div>
            <p className="text-justify">
              Welcome to <strong>PinkCity Mouth Freshener</strong>, Jaipur {"'"}s
              leading manufacturer of premium mukhwas and traditional mouth
              fresheners. Every blend we create is a reflection of India {"'"}s
              timeless hospitality and Jaipur {"'"}s rich cultural heritage.
            </p>
            <p className="text-justify">
              Since 1982, we have been dedicated to creating{" "}
              <strong>premium mouth fresheners</strong> that combine authentic
              flavors, unmatched freshness, and uncompromising hygiene. What began
              as a small initiative rooted in tradition has today grown into a
              trusted household name across India and beyond. Our{" "}
              <strong>traditional mukhwas</strong> products are crafted with care
              to deliver the authentic taste of Rajasthan.
              <br />
              <br />
              Our journey as a{" "}
              <strong>mouth freshener manufacturer in Jaipur</strong> is built on
              passion and precision. From sourcing the finest ingredients to
              perfecting each blend, every step is guided by our commitment to
              purity, quality, and consistency. We specialize in{" "}
              <strong>paan mukhwas</strong>, saunf products, supari, and a wide
              range of mouth freshening solutions.
              <br />
              <br />
              At <strong>PinkCity Mouth Freshener</strong>, we don {"'"}t just
              make mouth fresheners — we curate experiences. With a legacy
              grounded in trust and a future driven by innovation, we invite you
              to join us in this flavorful journey —{" "}
              <b>where every pinch tells a story of authentic Jaipur taste.</b>
            </p>

            {/* Philosophy Text */}
            <div>
              <h2 className="font-semibold text-2xl py-2 sticky top-40 bg-white z-10">
                Our Philosophy - Premium Quality Mukhwas for Every Occasion
              </h2>
            </div>
            <p className="text-justify">
              At <strong>PinkCity Mouth Freshener</strong>, we believe taste is
              tradition. Our <strong>Indian mouth fresheners</strong> are more
              than just an after-meal ritual — they{"'"}re a symbol of warmth,
              culture, and connection. We craft each{" "}
              <strong>mukhwas product</strong> with the same care and respect that
              has defined Indian hospitality for centuries.
              <br />
              <br />
              Our philosophy is centered around three promises —{" "}
              <strong>
                authentic flavor, premium quality, and absolute freshness
              </strong>
              . Every ingredient in our <strong>Jaipur mukhwas</strong> is
              handpicked and processed under hygienic conditions to ensure that
              what reaches you is nothing short of perfection. As a trusted{" "}
              <strong>mouth freshener supplier</strong>, we maintain the highest
              standards of quality control.
              <br />
              <br />
              We understand that modern consumers seek both taste and trust. That
              {"'"}s why our blends bring together traditional recipes and
              contemporary flavors — offering something for every generation, from
              the nostalgic to the adventurous. Whether you{"'"}re looking for{" "}
              <strong>wholesale mouth fresheners</strong> or retail products, we
              have the perfect solution.
              <br />
              <br />
              Choosing <strong>PinkCity Mouth Freshener</strong> means choosing a
              brand that values honesty, craftsmanship, and care. We don {"'"}t
              just want to satisfy your taste buds — we want to become a part of
              your family{"'"}s everyday moments, celebrations, and traditions.
              Experience the authentic taste of{" "}
              <strong>Rajasthani mukhwas</strong> with every pinch.
              <br />
              <br />
              <b>
                PinkCity Mouth Freshener — Where Taste Meets Tradition Since 1982.
              </b>
            </p>
          </div>
        </div>
      )}

      {/* Mobile: Keep original separate layout */}
      {isMobile && (
        <>
          {/* About Us Content - Mobile */}
          <div className="flex flex-col items-start justify-between w-full">
            <div className="w-full px-6 text-lg py-4 flex flex-col gap-12">
              <div className="w-full flex justify-start place-items-stretch gap-3">
                <div className="h-full bg-pinkcity-dark text-pinkcity-dark text-lg">
                  h
                  <br />h
                </div>
                <h2 className="font-semibold text-xl sticky top-40 bg-white z-10">
                  Celebrating Tradition,
                  <br /> Crafting Premium Mukhwas
                </h2>
              </div>
              <p className="text-justify text-xs">
                Welcome to <strong>PinkCity Mouth Freshener</strong>, Jaipur {"'"}s
                leading manufacturer of premium mukhwas and traditional mouth
                fresheners. Every blend we create is a reflection of India {"'"}s
                timeless hospitality and Jaipur {"'"}s rich cultural heritage.
              </p>
              <div className="w-[65%] mx-auto -my-6 rounded-2xl overflow-hidden">
                <Image
                  src={Logo}
                  alt="PinkCity Mouth Freshener Logo"
                  className="z-20"
                />
              </div>
              <p className="text-justify text-xs">
                Since 1982, we have been dedicated to creating{" "}
                <strong>premium mouth fresheners</strong> that combine authentic
                flavors, unmatched freshness, and uncompromising hygiene. What began
                as a small initiative rooted in tradition has today grown into a
                trusted household name across India and beyond. Our{" "}
                <strong>traditional mukhwas</strong> products are crafted with care
                to deliver the authentic taste of Rajasthan.
                <br />
                <br />
                Our journey as a{" "}
                <strong>mouth freshener manufacturer in Jaipur</strong> is built on
                passion and precision. From sourcing the finest ingredients to
                perfecting each blend, every step is guided by our commitment to
                purity, quality, and consistency. We specialize in{" "}
                <strong>paan mukhwas</strong>, saunf products, supari, and a wide
                range of mouth freshening solutions.
                <br />
                <br />
                At <strong>PinkCity Mouth Freshener</strong>, we don {"'"}t just
                make mouth fresheners — we curate experiences. With a legacy
                grounded in trust and a future driven by innovation, we invite you
                to join us in this flavorful journey —{" "}
                <b>where every pinch tells a story of authentic Jaipur taste.</b>
              </p>
            </div>
          </div>
          {/* Philosophy Section - Mobile */}
          <div className="flex flex-col-reverse items-start justify-between px-2 w-full">
            <div className="w-full px-4 text-xs gap-4 text-justify flex flex-col">
              <div className="w-full flex justify-start place-items-stretch gap-3 pb-4">
                <div className="h-full bg-pinkcity-dark text-pinkcity-dark text-lg">
                  h
                  <br />h
                </div>
                <h2 className="font-semibold text-xl sticky top-40 bg-white z-10">
                  Premium Quality Mukhwas
                  <br />
                  for Every Occasion
                </h2>
              </div>
              <p>
                At <strong>PinkCity Mouth Freshener</strong>, we believe taste is
                tradition. Our <strong>Indian mouth fresheners</strong> are more
                than just an after-meal ritual — they{"'"}re a symbol of warmth,
                culture, and connection. We craft each{" "}
                <strong>mukhwas product</strong> with the same care and respect that
                has defined Indian hospitality for centuries.
                <br />
                <br />
                Our philosophy is centered around three promises —{" "}
                <strong>
                  authentic flavor, premium quality, and absolute freshness
                </strong>
                . Every ingredient in our <strong>Jaipur mukhwas</strong> is
                handpicked and processed under hygienic conditions to ensure that
                what reaches you is nothing short of perfection. As a trusted{" "}
                <strong>mouth freshener supplier</strong>, we maintain the highest
                standards of quality control.
                <br />
                <br />
                We understand that modern consumers seek both taste and trust. That
                {"'"}s why our blends bring together traditional recipes and
                contemporary flavors — offering something for every generation, from
                the nostalgic to the adventurous. Whether you{"'"}re looking for{" "}
                <strong>wholesale mouth fresheners</strong> or retail products, we
                have the perfect solution.
                <br />
                <br />
                Choosing <strong>PinkCity Mouth Freshener</strong> means choosing a
                brand that values honesty, craftsmanship, and care. We don {"'"}t
                just want to satisfy your taste buds — we want to become a part of
                your family{"'"}s everyday moments, celebrations, and traditions.
                Experience the authentic taste of{" "}
                <strong>Rajasthani mukhwas</strong> with every pinch.
                <br />
                <br />
                <b>
                  PinkCity Mouth Freshener — Where Taste Meets Tradition Since 1982.
                </b>
              </p>
            </div>
            <div
              className="w-full"
              id="aboutUsImages"
              ref={imageContainerRef}
            >
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutUs;
