"use client";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import React, { useState } from "react";
// Paan Mukhwas
// Image imports removed and replaced with mediaUrl calls below

import ProductModal from "@/components/ProductModal";
import { mediaUrl } from "@/lib/media";


interface Product {
  title: string;
  image: string;
  description: string;
  subcategories?: string[];
  items: {
    title: string;
    image: string;
    description: string;
    parentCategory?: string;
  }[];
}

const products: Product[] = [
  {
    title: "Paan Mukhwas",
    image: mediaUrl("multimedia/products/paan_mukhwas_main.png"),
    description: "A delightful paan flavored mouth freshener.",
    subcategories: ["Without Supari", "With Supari"],
    items: [
      {
        title: "Calcutti  Paan Gold",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Calcutti Paan Gold.png"),
        description:
          "A rich and aromatic paan crafted to perfection, offering a royal taste with refreshing sweetness.",
        parentCategory: "Without Supari",
      },
      {
        title: "Banarsi  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Banarsi Paan.png"),
        description:
          "A traditional and flavourful paan that delivers the authentic essence of Banaras in every bite.",
        parentCategory: "Without Supari",
      },
      {
        title: "Dry  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Dry Paan.png"),
        description:
          "A crisp and aromatic paan crafted to perfection, offering a refreshing crunch packed with natural sweetness. ",
        parentCategory: "Without Supari",
      },
      {
        title: "KPWS",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/KPWS.png"),
        description:
          "A smooth and refreshing paan blend made without supari for a light, pure taste.",
        parentCategory: "Without Supari",
      },
      {
        title: "Meetha  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Meetha Paan.png"),
        description:
          "A sweet and aromatic paan made with premium ingredients for a delightful after-meal freshness.",
        parentCategory: "Without Supari",
      },
      {
        title: "Chocolate  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Chocolate Paan.png"),
        description:
          " A fusion of rich chocolate and classic paan flavour for a deliciously unique and refreshing taste.",
        parentCategory: "Without Supari",
      },
      {
        title: "Navratan  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Navratan Paan.png"),
        description:
          "A royal mix of nine exotic ingredients offering a luxurious burst of flavours and aroma.",
        parentCategory: "Without Supari",
      },
      {
        title: "Nasik  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Nasik Paan.png"),
        description:
          "A distinctive and aromatic paan with earthy tones, offering a perfectly balanced refreshing taste.",
        parentCategory: "Without Supari",
      },
      {
        title: "Pink City  Paan Special",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Pink City Paan Special.png"),
        description:
          "A vibrant and flavourful paan crafted to capture the refreshing charm of the Pink City.",
        parentCategory: "Without Supari",
      },
      {
        title: "Calcutti Dry  Paan Gold",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Calcutti Dry Paan Gold.png"),
        description:
          "A premium dry paan with a golden touch, offering crisp texture and rich aroma.",
        parentCategory: "Without Supari",
      },
      {
        title: "Badshahi  Kesar Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Badshahi Kesar Paan.png"),
        description:
          "Infused with pure saffron for a royal aroma and luxurious, refreshing taste.",
        parentCategory: "Without Supari",
      },
      {
        title: "Khus  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Khus Paan.png"),
        description:
          "A naturally cool and fragrant paan offering a soothing, fresh, and earthy flavour.",
        parentCategory: "Without Supari",
      },

      {
        title: "Gulkand  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Gulkand Paan.png"),
        description:
          "A perfect blend of paan and rose petal sweetness that refreshes and uplifts instantly.",
        parentCategory: "Without Supari",
      },

      {
        title: "Rimjhim  Mix",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Rimjhim Mix.png"),
        description:
          "A tangy and aromatic mix offering a lively burst of freshness with every bite.",
        parentCategory: "Without Supari",
      },

      {
        title: "Gulkand  Mix",
        image: mediaUrl("multimedia/products/Paan Mukhwas (without Supari)/Gulkand Mix.png"),
        description:
          "A sweet and refreshing blend of premium gulkand and handpicked aromatic ingredients.",
        parentCategory: "Without Supari",
      },
      {
        title: "Calcutti  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Calcutti Paan.png"),
        description:
          "A rich and aromatic paan blended with supari for an authentic, refreshing experience.",
        parentCategory: "With Supari",
      },

      {
        title: "Banarsi  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Banarsi Paan.png"),
        description:
          "A traditional paan filled with supari and flavour, capturing the true essence of Banaras.",
        parentCategory: "With Supari",
      },

      {
        title: "Meetha  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Meetha Paan.png"),
        description:
          "A sweet and flavourful paan with supari, offering a perfect balance of freshness and taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Calcutti  Dry Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Calcutti Dry Paan.png"),
        description:
          "A crisp and aromatic dry paan with supari, crafted for a bold and refreshing crunch.",
        parentCategory: "With Supari",
      },

      {
        title: "Badshahi  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Badshahi Paan.png"),
        description:
          "A royal paan enriched with premium supari, offering a luxurious and refreshing flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Gulkand  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Gulkand Paan.png"),
        description:
          "A delightful paan with supari and gulkand, blending floral sweetness with lasting freshness.",
        parentCategory: "With Supari",
      },

      {
        title: "Madhuram  Paan",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Madhuram Paan.png"),
        description:
          "A perfectly balanced paan with supari, known for its rich aroma and mild sweetness.",
        parentCategory: "With Supari",
      },

      {
        title: "Kesar Paan  Special",
        image: mediaUrl("multimedia/products/Paan Mukhwas (with Supari)/Kesar Paan Special.png"),
        description:
          "A premium paan infused with saffron and supari, delivering a royal, aromatic taste.",
        parentCategory: "With Supari",
      },
    ],
  },
  {
    title: "Mukhwas",
    image: mediaUrl("multimedia/products/mukhwas_main.png"),
    description: "A refreshing mouth freshener.",
    subcategories: ["Without Supari", "Premium Segment", "With Supari"],
    items: [
      {
        title: "Chocolate  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Chocolate Mix.png"),
        description:
          "A delightful fusion of chocolate and traditional flavours, offering a rich and refreshing taste.",
        parentCategory: "Without Supari",
      },

      {
        title: "Chandan  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Chandan Mix.png"),
        description:
          "A soothing blend with the gentle aroma of sandalwood for a calm, refreshing experience.",
        parentCategory: "Without Supari",
      },

      {
        title: "Satrangi  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Satrangi Mix.png"),
        description:
          "A colourful mix bursting with vibrant flavours that bring a refreshing twist to every bite.",
        parentCategory: "Without Supari",
      },

      {
        title: "Shahi  Gulab Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Shahi Gulab Mix.png"),
        description:
          "A royal mix infused with the fragrance of roses, delivering a sweet and aromatic freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Bambaiya  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Bambaiya Mix.png"),
        description:
          "A bold and tangy mix inspired by Mumbai’s street flavours, full of zest and freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Jhilmil  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Jhilmil Mix.png"),
        description:
          "A sparkling mix of sweet and aromatic ingredients that light up your mood with every taste.",
        parentCategory: "Without Supari",
      },

      {
        title: "Mewa  Mix 2nd",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Mewa Mix 2nd.png"),
        description:
          "A rich blend of roasted and aromatic ingredients offering a sweet, crunchy freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Kashmiri  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Kashmiri Mix.png"),
        description:
          "A fragrant and exotic mix offering a royal, refreshing touch.",
        parentCategory: "Without Supari",
      },

      {
        title: "Punjabi  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Punjabi Mix.png"),
        description:
          "A strong and flavour-packed mix known for its bold aroma and lasting freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Marwari  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Marwari Mix.png"),
        description:
          "A traditional Rajasthani style mix combining sweet and aromatic flavours perfectly.",
        parentCategory: "Without Supari",
      },

      {
        title: "Khus  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Khus Mix.png"),
        description:
          "A naturally cool and fragrant mix with the refreshing essence of vetiver for instant freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Garden  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Garden Mix.png"),
        description:
          "A vibrant and aromatic mix inspired by nature’s freshness, offering a light, floral taste.",
        parentCategory: "Without Supari",
      },

      {
        title: "Rajwadi  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Rajwadi Mix.png"),
        description:
          "A royal and aromatic mix crafted with premium ingredients for a luxurious, fresh finish.",
        parentCategory: "Without Supari",
      },

      {
        title: "Mewa Mix  Special",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Mewa Mix Special.png"),
        description:
          "An exquisite blend of roasted and aromatic ingredients offering a rich, sweet freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Dil Khush  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (without supari)/Dil Khush Mix.png"),
        description:
          "A delightful sweet mix that refreshes instantly and leaves you feeling truly dil khush.",
        parentCategory: "Without Supari",
      },
      {
        title: "Khus Mix  Gold",
        image: mediaUrl("multimedia/products/Premium Segment/Khus Mix Gold.png"),
        description:
          "An exquisite blend with a soothing essence, crafted for a luxurious and indulgent taste.",
        parentCategory: "Premium Segment",
      },
      {
        title: "Royal  Bambaiya",
        image: mediaUrl("multimedia/products/Premium Segment/Royal Bambaiya.png"),
        description:
          "A bold and refined mix inspired by Mumbai’s streets, offering a vibrant and refreshing crunch.",
        parentCategory: "Premium Segment",
      },

      // {
      // title: "Cocktail Mix",
      // image: mediaUrl("multimedia/products/Premium Segment/Cocktail Mix.jpg"),
      // description: "A sophisticated fusion of flavours delivering a lively and delightfully refreshing experience.",
      // parentCategory: "Premium Segment",
      // },

      {
        title: "Shimla   Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Shimla Mix.png"),
        description:
          "An aromatic and crisp mix inspired by the hills, offering a revitalising flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Royal Zaiqa  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Royal Zaiqa Mix.png"),
        description:
          "An elegant blend of select ingredients, crafted for a rich and flavourful experience.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Kesariya  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Kesariya Mix.png"),
        description:
          "A fragrant golden mix that offers a royal and indulgent taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Milky  Shahi Mewa",
        image: mediaUrl("multimedia/products/Premium Segment/Milky Shahi Mewa.png"),
        description:
          "A creamy and indulgent mix of rich ingredients offering a royal and satisfying taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "5 Star  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/5 Star Mix.png"),
        description:
          "A vibrant blend of select flavours crafted to deliver an exceptional and delightful experience.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Pineapple   Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Pineapple Mix.png"),
        description:
          "A fruity and aromatic mix bursting with refreshing pineapple essence for a lively taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Rainbow  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Rainbow Mix.png"),
        description:
          "A colourful assortment of flavours that delights the senses with every bite.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Mansoori  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Mansoori Mix.png"),
        description:
          "A refined blend of aromatic ingredients delivering a sophisticated and indulgent flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Pinkcity  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Pink City Mix.png"),
        description:
          "A vibrant and fragrant mix inspired by Jaipur, offering a lively and delightful taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Shahi  Khus Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Shahi Khus Mix.png"),
        description:
          "A royal blend with the soothing essence of khus, crafted for a refreshing indulgence.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Kashmiri  Gold",
        image: mediaUrl("multimedia/products/Premium Segment/Kashmiri Gold.png"),
        description:
          "An aromatic and golden-hued mix delivering a rich and regal taste experience.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Gulbahar  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Gulbahar Mix.png"),
        description:
          "A fragrant and floral mix with subtly sweet notes, offering a truly delightful flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Shahi Chandan  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Shahi Chandan Mix.png"),
        description:
          "A soothing and aromatic blend with the essence of chandan, crafted for a premium taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Red Shahi  Mewa",
        image: mediaUrl("multimedia/products/Premium Segment/Red Shahi Mewa.png"),
        description:
          "A rich and colourful mix of select ingredients delivering a royal and indulgent flavour.",
        parentCategory: "Premium Segment",
      },

      // {
      //   title: "Chocolate Nawab Mix",
      //   image: mediaUrl("multimedia/products/Premium Segment/Chocolate Nawab Mix.png"),
      //   description:
      //     "A decadent fusion of chocolate and classic ingredients for a delightful, rich taste.",
      //   parentCategory: "Premium Segment",
      // },

      {
        title: "Shahi Mewa  Delight",
        image: mediaUrl("multimedia/products/Premium Segment/Shahi Mewa Delight.png"),
        description:
          "A luscious mix of aromatic ingredients offering a royal and satisfying indulgence.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Gulab Gold  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Gulab Gold Mix.png"),
        description:
          "A fragrant rose-infused blend with golden richness for a truly indulgent flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Royal  Dilkhush",
        image: mediaUrl("multimedia/products/Premium Segment/Royal Dilkhush.png"),
        description:
          "A vibrant and aromatic mix designed to refresh and delight the senses instantly.",
        parentCategory: "Premium Segment",
      },

      // {
      // title: "Roasted Namkeen Mix",
      // image: mediaUrl("multimedia/products/Premium Segment/Roasted Namkeen Mix.jpg"),
      // description: "A crisp and savoury mix with perfectly roasted ingredients for a delightful crunch.",
      // parentCategory: "Premium Segment",
      // },

      {
        title: "Zaika Punjabi  Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Zaiqa Punjabi Mix.png"),
        description:
          "A flavour-packed blend with bold and aromatic notes, delivering a truly satisfying taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Rajwada  Special",
        image: mediaUrl("multimedia/products/Premium Segment/Rajwada Special.png"),
        description:
          "A royal blend of select ingredients offering an indulgent and sophisticated flavour.",
        parentCategory: "Premium Segment",
      },
      {
        title: "Noorani  Jhilmil Mix",
        image: mediaUrl("multimedia/products/Premium Segment/Noorani Jhilmil Mix.png"),
        description:
          "A sparkling and aromatic mix crafted for a lively and delightful taste experience.",
        parentCategory: "Premium Segment",
      },
      {
        title: "Jhilmil 24  Carat Special",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Jhilmil 24 Carat Special.png"),
        description:
          "A sparkling and indulgent supari mix crafted for a truly luxurious taste experience.",
        parentCategory: "With Supari",
      },

      {
        title: "Shahi Mukhwas  22 Carat",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Shahi Mukhwas 22 Carat.png"),
        description:
          "A royal blend of aromatic ingredients with supari, delivering a rich and premium flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Titanic  Gold",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Titanic Gold.png"),
        description:
          "A bold supari mix with golden richness, offering a delightful and indulgent taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Shahi  Khus Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Shahi Khush Mix With Supari.png"),
        description:
          "A fragrant blend with supari and soothing khus essence, offering a refreshing royal taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Pink City  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Pink City Mix.png"),
        description:
          "A vibrant and aromatic supari mix that delights the senses in every bite.",
        parentCategory: "With Supari",
      },

      {
        title: "Tarang  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Tarang Mix.png"),
        description:
          "A zesty and aromatic supari mix with a lively burst of flavours in every bite.",
        parentCategory: "With Supari",
      },

      {
        title: "Mewa Kesar  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Mewa Kesar Mix.png"),
        description:
          "A rich supari blend with mewa and saffron notes, offering a subtly indulgent flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Mewa Lemon  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Mewa Lemon Mix.png"),
        description:
          "A refreshing supari mix with mewa and citrusy lemon, delivering a tangy and satisfying taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Tiranga  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Tiranga Mix.png"),
        description:
          "A colourful supari mix with a balanced blend of flavours, offering a festive and delightful experience.",
        parentCategory: "With Supari",
      },

      {
        title: "Rangeela  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Rangeela Mix.png"),
        description:
          "A vibrant supari mix combining aromatic ingredients for a fun and refreshing flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Mewa Milk  Supari",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Mewa Milk Supari.png"),
        description:
          "A creamy supari mix with mewa, crafted for a smooth and indulgent taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Laung  Mix",
        image: mediaUrl("multimedia/products/Mukhwas (with supari)/Laung Mix.png"),
        description:
          "A classic supari mix infused with aromatic laung, delivering a traditional and refreshing flavour.",
        parentCategory: "With Supari",
      },
    ],
  },
  {
    title: "Saunf Products",
    image: mediaUrl("multimedia/products/sauf_product_main.png"),
    description: "Aromatic and flavorful saunf products.",
    items: [
      {
        title: "Rajasthani  Roasted Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Rajasthani Roasted Saunf.png"),
        description:
          "A perfectly roasted saunf offering a rich aroma and satisfying aftertaste.",
      },

      {
        title: "Churi  Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Churi Saunf.png"),
        description:
          "Finely chopped saunf with a delicate flavour that refreshes and delights.",
      },

      {
        title: "Green Saunf  Special",
        image: mediaUrl("multimedia/products/Saunf Products/Green Saunf Special.png"),
        description:
          "A vibrant green saunf blend with natural freshness and aromatic taste.",
      },

      {
        title: "Dhaniya  Dal",
        image: mediaUrl("multimedia/products/Saunf Products/Dhaniya Dal.png"),
        description:
          "Premium dhaniya seeds with a subtle, fragrant flavour for a refreshing finish.",
      },

      {
        title: "White Madrasi Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/White Madrasi Saunf.png"),
        description:
          "Smooth and aromatic white saunf crafted for a clean and delightful taste.",
      },

      {
        title: "Green Madrasi Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Green Madrasi Saunf.png"),
        description:
          "Fresh and aromatic green saunf offering a crisp and refreshing flavour.",
      },

      {
        title: "Rasbhari Saunf Special",
        image: mediaUrl("multimedia/products/Saunf Products/Rasbhari Saunf Special.png"),
        description:
          "A unique blend of saunf with a fruity twist, delivering a vibrant and satisfying taste.",
      },

      {
        title: "Jet  Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Jet Saunf.png"),
        description:
          "A finely crafted saunf mix with a rich aroma and lasting freshness.",
      },

      {
        title: "Hotel  Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Hotel Saunf.png"),
        description:
          "A premium-quality saunf with balanced flavour, perfect for after-meal freshness.",
      },

      {
        title: "Marwari  Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Marwari Saunf.png"),
        description:
          "A traditional saunf mix with aromatic and naturally refreshing taste.",
      },

      {
        title: "Rasbhari  Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Rasbhari Saunf.png"),
        description:
          "A fruity-flavoured saunf offering a sweet and aromatic aftertaste.",
      },

      {
        title: "Roasted  Fiki Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Roasted Fiki Saunf.png"),
        description:
          "Lightly roasted saunf with a mild aroma for a subtle and soothing flavour.",
      },

      {
        title: "Plane Fiki  Saunf",
        image: mediaUrl("multimedia/products/Saunf Products/Plain Fiki Saunf.png"),
        description:
          "Simple and aromatic plain saunf crafted for a gentle, refreshing taste.",
      },
    ],
  },
  {
    title: "Dry Date Products",
    image: mediaUrl("multimedia/products/dry_date_main.png"),
    description: "Delicious dry date products.",
    items: [
      {
        title: "Gulab  Khajur",
        image: mediaUrl("multimedia/products/Dry Dates Products/Gulab Khajur.png"),
        description:
          "Soft and succulent dates infused with aromatic rose for a sweet and indulgent taste.",
      },

      {
        title: "Chocolate Khajur",
        image: mediaUrl("multimedia/products/Dry Dates Products/Chocolate Khajur.png"),
        description:
          "Rich chocolate-coated dates offering a luxurious and delightful flavour.",
      },

      {
        title: "Herbal Khajur Chura",
        image: mediaUrl("multimedia/products/Dry Dates Products/Herbal Khajur Chura.png"),
        description:
          "A wholesome blend of chopped dates with herbal goodness for a refreshing and healthy taste.",
      },

      {
        title: "Dry Date Cutting",
        image: mediaUrl("multimedia/products/Dry Dates Products/Dry Date Cutting.png"),
        description:
          "Premium sliced dates with natural sweetness, perfect for a rich and satisfying treat.",
      },
    ],
  },
  {
    title: "Sweet Supari",
    image: mediaUrl("multimedia/products/sweet_supari_main.png"),
    description: "A sweet and savory supari.",
    items: [
      {
        title: "Seki Thandi  Supari",
        image: mediaUrl("multimedia/products/Sweet Supari/Seki Thandi Supari.png"),
        description:
          "A cool and refreshing sweet supari with a smooth and delightful flavour.",
      },

      {
        title: "Chikni Assam  Supari",
        image: mediaUrl("multimedia/products/Sweet Supari/Chikni Assam Supari.png"),
        description:
          "Glossy and chewy sweet supari offering a smooth and aromatic taste.",
      },

      {
        title: "Milky  Supari",
        image: mediaUrl("multimedia/products/Sweet Supari/Milky Supari.png"),
        description:
          "Creamy and indulgent sweet supari with a rich and satisfying flavour.",
      },

      // {
      // title: "Elaichi Supari",
      // image: ElaichiSupari,
      // description: "Fragrant supari infused with cardamom, delivering a refreshing and aromatic taste.",
      // },

      {
        title: "Gulab  Supari",
        image: mediaUrl("multimedia/products/Sweet Supari/Gulab Supari.png"),
        description:
          "Sweet supari with delicate rose essence for a fragrant and delightful flavour.",
      },

      {
        title: "Pineapple  Supari",
        image: mediaUrl("multimedia/products/Sweet Supari/Pineapple Supari.png"),
        description:
          "A fruity and aromatic supari blend with refreshing pineapple notes.",
      },

      {
        title: "Yellow Kesar Laccha",
        image: mediaUrl("multimedia/products/Sweet Supari/Yellow Kesar Laccha.png"),
        description:
          "Golden-hued supari layered with saffron, offering a rich and indulgent taste.",
      },

      {
        title: "Kesar  Laccha",
        image: mediaUrl("multimedia/products/Sweet Supari/Kesar Laccha.png"),
        description:
          "Aromatic saffron-infused supari with a luxurious and flavourful experience.",
      },

      {
        title: "Wafer  Supari",
        image: mediaUrl("multimedia/products/Sweet Supari/Wafer Supari.png"),
        description:
          "Crisp and delicate wafer-style supari delivering a light and satisfying taste.",
      },

      {
        title: "Peeli Kesar Supari",
        image: mediaUrl("multimedia/products/Sweet Supari/Peeli Kesar Supari.png"),
        description:
          "Bright saffron-infused sweet supari with a rich and aromatic flavour.",
      },

      {
        title: "Banarsi Katran",
        image: mediaUrl("multimedia/products/Sweet Supari/Banarsi Katran.png"),
        description:
          "Finely cut Banarsi-style supari with a fragrant and sweet taste.",
      },
    ],
  },

  {
    title: "Plain Supari",
    image: mediaUrl("multimedia/products/plain_supari_main.png"),
    description: "A simple and classic supari.",
    items: [
      {
        title: "Sakela Tukda  Feeka",
        image: mediaUrl("multimedia/products/Plain Supari/Sakela Tukda Feeka.png"),
        description:
          "Simple and aromatic plain supari delivering a natural and subtle flavour.",
      },

      {
        title: "Kacchi  Supari Dana",
        image: mediaUrl("multimedia/products/Plain Supari/Kacchi Supari Dana.png"),
        description:
          "Raw supari seeds with a mild and authentic taste, perfect for traditional enjoyment.",
      },

      {
        title: "Chikni Assam  Supari",
        image: mediaUrl("multimedia/products/Plain Supari/Chikni Assam Supari.png"),
        description:
          "Glossy and chewy plain supari offering a smooth and natural flavour.",
      },

      {
        title: "Salli  Supari",
        image: mediaUrl("multimedia/products/Plain Supari/Salli Supari.png"),
        description:
          "Thinly sliced plain supari with a light and aromatic taste.",
      },

      {
        title: "Chips  Supari",
        image: mediaUrl("multimedia/products/Plain Supari/Chips Supari.png"),
        description:
          "Crisp and delicately cut plain supari providing a satisfying traditional flavour.",
      },

      {
        title: "Banarsi  Katran",
        image: mediaUrl("multimedia/products/Plain Supari/Banarsi Katran.png"),
        description:
          "Finely cut Banarsi-style plain supari with a naturally fragrant and subtle taste.",
      },
    ],
  },
  {
    title: "Silver Coated Products",
    image: mediaUrl("multimedia/products/silver_product_main.png"),
    description: "Exquisite silver coated products.",
    items: [
      {
        title: "Khus  Supari",
        image: mediaUrl("multimedia/products/Silver Coated Products/Khus Supari.png"),
        description:
          "Sweet supari coated with silver, offering a fragrant and indulgent taste.",
      },

      {
        title: "Gulab  Supari",
        image: mediaUrl("multimedia/products/Silver Coated Products/Gulab Supari.png"),
        description:
          "Rose-flavoured supari adorned with silver for a luxurious and delightful flavour.",
      },

      {
        title: "Mast Mast  Cherry",
        image: mediaUrl("multimedia/products/Silver Coated Products/Mast Mast Cherry.png"),
        description:
          "Sweet cherry-flavoured supari with a sparkling silver coating for a rich and festive taste.",
      },

      {
        title: "Silver  Saunf",
        image: mediaUrl("multimedia/products/Silver Coated Products/Silver Saunf.png"),
        description:
          "Aromatic saunf delicately coated with silver, delivering a premium and refreshing flavour.",
      },
    ],
  },
  {
    title: "Confectionery & Others",
    image: mediaUrl("multimedia/products/confectionery_product_main.png"),
    description: "A variety of confectionery products.",
    items: [
      {
        title: "Flax  Seeds",
        image: mediaUrl("multimedia/products/Confectionery & Others/Flax Seeds.png"),
        description:
          "Nutritious flax seeds with a natural, wholesome flavour perfect for daily refreshment.",
      },

      {
        title: "Coconut Flakes",
        image: mediaUrl("multimedia/products/Confectionery & Others/Coconut Flakes.png"),
        description:
          "Light and aromatic coconut flakes offering a subtly sweet and delightful taste.",
      },

      {
        title: "Tini Mini Special",
        image: mediaUrl("multimedia/products/Confectionery & Others/Tini Mini Special.png"),
        description:
          "A premium miniature blend crafted for a flavorful and refreshing experience.",
      },

      {
        title: "Tini Mini Medium",
        image: mediaUrl("multimedia/products/Confectionery & Others/Tini Mini Medium.png"),
        description:
          "A balanced miniature mix delivering a delightful and aromatic flavour.",
      },

      {
        title: "Tini  Mini",
        image: mediaUrl("multimedia/products/Confectionery & Others/Tini Mini.png"),
        description:
          "A compact and flavourful mix offering a refreshing taste in every bite.",
      },

      {
        title: "Mix  Jintan",
        image: mediaUrl("multimedia/products/Confectionery & Others/Mix Jintan.png"),
        description:
          "A classic blend of jintan seeds providing a natural and aromatic after-meal freshness.",
      },

      {
        title: "White  Mishri",
        image: mediaUrl("multimedia/products/Confectionery & Others/White Mishri.png"),
        description:
          "Pure white sugar crystals with a naturally sweet and satisfying taste.",
      },

      {
        title: "Gulab  Mishri",
        image: mediaUrl("multimedia/products/Confectionery & Others/Gulab Mishri.png"),
        description:
          "Rose-infused sugar crystals offering a fragrant and indulgent flavour.",
      },

      {
        title: "Khus  Mishri",
        image: mediaUrl("multimedia/products/Confectionery & Others/Khus Mishri.png"),
        description:
          "Aromatic khus-flavoured sugar crystals crafted for a refreshing and delightful taste.",
      },

      {
        title: "Kesar  Mishri",
        image: mediaUrl("multimedia/products/Confectionery & Others/Kesar Mishri.png"),
        description:
          "Golden saffron-infused sugar crystals delivering a rich and aromatic flavour.",
      },
    ],
  },
];

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // 2026-06-07 (SEO): category-level Product structured data — one entry per top-level category
  // (8 total), derived from the existing `products` array so there is no duplicated product data.
  // offers/price are intentionally omitted (the site has no public pricing) to avoid incomplete-Offer
  // warnings in Search Console; brand/manufacturer reference the Organization @id defined in the
  // root layout's JSON-LD @graph. Emitted as a separate <script> like FAQ.tsx — Google merges blocks.
  const productsSchema = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "Product",
      name: product.title,
      image: product.image,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: "PinkCity Mouth Freshener",
      },
      manufacturer: {
        "@id": "https://www.pinkcitymouthfresheners.com/#organization",
      },
    })),
  };

  return (
    <div
      id="products"
      className="w-full p-10 flex flex-col justify-center items-center"
    >
      {/* 2026-06-07 (SEO): category-level Product JSON-LD, built from productsSchema above. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <SectionHeading title="Our Products" />
      <div className="text-center max-w-4xl my-8">
        <h2 className="text-2xl font-semibold mb-4">
          Explore PinkCity Mouth Freshener Product Range
        </h2>
        <p className="text-lg text-gray-700">
          Discover our extensive collection of{" "}
          <strong>premium mouth fresheners</strong> and{" "}
          <strong>traditional mukhwas</strong> products. From classic{" "}
          <strong>paan mukhwas</strong> to exotic saunf blends, each product is
          crafted with authentic ingredients and hygienically packed to ensure
          the finest quality. As Jaipur{'"'}s leading{" "}
          <strong>mouth freshener manufacturer</strong>, we offer wholesale and
          retail options for all our products.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {products.map((product, index) => (
          <div key={index} onClick={() => openModal(product)}>
            <ProductCard title={product.title} image={product.image} />
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default OurProducts;
