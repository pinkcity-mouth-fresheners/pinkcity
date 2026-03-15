'use client';
import React, { useState } from "react";
import ProductModal from "@/components/ProductModal";
import TopSellerItem from "@/components/TopSellerItem";
import SectionHeading from "@/components/SectionHeading";
import { useMobile } from "@/components/MobileProvider";
import TopSellerMobileItem from "@/components/TopSellerMobileItem";
import { selectedProduct } from "@/components/ProductModal";
import { mediaUrl } from "@/lib/media";

const topSellersData = [
  { text: "Banarsi Paan", imageSrc: mediaUrl('multimedia/components/banarasi_paan.png'), selectedProduct: "Banarsi  Paan" },
  { text: "Calcutti Paan Gold", imageSrc: mediaUrl('multimedia/components/calcutti_pan_gold.png'), selectedProduct: "Calcutti  Paan Gold" },
  { text: "Dry Paan", imageSrc: mediaUrl('multimedia/components/Dry%20Paan.png'), selectedProduct: "Dry  Paan" },
];

const product = {
  title: "Paan Mukhwas",
  image: mediaUrl('multimedia/products/paan_mukhwas_main.png'),
  description: "A delightful paan flavored mouth freshener.",
  subcategories: ["Without Supari", "With Supari"],
  items: [
    {
      title: "Calcutti  Paan Gold",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Calcutti%20Paan%20Gold.png'),
      description:
        "A rich and aromatic paan crafted to perfection, offering a royal taste with refreshing sweetness.",
      parentCategory: "Without Supari",
    },
    {
      title: "Banarsi  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Banarsi%20Paan.png'),
      description:
        "A traditional and flavourful paan that delivers the authentic essence of Banaras in every bite.",
      parentCategory: "Without Supari",
    },
    {
      title: "Dry  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Dry%20Paan.png'),
      description:
        "A crisp and aromatic paan crafted to perfection, offering a refreshing crunch packed with natural sweetness. ",
      parentCategory: "Without Supari",
    },
    {
      title: "KPWS",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/KPWS.png'),
      description:
        "A smooth and refreshing paan blend made without supari for a light, pure taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Meetha  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Meetha%20Paan.png'),
      description:
        "A sweet and aromatic paan made with premium ingredients for a delightful after-meal freshness.",
      parentCategory: "Without Supari",
    },
    {
      title: "Chocolate  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Chocolate%20Paan.png'),
      description:
        " A fusion of rich chocolate and classic paan flavour for a deliciously unique and refreshing taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Navratan  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Navratan%20Paan.png'),
      description:
        "A royal mix of nine exotic ingredients offering a luxurious burst of flavours and aroma.",
      parentCategory: "Without Supari",
    },
    {
      title: "Nasik  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Nasik%20Paan.png'),
      description:
        "A distinctive and aromatic paan with earthy tones, offering a perfectly balanced refreshing taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Pink City  Paan Special",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Pink%20City%20Paan%20Special.png'),
      description:
        "A vibrant and flavourful paan crafted to capture the refreshing charm of the Pink City.",
      parentCategory: "Without Supari",
    },
    {
      title: "Calcutti Dry  Paan Gold",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Calcutti%20Dry%20Paan%20Gold.png'),
      description:
        "A premium dry paan with a golden touch, offering crisp texture and rich aroma.",
      parentCategory: "Without Supari",
    },
    {
      title: "Badshahi  Kesar Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Badshahi%20Kesar%20Paan.png'),
      description:
        "Infused with pure saffron for a royal aroma and luxurious, refreshing taste.",
      parentCategory: "Without Supari",
    },
    {
      title: "Khus  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Khus%20Paan.png'),
      description:
        "A naturally cool and fragrant paan offering a soothing, fresh, and earthy flavour.",
      parentCategory: "Without Supari",
    },

    {
      title: "Gulkand  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Gulkand%20Paan.png'),
      description:
        "A perfect blend of paan and rose petal sweetness that refreshes and uplifts instantly.",
      parentCategory: "Without Supari",
    },

    {
      title: "Rimjhim  Mix",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Rimjhim%20Mix.png'),
      description:
        "A tangy and aromatic mix offering a lively burst of freshness with every bite.",
      parentCategory: "Without Supari",
    },

    {
      title: "Gulkand  Mix",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(without%20Supari)/Gulkand%20Mix.png'),
      description:
        "A sweet and refreshing blend of premium gulkand and handpicked aromatic ingredients.",
      parentCategory: "Without Supari",
    },
    {
      title: "Calcutti  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Calcutti%20Paan.png'),
      description:
        "A rich and aromatic paan blended with supari for an authentic, refreshing experience.",
      parentCategory: "With Supari",
    },

    {
      title: "Banarsi  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Banarsi%20Paan.png'),
      description:
        "A traditional paan filled with supari and flavour, capturing the true essence of Banaras.",
      parentCategory: "With Supari",
    },

    {
      title: "Meetha  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Meetha%20Paan.png'),
      description:
        "A sweet and flavourful paan with supari, offering a perfect balance of freshness and taste.",
      parentCategory: "With Supari",
    },

    {
      title: "Calcutti  Dry Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Calcutti%20Dry%20Paan.png'),
      description:
        "A crisp and aromatic dry paan with supari, crafted for a bold and refreshing crunch.",
      parentCategory: "With Supari",
    },

    {
      title: "Badshahi  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Badshahi%20Paan.png'),
      description:
        "A royal paan enriched with premium supari, offering a luxurious and refreshing flavour.",
      parentCategory: "With Supari",
    },

    {
      title: "Gulkand  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Gulkand%20Paan.png'),
      description:
        "A delightful paan with supari and gulkand, blending floral sweetness with lasting freshness.",
      parentCategory: "With Supari",
    },

    {
      title: "Madhuram  Paan",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Madhuram%20Paan.png'),
      description:
        "A perfectly balanced paan with supari, known for its rich aroma and mild sweetness.",
      parentCategory: "With Supari",
    },

    {
      title: "Kesar Paan  Special",
      image: mediaUrl('multimedia/products/Paan%20Mukhwas%20(with%20Supari)/Kesar%20Paan%20Special.png'),
      description:
        "A premium paan infused with saffron and supari, delivering a royal, aromatic taste.",
      parentCategory: "With Supari",
    },
  ],
};
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
