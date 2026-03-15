'use client';
import React, { useState } from "react";
import ProductModal from "@/components/ProductModal";
import TopSellerItem from "@/components/TopSellerItem";
import SectionHeading from "@/components/SectionHeading";
import { useMobile } from "@/components/MobileProvider";
import TopSellerMobileItem from "@/components/TopSellerMobileItem";
import { selectedProduct } from "@/components/ProductModal";

import PaanMukhwas from "../../public/multimedia/products/paan_mukhwas_main.png";
import CalcuttiPanGold from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Calcutti Paan Gold.png";
import BanarsiPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Banarsi Paan.png";
import DryPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Dry Paan.png";
import KPWS from "../../public/multimedia/products/Paan Mukhwas (without Supari)/KPWS.png";
import MeethaPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Meetha Paan.png";
import ChocolatePaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Chocolate Paan.png";
import NavratanPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Navratan Paan.png";
import NasikPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Nasik Paan.png";
import PinkCityPaanSpecial from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Pink City Paan Special.png";
import CalcuttiDryPaanGold from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Calcutti Dry Paan Gold.png";
import BadshahiKesarPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Badshahi Kesar Paan.png";
import KhusPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Khus Paan.png";
import GulkandPaan from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Gulkand Paan.png";
import RimjhimMix from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Rimjhim Mix.png";
import GulkandMix from "../../public/multimedia/products/Paan Mukhwas (without Supari)/Gulkand Mix.png";

import CalcuttiPaan from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Calcutti Paan.png";
import BanarsiPaanWihSupari from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Banarsi Paan.png";
import MeethaPaanWihSupari from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Meetha Paan.png";
import CalcuttiDryPaan from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Calcutti Dry Paan.png";
import BadshahiPaan from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Badshahi Paan.png";
import GulkandPaanWithSupari from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Gulkand Paan.png";
import MadhuramPaan from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Madhuram Paan.png";
import KesarPaanSpecial from "../../public/multimedia/products/Paan Mukhwas (with Supari)/Kesar Paan Special.png";
import { mediaUrl } from "@/lib/media";

const topSellersData = [
  { text: "Banarsi Paan", imageSrc: mediaUrl('/multimedia/components/banarasi_paan.png'), selectedProduct: "Banarsi  Paan" },
  { text: "Calcutti Paan Gold", imageSrc: mediaUrl('/multimedia/components/calcutti_pan_gold.png'), selectedProduct: "Calcutti  Paan Gold" },
  { text: "Dry Paan", imageSrc: mediaUrl('/multimedia/components/Dry%20Paan.png'), selectedProduct: "Dry  Paan" },
];

const product = {
  title: "Paan Mukhwas",
  image: PaanMukhwas,
  description: "A delightful paan flavored mouth freshener.",
  subcategories: ["Without Supari", "With Supari"],
  items: [
    {
      title: "Calcutti  Paan Gold",
      image: CalcuttiPanGold,
      description:
        "A rich and aromatic paan crafted to perfection, offering a royal taste with refreshing sweetness.",
      parentCategory: "Without Supari",
    },
    {
      title: "Banarsi  Paan",
      image: BanarsiPaan,
      description:
        "A traditional and flavourful paan that delivers the authentic essence of Banaras in every bite.",
      parentCategory: "Without Supari",
    },
    {
      title: "Dry  Paan",
      image: DryPaan,
      description:
        "A crisp and aromatic paan crafted to perfection, offering a refreshing crunch packed with natural sweetness. ",
      parentCategory: "Without Supari",
    },
    {
      title: "KPWS",
      image: KPWS,
      description:
        "A smooth and refreshing paan blend made without supari for a light, pure taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Meetha  Paan",
      image: MeethaPaan,
      description:
        "A sweet and aromatic paan made with premium ingredients for a delightful after-meal freshness.",
      parentCategory: "Without Supari",
    },
    {
      title: "Chocolate  Paan",
      image: ChocolatePaan,
      description:
        " A fusion of rich chocolate and classic paan flavour for a deliciously unique and refreshing taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Navratan  Paan",
      image: NavratanPaan,
      description:
        "A royal mix of nine exotic ingredients offering a luxurious burst of flavours and aroma.",
      parentCategory: "Without Supari",
    },
    {
      title: "Nasik  Paan",
      image: NasikPaan,
      description:
        "A distinctive and aromatic paan with earthy tones, offering a perfectly balanced refreshing taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Pink City  Paan Special",
      image: PinkCityPaanSpecial,
      description:
        "A vibrant and flavourful paan crafted to capture the refreshing charm of the Pink City.",
      parentCategory: "Without Supari",
    },
    {
      title: "Calcutti Dry  Paan Gold",
      image: CalcuttiDryPaanGold,
      description:
        "A premium dry paan with a golden touch, offering crisp texture and rich aroma.",
      parentCategory: "Without Supari",
    },
    {
      title: "Badshahi  Kesar Paan",
      image: BadshahiKesarPaan,
      description:
        "Infused with pure saffron for a royal aroma and luxurious, refreshing taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Khus  Paan",
      image: KhusPaan,
      description:
        "A naturally cool and fragrant paan offering a soothing, fresh, and earthy flavour.",
      parentCategory: "Without Supari",
    },

    {
      title: "Gulkand  Paan",
      image: GulkandPaan,
      description:
        "A perfect blend of paan and rose petal sweetness that refreshes and uplifts instantly.",
      parentCategory: "Without Supari",
    },

    {
      title: "Rimjhim  Mix",
      image: RimjhimMix,
      description:
        "A tangy and aromatic mix offering a lively burst of freshness with every bite.",
      parentCategory: "Without Supari",
    },

    {
      title: "Gulkand  Mix",
      image: GulkandMix,
      description:
        "A sweet and refreshing blend of premium gulkand and handpicked aromatic ingredients.",
      parentCategory: "Without Supari",
    },
    {
      title: "Calcutti  Paan",
      image: CalcuttiPaan,
      description:
        "A rich and aromatic paan blended with supari for an authentic, refreshing experience.",
      parentCategory: "With Supari",
    },

    {
      title: "Banarsi  Paan",
      image: BanarsiPaanWihSupari,
      description:
        "A traditional paan filled with supari and flavour, capturing the true essence of Banaras.",
      parentCategory: "With Supari",
    },

    {
      title: "Meetha  Paan",
      image: MeethaPaanWihSupari,
      description:
        "A sweet and flavourful paan with supari, offering a perfect balance of freshness and taste.",
      parentCategory: "With Supari",
    },

    {
      title: "Calcutti  Dry Paan",
      image: CalcuttiDryPaan,
      description:
        "A crisp and aromatic dry paan with supari, crafted for a bold and refreshing crunch.",
      parentCategory: "With Supari",
    },

    {
      title: "Badshahi  Paan",
      image: BadshahiPaan,
      description:
        "A royal paan enriched with premium supari, offering a luxurious and refreshing flavour.",
      parentCategory: "With Supari",
    },

    {
      title: "Gulkand  Paan",
      image: GulkandPaanWithSupari,
      description:
        "A delightful paan with supari and gulkand, blending floral sweetness with lasting freshness.",
      parentCategory: "With Supari",
    },

    {
      title: "Madhuram  Paan",
      image: MadhuramPaan,
      description:
        "A perfectly balanced paan with supari, known for its rich aroma and mild sweetness.",
      parentCategory: "With Supari",
    },

    {
      title: "Kesar Paan  Special",
      image: KesarPaanSpecial,
      description:
        "A premium paan infused with saffron and supari, delivering a royal, aromatic taste.",
      parentCategory: "With Supari",
    },
  ],
}
const TopSellers = () => {
  const isMobile = useMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState<selectedProduct | null>(null);

  const openModal = (productTitle: string) => {
    const foundProduct = product.items.find((item) => item.title === productTitle);
    setSelectedSample(foundProduct || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSample(null);
  };
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
        className={`w-full pb-0 flex justify-around items-center gap-6 ${isMobile ? "flex-col px-12" : "flex-row p-16"
          }`}
      >
        {!isMobile ? (
          topSellersData.map((item, index) => (
            <TopSellerItem
              key={index}
              text={item.text}
              imageSrc={item.imageSrc}
              onClick={() => openModal(item.selectedProduct)}
            />
          ))
        ) : (
          <>
            <TopSellerItem
              text={topSellersData[0].text}
              imageSrc={topSellersData[0].imageSrc}
              onClick={() => openModal(topSellersData[0].selectedProduct)}
            />
            <div className="grid grid-cols-2 gap-4 -mt-4">
              <TopSellerMobileItem
                text={topSellersData[1].text}
                imageSrc={topSellersData[1].imageSrc}
                onClick={() => openModal(topSellersData[1].selectedProduct)}
              />
              <TopSellerMobileItem
                text={topSellersData[2].text}
                imageSrc={topSellersData[2].imageSrc}
                onClick={() => openModal(topSellersData[2].selectedProduct)}
              />
            </div>
          </>
        )}
      </div>
      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={closeModal}
          selectedProductSample={selectedSample || undefined}
        />
      )}
    </section>
  );
};

export default TopSellers;
