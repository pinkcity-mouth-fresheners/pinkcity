"use client";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import React, { useState } from "react";
// Paan Mukhwas
import PaanMukhwas from "../../public/multimedia/products/paan_mukhwas_main.png";
import CalcuttiPanGold from "../../public/multimedia/products/calcutti_pan_gold.jpg";
import BanarsiPaan from "../../public/multimedia/products/banarsi_paan.jpg";
import DryPaan from "../../public/multimedia/products/dry_paan.jpg";
import KPWS from "../../public/multimedia/products/kpws.jpg";
import MeethaPaan from "../../public/multimedia/products/meetha_paan.jpg";
import ChocolatePaan from "../../public/multimedia/products/chocolate_paan.jpg";
import NavratanPaan from "../../public/multimedia/products/navratan_paan.jpg";
import NasikPaan from "../../public/multimedia/products/nasik_paan.jpg";
import PinkCityPaanSpecial from "../../public/multimedia/products/pink_city_paan_special.jpg";
import CalcuttiDryPaanGold from "../../public/multimedia/products/calcutti_dry_paan_gold.jpg";
import BadshahiKesarPaan from "../../public/multimedia/products/badshahi_kesar_paan.jpg";
import KhusPaan from "../../public/multimedia/products/khus_paan.jpg";
import GulkandPaan from "../../public/multimedia/products/gulkand_paan.jpg";
import RimjhimMix from "../../public/multimedia/products/rimjhim_mix.jpg";
import GulkandMix from "../../public/multimedia/products/gulkand_mix.jpg";
// With Supari
import CalcuttiPaan from "../../public/multimedia/products/calcutti_paan.jpg";
import BanarsiPaanWihSupari from "../../public/multimedia/products/banarsi_paan_with_supari.jpg";
import MeethaPaanWihSupari from "../../public/multimedia/products/meetha_paan_with_supari.jpg";
import CalcuttiDryPaan from "../../public/multimedia/products/calcutti_dry_paan.jpg";
import BadshahiPaan from "../../public/multimedia/products/badshahi_paan.jpg";
import GulkandPaanWithSupari from "../../public/multimedia/products/gulkand_paan_with_supari.jpg";
import MadhuramPaan from "../../public/multimedia/products/madhuram_paan.jpg";
import KesarPaanSpecial from "../../public/multimedia/products/kesar_paan_special.jpg";

// Mukhwas
import Mukhwas from "../../public/multimedia/products/mukhwas_main.png";
// Without Supari
import ChocolateMix from "../../public/multimedia/products/Mukhwas (without supari)/Chocolate Mix.jpg";
import ChandanMix from "../../public/multimedia/products/Mukhwas (without supari)/Chandan Mix.jpg";
import SatrangiMix from "../../public/multimedia/products/Mukhwas (without supari)/Satrangi Mix.jpg";
import ShahiGulabMix from "../../public/multimedia/products/Mukhwas (without supari)/Shahi Gulab Mix.jpg";
import BambaiyaMix from "../../public/multimedia/products/Mukhwas (without supari)/Bambaiya Mix.jpg";
import JhilmilMix from "../../public/multimedia/products/Mukhwas (without supari)/Jhilmil Mix.jpg";
import MewaMix2nd from "../../public/multimedia/products/Mukhwas (without supari)/Mewa Mix 2nd.jpg";
import KashmiriMix from "../../public/multimedia/products/Mukhwas (without supari)/Kashmiri Mix.jpg";
import PunjabiMix from "../../public/multimedia/products/Mukhwas (without supari)/Punjabi Mix.jpg";
import MarwariMix from "../../public/multimedia/products/Mukhwas (without supari)/Marwari Mix.jpg";
import KhusMix from "../../public/multimedia/products/Mukhwas (without supari)/Khus Mix.jpg";
import GardenMix from "../../public/multimedia/products/Mukhwas (without supari)/Garden Mix.jpg";
import RajwadiMix from "../../public/multimedia/products/Mukhwas (without supari)/Rajwadi Mix.jpg";
import MewaMixSpecial from "../../public/multimedia/products/Mukhwas (without supari)/Mewa Mix Special.jpg";
import DilKhushMix from "../../public/multimedia/products/Mukhwas (without supari)/Dil Khush Mix.jpg";
// Premium Segment
import KhusMixGold from "../../public/multimedia/products/Premium Segment/Khus Mix Gold.jpg";
import RoyalBambaiya from "../../public/multimedia/products/Premium Segment/Royal Bambaiya.jpg";
// import CocktailMix from "../../public/multimedia/products/Premium Segment/Cocktail Mix.jpg";
import ShimlaMix from "../../public/multimedia/products/Premium Segment/Shimla Mix.jpg";
import RoyalZaiqaMix from "../../public/multimedia/products/Premium Segment/Royal Zaiqa Mix.jpg";
import KesariyaMix from "../../public/multimedia/products/Premium Segment/Kesariya Mix.jpg";
import MilkyShahiMewa from "../../public/multimedia/products/Premium Segment/Milky Shahi Mewa.jpg";
import FiveStarMix from "../../public/multimedia/products/Premium Segment/5 Star Mix.jpg";
import PineappleMix from "../../public/multimedia/products/Premium Segment/Pineapple Mix.jpg";
import RainbowMix from "../../public/multimedia/products/Premium Segment/Rainbow Mix.jpg";
import MansooriMix from "../../public/multimedia/products/Premium Segment/Mansoori Mix.jpg";
import PinkcityMix from "../../public/multimedia/products/Premium Segment/Pink City Mix.jpg";
import ShahiKhusMix from "../../public/multimedia/products/Premium Segment/Shahi Khus Mix.jpg";
import KashmiriGold from "../../public/multimedia/products/Premium Segment/Kashmiri Gold.jpg";
import GulbaharMix from "../../public/multimedia/products/Premium Segment/Gulbahar Mix.jpg";
import ShahiChandanMix from "../../public/multimedia/products/Premium Segment/Shahi Chandan Mix.jpg";
import RedShahiMewa from "../../public/multimedia/products/Premium Segment/Red Shahi Mewa.jpg";
import ChocolateNawabMix from "../../public/multimedia/products/Premium Segment/Chocolate Nawab Mix.jpg";
import ShahiMewaDelight from "../../public/multimedia/products/Premium Segment/Shahi Mewa Delight.jpg";
import GulabGoldMix from "../../public/multimedia/products/Premium Segment/Gulab Gold Mix.jpg";
import RoyalDilkhush from "../../public/multimedia/products/Premium Segment/Royal Dilkhush.jpg";
// import RoastedNamkeenMix from "../../public/multimedia/products/Premium Segment/Roasted Namkeen Mix.jpg";
import ZaikaPunjabiMix from "../../public/multimedia/products/Premium Segment/Zaiqa Punjabi Mix.jpg";
import RajwadaSpecial from "../../public/multimedia/products/Premium Segment/Rajwada Special.jpg";
import NooraniJhilmilMix from "../../public/multimedia/products/Premium Segment/Noorani Jhilmil Mix.jpg";
// With Supari
import Jhilmil24CaratSpecial from "../../public/multimedia/products/Mukhwas (with supari)/Jhilmil 24 Carat Special.jpg";
import ShahiMukhwas22Carat from "../../public/multimedia/products/Mukhwas (with supari)/Shahi Mukhwas 22 Carat.jpg";
import TitanicGold from "../../public/multimedia/products/Mukhwas (with supari)/Titanic Gold.jpg";
import ShahiKhusMixWithSupari from "../../public/multimedia/products/Mukhwas (with supari)/Shahi Khush Mix With Supari.jpg";
import PinkCityMix from "../../public/multimedia/products/Mukhwas (with supari)/Pink City Mix.jpg";
import TarangMix from "../../public/multimedia/products/Mukhwas (with supari)/Tarang Mix.jpg";
import MewaKesarMix from "../../public/multimedia/products/Mukhwas (with supari)/Mewa Kesar Mix.jpg";
import MewaLemonMix from "../../public/multimedia/products/Mukhwas (with supari)/Mewa Lemon Mix.jpg";
import TirangaMix from "../../public/multimedia/products/Mukhwas (with supari)/Tiranga Mix.jpg";
import RangeelaMix from "../../public/multimedia/products/Mukhwas (with supari)/Rangeela Mix.jpg";
import MewaMilkSupari from "../../public/multimedia/products/Mukhwas (with supari)/Mewa Milk Supari.jpg";
import LaungMix from "../../public/multimedia/products/Mukhwas (with supari)/Laung Mix.jpg";
// Saunf Products
import SaufProduct from "../../public/multimedia/products/sauf_product_main.png";
import RajasthaniRoastedSaunf from "../../public/multimedia/products/Saunf Products/Rajasthani Roasted Saunf.jpg";
import ChuriSaunf from "../../public/multimedia/products/Saunf Products/Churi Saunf.jpg";
import GreenSaunfSpecial from "../../public/multimedia/products/Saunf Products/Green Saunf Special.jpg";
import DhaniyaDal from "../../public/multimedia/products/Saunf Products/Dhaniya Dal.jpg";
import WhiteMadrasiSaunf from "../../public/multimedia/products/Saunf Products/White Madrasi Saunf.jpg";
import GreenMadrasiSaunf from "../../public/multimedia/products/Saunf Products/Green Madrasi Saunf.jpg";
import RasbhariSaunfSpecial from "../../public/multimedia/products/Saunf Products/Rasbhari Saunf Special.jpg";
import JetSaunf from "../../public/multimedia/products/Saunf Products/Jet Saunf.jpg";
import HotelSaunf from "../../public/multimedia/products/Saunf Products/Hotel Saunf.jpg";
import MarwariSaunf from "../../public/multimedia/products/Saunf Products/Marwari Saunf.jpg";
import RasbhariSaunf from "../../public/multimedia/products/Saunf Products/Rasbhari Saunf.jpg";
import RoastedFikiSaunf from "../../public/multimedia/products/Saunf Products/Roasted Fiki Saunf.jpg";
import PlaneFikiSaunf from "../../public/multimedia/products/Saunf Products/Plain Fiki Saunf.jpg";
// Dry Date Products
import DryDate from "../../public/multimedia/products/dry_date_main.png";
import GulabKhajur from "../../public/multimedia/products/Dry Dates Products/Gulab Khajur.jpg";
import ChocolateKhajur from "../../public/multimedia/products/Dry Dates Products/Chocolate Khajur.jpg";
import HerbalKhajurChura from "../../public/multimedia/products/Dry Dates Products/Herbal Khajur Chura.jpg";
import DryDateCutting from "../../public/multimedia/products/Dry Dates Products/Dry Date Cutting.jpg";
// Sweet Supari
import SweetSupari from "../../public/multimedia/products/sweet_supari_main.png";
import SekiThandiSupari from "../../public/multimedia/products/Sweet Supari/Seki Thandi Supari.jpg";
import ChikniAssamSupari from "../../public/multimedia/products/Sweet Supari/Chikni Assam Supari.jpg";
import MilkySupari from "../../public/multimedia/products/Sweet Supari/Milky Supari.jpg";
import GulabSupari from "../../public/multimedia/products/Sweet Supari/Gulab Supari.jpg";
import PineappleSupari from "../../public/multimedia/products/Sweet Supari/Pineapple Supari.jpg";
import YellowKesarLaccha from "../../public/multimedia/products/Sweet Supari/Yellow Kesar Laccha.jpg";
import KesarLaccha from "../../public/multimedia/products/Sweet Supari/Kesar Laccha.jpg";
import WaferSupari from "../../public/multimedia/products/Sweet Supari/Wafer Supari.jpg";
import PeeliKesarSupari from "../../public/multimedia/products/Sweet Supari/Peeli Kesar Supari.jpg";
import BanarsiKatran from "../../public/multimedia/products/Sweet Supari/Banarsi Katran.jpg";

// Plain Supari
import PlainSupari from "../../public/multimedia/products/plain_supari_main.png";
import SakelaTukdaFeeka from "../../public/multimedia/products/Plain Supari/Sakela Tukda Feeka.jpg";
import KacchiSupariDana from "../../public/multimedia/products/Plain Supari/Kacchi Supari Dana.jpg";
import ChikniAssamSupariWithSupari from "../../public/multimedia/products/Plain Supari/Chikni Assam Supari.jpg";
import SalliSupari from "../../public/multimedia/products/Plain Supari/Salli Supari.jpg";
import ChipsSupari from "../../public/multimedia/products/Plain Supari/Chips Supari.jpg";
import BanarsiKatranWithSupari from "../../public/multimedia/products/Plain Supari/Banarsi Katran.jpg";

// Silver CoatedProducts
import SilverProduct from "../../public/multimedia/products/silver_product_main.png";
import KhusSupari from "../../public/multimedia/products/Silver Coated Products/Khus Supari.jpg";
import GulabSupariSilver from "../../public/multimedia/products/Silver Coated Products/Gulab Supari.jpg";
import MastMastCherry from "../../public/multimedia/products/Silver Coated Products/Mast Mast Cherry.jpg";
import SilverSaunf from "../../public/multimedia/products/Silver Coated Products/Silver Saunf.jpg";

// Other Products
import ConfectioneryProduct from "../../public/multimedia/products/confectionery_product_main.png";
import FlaxSeeds from "../../public/multimedia/products/Confectionery & Others/Flax Seeds.jpg";
import CoconutFlakes from "../../public/multimedia/products/Confectionery & Others/Coconut Flakes.jpg";
import TiniMiniSpecial from "../../public/multimedia/products/Confectionery & Others/Tini Mini Special.jpg";
import TiniMiniMedium from "../../public/multimedia/products/Confectionery & Others/Tini Mini Medium.jpg";
import TiniMini from "../../public/multimedia/products/Confectionery & Others/Tini Mini.jpg";
import MixJintan from "../../public/multimedia/products/Confectionery & Others/Mix Jintan.jpg";
import WhiteMishri from "../../public/multimedia/products/Confectionery & Others/White Mishri.jpg";
import GulabMishri from "../../public/multimedia/products/Confectionery & Others/Gulab Mishri.jpg";
import KhusMishri from "../../public/multimedia/products/Confectionery & Others/Khus Mishri.jpg";
import KesarMishri from "../../public/multimedia/products/Confectionery & Others/Kesar Mishri.jpg";

import ProductModal from "@/components/ProductModal";
import { StaticImageData } from "next/image";

interface Product {
  title: string;
  image: StaticImageData;
  description: string;
  subcategories?: string[];
  items: {
    title: string;
    image: StaticImageData;
    description: string;
    parentCategory?: string;
  }[];
}

const products: Product[] = [
  {
    title: "Paan Mukhwas",
    image: PaanMukhwas,
    description: "A delightful paan flavored mouth freshener.",
    subcategories: ["Without Supari", "With Supari"],
    items: [
      {
        title: "Calcutti Paan Gold",
        image: CalcuttiPanGold,
        description:
          "A rich and aromatic paan crafted to perfection, offering a royal taste with refreshing sweetness.",
        parentCategory: "Without Supari",
      },
      {
        title: "Banarsi Paan",
        image: BanarsiPaan,
        description:
          "A traditional and flavourful paan that delivers the authentic essence of Banaras in every bite.",
        parentCategory: "Without Supari",
      },
      {
        title: "Dry Paan",
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
        title: "Meetha Paan",
        image: MeethaPaan,
        description:
          "A sweet and aromatic paan made with premium ingredients for a delightful after-meal freshness.",
        parentCategory: "Without Supari",
      },
      {
        title: "Chocolate Paan",
        image: ChocolatePaan,
        description:
          " A fusion of rich chocolate and classic paan flavour for a deliciously unique and refreshing taste.",
        parentCategory: "Without Supari",
      },
      {
        title: "Navratan Paan",
        image: NavratanPaan,
        description:
          "A royal mix of nine exotic ingredients offering a luxurious burst of flavours and aroma.",
        parentCategory: "Without Supari",
      },
      {
        title: "Nasik Paan",
        image: NasikPaan,
        description:
          "A distinctive and aromatic paan with earthy tones, offering a perfectly balanced refreshing taste.",
        parentCategory: "Without Supari",
      },
      {
        title: "Pink City Paan Special",
        image: PinkCityPaanSpecial,
        description:
          "A vibrant and flavourful paan crafted to capture the refreshing charm of the Pink City.",
        parentCategory: "Without Supari",
      },
      {
        title: "Calcutti Dry Paan Gold",
        image: CalcuttiDryPaanGold,
        description:
          "A premium dry paan with a golden touch, offering crisp texture and rich aroma.",
        parentCategory: "Without Supari",
      },
      {
        title: "Badshahi Kesar Paan",
        image: BadshahiKesarPaan,
        description:
          "Infused with pure saffron for a royal aroma and luxurious, refreshing taste.",
        parentCategory: "Without Supari",
      },
      {
        title: "Khus Paan",
        image: KhusPaan,
        description:
          "A naturally cool and fragrant paan offering a soothing, fresh, and earthy flavour.",
        parentCategory: "Without Supari",
      },

      {
        title: "Gulkand Paan",
        image: GulkandPaan,
        description:
          "A perfect blend of paan and rose petal sweetness that refreshes and uplifts instantly.",
        parentCategory: "Without Supari",
      },

      {
        title: "Rimjhim Mix",
        image: RimjhimMix,
        description:
          "A tangy and aromatic mix offering a lively burst of freshness with every bite.",
        parentCategory: "Without Supari",
      },

      {
        title: "Gulkand Mix",
        image: GulkandMix,
        description:
          "A sweet and refreshing blend of premium gulkand and handpicked aromatic ingredients.",
        parentCategory: "Without Supari",
      },
      {
        title: "Calcutti Paan",
        image: CalcuttiPaan,
        description:
          "A rich and aromatic paan blended with supari for an authentic, refreshing experience.",
        parentCategory: "With Supari",
      },

      {
        title: "Banarsi Paan",
        image: BanarsiPaanWihSupari,
        description:
          "A traditional paan filled with supari and flavour, capturing the true essence of Banaras.",
        parentCategory: "With Supari",
      },

      {
        title: "Meetha Paan",
        image: MeethaPaanWihSupari,
        description:
          "A sweet and flavourful paan with supari, offering a perfect balance of freshness and taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Calcutti Dry Paan",
        image: CalcuttiDryPaan,
        description:
          "A crisp and aromatic dry paan with supari, crafted for a bold and refreshing crunch.",
        parentCategory: "With Supari",
      },

      {
        title: "Badshahi Paan",
        image: BadshahiPaan,
        description:
          "A royal paan enriched with premium supari, offering a luxurious and refreshing flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Gulkand Paan",
        image: GulkandPaanWithSupari,
        description:
          "A delightful paan with supari and gulkand, blending floral sweetness with lasting freshness.",
        parentCategory: "With Supari",
      },

      {
        title: "Madhuram Paan",
        image: MadhuramPaan,
        description:
          "A perfectly balanced paan with supari, known for its rich aroma and mild sweetness.",
        parentCategory: "With Supari",
      },

      {
        title: "Kesar Paan Special",
        image: KesarPaanSpecial,
        description:
          "A premium paan infused with saffron and supari, delivering a royal, aromatic taste.",
        parentCategory: "With Supari",
      },
    ],
  },
  {
    title: "Mukhwas",
    image: Mukhwas,
    description: "A refreshing mouth freshener.",
    subcategories: ["Without Supari", "Premium Segment", "With Supari"],
    items: [
      {
        title: "Chocolate Mix",
        image: ChocolateMix,
        description:
          "A delightful fusion of chocolate and traditional flavours, offering a rich and refreshing taste.",
        parentCategory: "Without Supari",
      },

      {
        title: "Chandan Mix",
        image: ChandanMix,
        description:
          "A soothing blend with the gentle aroma of sandalwood for a calm, refreshing experience.",
        parentCategory: "Without Supari",
      },

      {
        title: "Satrangi Mix",
        image: SatrangiMix,
        description:
          "A colourful mix bursting with vibrant flavours that bring a refreshing twist to every bite.",
        parentCategory: "Without Supari",
      },

      {
        title: "Shahi Gulab Mix",
        image: ShahiGulabMix,
        description:
          "A royal mix infused with the fragrance of roses, delivering a sweet and aromatic freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Bambaiya Mix",
        image: BambaiyaMix,
        description:
          "A bold and tangy mix inspired by Mumbai’s street flavours, full of zest and freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Jhilmil Mix",
        image: JhilmilMix,
        description:
          "A sparkling mix of sweet and aromatic ingredients that light up your mood with every taste.",
        parentCategory: "Without Supari",
      },

      {
        title: "Mewa Mix 2nd",
        image: MewaMix2nd,
        description:
          "A rich blend of roasted and aromatic ingredients offering a sweet, crunchy freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Kashmiri Mix",
        image: KashmiriMix,
        description:
          "A fragrant and exotic mix offering a royal, refreshing touch.",
        parentCategory: "Without Supari",
      },

      {
        title: "Punjabi Mix",
        image: PunjabiMix,
        description:
          "A strong and flavour-packed mix known for its bold aroma and lasting freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Marwari Mix",
        image: MarwariMix,
        description:
          "A traditional Rajasthani style mix combining sweet and aromatic flavours perfectly.",
        parentCategory: "Without Supari",
      },

      {
        title: "Khus Mix",
        image: KhusMix,
        description:
          "A naturally cool and fragrant mix with the refreshing essence of vetiver for instant freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Garden Mix",
        image: GardenMix,
        description:
          "A vibrant and aromatic mix inspired by nature’s freshness, offering a light, floral taste.",
        parentCategory: "Without Supari",
      },

      {
        title: "Rajwadi Mix",
        image: RajwadiMix,
        description:
          "A royal and aromatic mix crafted with premium ingredients for a luxurious, fresh finish.",
        parentCategory: "Without Supari",
      },

      {
        title: "Mewa Mix Special",
        image: MewaMixSpecial,
        description:
          "An exquisite blend of roasted and aromatic ingredients offering a rich, sweet freshness.",
        parentCategory: "Without Supari",
      },

      {
        title: "Dil Khush Mix",
        image: DilKhushMix,
        description:
          "A delightful sweet mix that refreshes instantly and leaves you feeling truly dil khush.",
        parentCategory: "Without Supari",
      },
      {
        title: "Khus Mix Gold",
        image: KhusMixGold,
        description:
          "An exquisite blend with a soothing essence, crafted for a luxurious and indulgent taste.",
        parentCategory: "Premium Segment",
      },
      {
        title: "Royal Bambaiya",
        image: RoyalBambaiya,
        description:
          "A bold and refined mix inspired by Mumbai’s streets, offering a vibrant and refreshing crunch.",
        parentCategory: "Premium Segment",
      },

      // {
      // title: "Cocktail Mix",
      // image: CocktailMix,
      // description: "A sophisticated fusion of flavours delivering a lively and delightfully refreshing experience.",
      // parentCategory: "Premium Segment",
      // },

      {
        title: "Shimla Mix",
        image: ShimlaMix,
        description:
          "An aromatic and crisp mix inspired by the hills, offering a revitalising flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Royal Zaiqa Mix",
        image: RoyalZaiqaMix,
        description:
          "An elegant blend of select ingredients, crafted for a rich and flavourful experience.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Kesariya Mix",
        image: KesariyaMix,
        description:
          "A fragrant golden mix that offers a royal and indulgent taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Milky Shahi Mewa",
        image: MilkyShahiMewa,
        description:
          "A creamy and indulgent mix of rich ingredients offering a royal and satisfying taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "5 Star Mix",
        image: FiveStarMix,
        description:
          "A vibrant blend of select flavours crafted to deliver an exceptional and delightful experience.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Pineapple Mix",
        image: PineappleMix,
        description:
          "A fruity and aromatic mix bursting with refreshing pineapple essence for a lively taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Rainbow Mix",
        image: RainbowMix,
        description:
          "A colourful assortment of flavours that delights the senses with every bite.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Mansoori Mix",
        image: MansooriMix,
        description:
          "A refined blend of aromatic ingredients delivering a sophisticated and indulgent flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Pinkcity Mix",
        image: PinkcityMix,
        description:
          "A vibrant and fragrant mix inspired by Jaipur, offering a lively and delightful taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Shahi Khus Mix",
        image: ShahiKhusMix,
        description:
          "A royal blend with the soothing essence of khus, crafted for a refreshing indulgence.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Kashmiri Gold",
        image: KashmiriGold,
        description:
          "An aromatic and golden-hued mix delivering a rich and regal taste experience.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Gulbahar Mix",
        image: GulbaharMix,
        description:
          "A fragrant and floral mix with subtly sweet notes, offering a truly delightful flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Shahi Chandan Mix",
        image: ShahiChandanMix,
        description:
          "A soothing and aromatic blend with the essence of chandan, crafted for a premium taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Red Shahi Mewa",
        image: RedShahiMewa,
        description:
          "A rich and colourful mix of select ingredients delivering a royal and indulgent flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Chocolate Nawab Mix",
        image: ChocolateNawabMix,
        description:
          "A decadent fusion of chocolate and classic ingredients for a delightful, rich taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Shahi Mewa Delight",
        image: ShahiMewaDelight,
        description:
          "A luscious mix of aromatic ingredients offering a royal and satisfying indulgence.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Gulab Gold Mix",
        image: GulabGoldMix,
        description:
          "A fragrant rose-infused blend with golden richness for a truly indulgent flavour.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Royal Dilkhush",
        image: RoyalDilkhush,
        description:
          "A vibrant and aromatic mix designed to refresh and delight the senses instantly.",
        parentCategory: "Premium Segment",
      },

      // {
      // title: "Roasted Namkeen Mix",
      // image: RoastedNamkeenMix,
      // description: "A crisp and savoury mix with perfectly roasted ingredients for a delightful crunch.",
      // parentCategory: "Premium Segment",
      // },

      {
        title: "Zaika Punjabi Mix",
        image: ZaikaPunjabiMix,
        description:
          "A flavour-packed blend with bold and aromatic notes, delivering a truly satisfying taste.",
        parentCategory: "Premium Segment",
      },

      {
        title: "Rajwada Special",
        image: RajwadaSpecial,
        description:
          "A royal blend of select ingredients offering an indulgent and sophisticated flavour.",
        parentCategory: "Premium Segment",
      },
      {
        title: "Noorani Jhilmil Mix",
        image: NooraniJhilmilMix,
        description:
          "A sparkling and aromatic mix crafted for a lively and delightful taste experience.",
        parentCategory: "Premium Segment",
      },
      {
        title: "Jhilmil 24 Carat Special",
        image: Jhilmil24CaratSpecial,
        description:
          "A sparkling and indulgent supari mix crafted for a truly luxurious taste experience.",
        parentCategory: "With Supari",
      },

      {
        title: "Shahi Mukhwas 22 Carat",
        image: ShahiMukhwas22Carat,
        description:
          "A royal blend of aromatic ingredients with supari, delivering a rich and premium flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Titanic Gold",
        image: TitanicGold,
        description:
          "A bold supari mix with golden richness, offering a delightful and indulgent taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Shahi Khus Mix",
        image: ShahiKhusMixWithSupari,
        description:
          "A fragrant blend with supari and soothing khus essence, offering a refreshing royal taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Pink City Mix",
        image: PinkCityMix,
        description:
          "A vibrant and aromatic supari mix that delights the senses in every bite.",
        parentCategory: "With Supari",
      },

      {
        title: "Tarang Mix",
        image: TarangMix,
        description:
          "A zesty and aromatic supari mix with a lively burst of flavours in every bite.",
        parentCategory: "With Supari",
      },

      {
        title: "Mewa Kesar Mix",
        image: MewaKesarMix,
        description:
          "A rich supari blend with mewa and saffron notes, offering a subtly indulgent flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Mewa Lemon Mix",
        image: MewaLemonMix,
        description:
          "A refreshing supari mix with mewa and citrusy lemon, delivering a tangy and satisfying taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Tiranga Mix",
        image: TirangaMix,
        description:
          "A colourful supari mix with a balanced blend of flavours, offering a festive and delightful experience.",
        parentCategory: "With Supari",
      },

      {
        title: "Rangeela Mix",
        image: RangeelaMix,
        description:
          "A vibrant supari mix combining aromatic ingredients for a fun and refreshing flavour.",
        parentCategory: "With Supari",
      },

      {
        title: "Mewa Milk Supari",
        image: MewaMilkSupari,
        description:
          "A creamy supari mix with mewa, crafted for a smooth and indulgent taste.",
        parentCategory: "With Supari",
      },

      {
        title: "Laung Mix",
        image: LaungMix,
        description:
          "A classic supari mix infused with aromatic laung, delivering a traditional and refreshing flavour.",
        parentCategory: "With Supari",
      },
    ],
  },
  {
    title: "Saunf Products",
    image: SaufProduct,
    description: "Aromatic and flavorful saunf products.",
    items: [
      {
        title: "Rajasthani Roasted Saunf",
        image: RajasthaniRoastedSaunf,
        description:
          "A perfectly roasted saunf offering a rich aroma and satisfying aftertaste.",
      },

      {
        title: "Churi Saunf",
        image: ChuriSaunf,
        description:
          "Finely chopped saunf with a delicate flavour that refreshes and delights.",
      },

      {
        title: "Green Saunf Special",
        image: GreenSaunfSpecial,
        description:
          "A vibrant green saunf blend with natural freshness and aromatic taste.",
      },

      {
        title: "Dhaniya Dal",
        image: DhaniyaDal,
        description:
          "Premium dhaniya seeds with a subtle, fragrant flavour for a refreshing finish.",
      },

      {
        title: "White Madrasi Saunf",
        image: WhiteMadrasiSaunf,
        description:
          "Smooth and aromatic white saunf crafted for a clean and delightful taste.",
      },

      {
        title: "Green Madrasi Saunf",
        image: GreenMadrasiSaunf,
        description:
          "Fresh and aromatic green saunf offering a crisp and refreshing flavour.",
      },

      {
        title: "Rasbhari Saunf Special",
        image: RasbhariSaunfSpecial,
        description:
          "A unique blend of saunf with a fruity twist, delivering a vibrant and satisfying taste.",
      },

      {
        title: "Jet Saunf",
        image: JetSaunf,
        description:
          "A finely crafted saunf mix with a rich aroma and lasting freshness.",
      },

      {
        title: "Hotel Saunf",
        image: HotelSaunf,
        description:
          "A premium-quality saunf with balanced flavour, perfect for after-meal freshness.",
      },

      {
        title: "Marwari Saunf",
        image: MarwariSaunf,
        description:
          "A traditional saunf mix with aromatic and naturally refreshing taste.",
      },

      {
        title: "Rasbhari Saunf",
        image: RasbhariSaunf,
        description:
          "A fruity-flavoured saunf offering a sweet and aromatic aftertaste.",
      },

      {
        title: "Roasted Fiki Saunf",
        image: RoastedFikiSaunf,
        description:
          "Lightly roasted saunf with a mild aroma for a subtle and soothing flavour.",
      },

      {
        title: "Plane Fiki Saunf",
        image: PlaneFikiSaunf,
        description:
          "Simple and aromatic plain saunf crafted for a gentle, refreshing taste.",
      },
    ],
  },
  {
    title: "Dry Date Products",
    image: DryDate,
    description: "Delicious dry date products.",
    items: [
      {
        title: "Gulab Khajur",
        image: GulabKhajur,
        description:
          "Soft and succulent dates infused with aromatic rose for a sweet and indulgent taste.",
      },

      {
        title: "Chocolate Khajur",
        image: ChocolateKhajur,
        description:
          "Rich chocolate-coated dates offering a luxurious and delightful flavour.",
      },

      {
        title: "Herbal Khajur Chura",
        image: HerbalKhajurChura,
        description:
          "A wholesome blend of chopped dates with herbal goodness for a refreshing and healthy taste.",
      },

      {
        title: "Dry Date Cutting",
        image: DryDateCutting,
        description:
          "Premium sliced dates with natural sweetness, perfect for a rich and satisfying treat.",
      },
    ],
  },
  {
    title: "Sweet Supari",
    image: SweetSupari,
    description: "A sweet and savory supari.",
    items: [
      {
        title: "Seki Thandi Supari",
        image: SekiThandiSupari,
        description:
          "A cool and refreshing sweet supari with a smooth and delightful flavour.",
      },

      {
        title: "Chikni Assam Supari",
        image: ChikniAssamSupari,
        description:
          "Glossy and chewy sweet supari offering a smooth and aromatic taste.",
      },

      {
        title: "Milky Supari",
        image: MilkySupari,
        description:
          "Creamy and indulgent sweet supari with a rich and satisfying flavour.",
      },

      // {
      // title: "Elaichi Supari",
      // image: ElaichiSupari,
      // description: "Fragrant supari infused with cardamom, delivering a refreshing and aromatic taste.",
      // },

      {
        title: "Gulab Supari",
        image: GulabSupari,
        description:
          "Sweet supari with delicate rose essence for a fragrant and delightful flavour.",
      },

      {
        title: "Pineapple Supari",
        image: PineappleSupari,
        description:
          "A fruity and aromatic supari blend with refreshing pineapple notes.",
      },

      {
        title: "Yellow Kesar Laccha",
        image: YellowKesarLaccha,
        description:
          "Golden-hued supari layered with saffron, offering a rich and indulgent taste.",
      },

      {
        title: "Kesar Laccha",
        image: KesarLaccha,
        description:
          "Aromatic saffron-infused supari with a luxurious and flavourful experience.",
      },

      {
        title: "Wafer Supari",
        image: WaferSupari,
        description:
          "Crisp and delicate wafer-style supari delivering a light and satisfying taste.",
      },

      {
        title: "Peeli Kesar Supari",
        image: PeeliKesarSupari,
        description:
          "Bright saffron-infused sweet supari with a rich and aromatic flavour.",
      },

      {
        title: "Banarsi Katran",
        image: BanarsiKatran,
        description:
          "Finely cut Banarsi-style supari with a fragrant and sweet taste.",
      },
    ],
  },

  {
    title: "Plain Supari",
    image: PlainSupari,
    description: "A simple and classic supari.",
    items: [
      {
        title: "Sakela Tukda Feeka",
        image: SakelaTukdaFeeka,
        description:
          "Simple and aromatic plain supari delivering a natural and subtle flavour.",
      },

      {
        title: "Kacchi Supari Dana",
        image: KacchiSupariDana,
        description:
          "Raw supari seeds with a mild and authentic taste, perfect for traditional enjoyment.",
      },

      {
        title: "Chikni Assam Supari",
        image: ChikniAssamSupariWithSupari,
        description:
          "Glossy and chewy plain supari offering a smooth and natural flavour.",
      },

      {
        title: "Salli Supari",
        image: SalliSupari,
        description:
          "Thinly sliced plain supari with a light and aromatic taste.",
      },

      {
        title: "Chips Supari",
        image: ChipsSupari,
        description:
          "Crisp and delicately cut plain supari providing a satisfying traditional flavour.",
      },

      {
        title: "Banarsi Katran",
        image: BanarsiKatranWithSupari,
        description:
          "Finely cut Banarsi-style plain supari with a naturally fragrant and subtle taste.",
      },
    ],
  },
  {
    title: "Silver Coated Products",
    image: SilverProduct,
    description: "Exquisite silver coated products.",
    items: [
      {
title: "Khus Supari",
image: KhusSupari,
description: "Sweet supari coated with silver, offering a fragrant and indulgent taste.",
},

{
title: "Gulab Supari",
image: GulabSupariSilver,
description: "Rose-flavoured supari adorned with silver for a luxurious and delightful flavour.",
},

{
title: "Mast Mast Cherry",
image: MastMastCherry,
description: "Sweet cherry-flavoured supari with a sparkling silver coating for a rich and festive taste.",
},

{
title: "Silver Saunf",
image: SilverSaunf,
description: "Aromatic saunf delicately coated with silver, delivering a premium and refreshing flavour.",
}
    ],
  },
  {
    title: "Confectionery & Others",
    image: ConfectioneryProduct,
    description: "A variety of confectionery products.",
    items: [
      {
title: "Flax Seeds",
image: FlaxSeeds,
description: "Nutritious flax seeds with a natural, wholesome flavour perfect for daily refreshment.",
},

{
title: "Coconut Flakes",
image: CoconutFlakes,
description: "Light and aromatic coconut flakes offering a subtly sweet and delightful taste.",
},

{
title: "Tini Mini Special",
image: TiniMiniSpecial,
description: "A premium miniature blend crafted for a flavorful and refreshing experience.",
},

{
title: "Tini Mini Medium",
image: TiniMiniMedium,
description: "A balanced miniature mix delivering a delightful and aromatic flavour.",
},

{
title: "Tini Mini",
image: TiniMini,
description: "A compact and flavourful mix offering a refreshing taste in every bite.",
},

{
title: "Mix Jintan",
image: MixJintan,
description: "A classic blend of jintan seeds providing a natural and aromatic after-meal freshness.",
},

{
title: "White Mishri",
image: WhiteMishri,
description: "Pure white sugar crystals with a naturally sweet and satisfying taste.",
},

{
title: "Gulab Mishri",
image: GulabMishri,
description: "Rose-infused sugar crystals offering a fragrant and indulgent flavour.",
},

{
title: "Khus Mishri",
image: KhusMishri,
description: "Aromatic khus-flavoured sugar crystals crafted for a refreshing and delightful taste.",
},

{
title: "Kesar Mishri",
image: KesarMishri,
description: "Golden saffron-infused sugar crystals delivering a rich and aromatic flavour.",
}
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

  return (
    <div
      id="products"
      className="w-full p-10 flex flex-col justify-center items-center"
    >
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
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 py-20">
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
