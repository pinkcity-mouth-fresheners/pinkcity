import React from "react";
import TopSellerItem from "@/components/TopSellerItem";
import SectionHeading from "@/components/SectionHeading";
import Banarasi from "../../public/multimedia/banarasi_paan.png";
import CalcultiPaanGold from "../../public/multimedia/calcutti_pan_gold.png";
import DryPaan from "../../public/multimedia/dry_paan.png";
import { useMobile } from "@/components/MobileProvider";
import TopSellerMobileItem from "@/components/TopSellerMobileItem";

const topSellersData = [
  { text: "Banarsi Paan", imageSrc: Banarasi },
  { text: "Calcutti Paan Gold", imageSrc: CalcultiPaanGold },
  { text: "Dry Paan", imageSrc: DryPaan },
];

const TopSellers = () => {
  const isMobile  = useMobile();
  return (
    <section
      className="w-full py-24 flex flex-col justify-center items-center gap-14 relative"
      id="bestsellers"
    >
      <SectionHeading title="Best Selling Products" />
      <div className="text-center max-w-3xl mb-8 px-4">
        <h2
          className={`${isMobile ? "text-md" : "text-2xl"} font-semibold mb-4`}
        >
          PinkCity{"'"}s Most Popular Mouth Fresheners
        </h2>
        <p className={`${isMobile ? "text-sm" : "text-lg"} text-gray-700`}>
          Discover our top-selling <strong>traditional mukhwas</strong>{" "}
          products. These customer favorites showcase the authentic taste of{" "}
          <strong>Jaipur mouth fresheners</strong> that have made PinkCity a
          household name since 1982.
        </p>
      </div>
      <div
        className={`w-full pb-0 flex justify-around items-center gap-6 ${
          isMobile ? "flex-col px-12" : "flex-row p-16"
        }`}
      >
        {!isMobile ? (
          topSellersData.map((item, index) => (
            <TopSellerItem
              key={index}
              text={item.text}
              imageSrc={item.imageSrc}
            />
          ))
        ) : (
          <>
            <TopSellerItem
              text={topSellersData[0].text}
              imageSrc={topSellersData[0].imageSrc}
            />
            <div className="grid grid-cols-2 gap-4 -mt-4">
              <TopSellerMobileItem
                text={topSellersData[1].text}
                imageSrc={topSellersData[1].imageSrc}
              />
              <TopSellerMobileItem
                text={topSellersData[2].text}
                imageSrc={topSellersData[2].imageSrc}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TopSellers;
