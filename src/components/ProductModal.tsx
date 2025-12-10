import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "../../public/images/arrow.svg";

interface ProductModalProps {
  product: {
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
  };
  onClose: () => void;
}

interface selectedProduct {
  title: string;
  image: StaticImageData;
  description: string;
  parentCategory?: string;
}
const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedProduct, setSelectedProduct] =
    useState<selectedProduct | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeProducts, setActiveProducts] = useState<selectedProduct[]>([]);

  useEffect(() => {
    setActiveCategory(product.subcategories?.[0] ?? "");
  }, [product]);
  useEffect(() => {
    if (activeCategory) {
      const filteredProducts = product.items.filter(
        (item) => item.parentCategory === activeCategory
      );
      setActiveProducts(filteredProducts);
      setSelectedProduct(filteredProducts[0] || null);
    } else {
      setActiveProducts(product.items);
      setSelectedProduct(product.items[0]);
    }
  }, [activeCategory, product.items]);

  const setNextItem = () => {
    setSelectedProduct((prev) => {
      if (!prev) return prev;
      const currentIndex = activeProducts.findIndex(
        (item) => item.title === prev.title
      );
      const nextIndex = (currentIndex + 1) % activeProducts.length;
      return activeProducts[nextIndex];
    });
  };
  const setPrevItem = () => {
    setSelectedProduct((prev) => {
      if (!prev) return prev;
      const currentIndex = activeProducts.findIndex(
        (item) => item.title === prev.title
      );
      let nextIndex = (currentIndex - 1) % activeProducts.length;
      if (nextIndex < 0) {
        nextIndex = activeProducts.length - 1;
      }
      return activeProducts[nextIndex];
    });
  };
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <div
        className="w-9/12 rounded-[25px] p-1 bg-gradient-border max-h-9/10 overflow-y-auto flex items-stretch"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-8 rounded-[22px] flex flex-col md:flex-row items-start justify-around">
          <div className="w-1/2 h-full flex flex-col justify-center items-start gap-8">
            <div className="min-w-4/5">
              <h2
                className="text-4xl md:text-5xl mb-4 text-black"
                style={{ fontFamily: "var(--font-bentham)" }}
              >
                {product.title}
              </h2>
            </div>
            <div className="w-full flex items-stretch">
              <button
                className="w-2/12 flex justify-center items-center"
                onClick={() => setPrevItem()}
              >
                <div className="w-3/5 hover:bg-[#D9D9D9] py-4 pr-1 opacity-70 rounded-md flex items-center justify-center">
                  <Image src={Arrow} alt="Arrow" />
                </div>
              </button>
              <div className="relative w-8/12 aspect-square">
                <Image
                  src={selectedProduct?.image || product.image}
                  alt={product.title}
                  className="scale-125"
                  fill
                />
              </div>
              <button
                className="w-2/12 flex justify-center items-center"
                onClick={() => setNextItem()}
              >
                <div className="w-3/5 hover:bg-[#D9D9D9] py-4 pr-1 opacity-70 rounded-md flex items-center justify-center">
                  <Image
                    src={Arrow}
                    alt="Arrow"
                    className="transform scale-x-[-1]"
                  />
                </div>
              </button>
            </div>
            <h1 className="font-bold text-4xl">{selectedProduct?.title}</h1>
            <p className="text-gray-700 mb-6">{selectedProduct?.description}</p>
          </div>
          <div className="w-1/2 h-full md:pl-8 flex flex-col gap-4 justify-start p-12 pb-0 items-start">

            {product.subcategories && (
              <div className="flex w-full justify-start gap-4 flex-wrap">
                {product.subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => setActiveCategory(subcategory)}
                  >
                    <p
                      className={`text-pinkcity-dark min-w-5/12 px-6 py-2 flex justify-center items-center border border-pinkcity-dark rounded-xl ${subcategory === activeCategory
                          ? "bg-pinkcity-dark text-white"
                          : "bg-white text-pinkcity-dark"
                        }`}
                    >
                      {subcategory}
                    </p>
                  </button>
                ))}
              </div>
            )}
            {activeProducts && (
              <div className="w-full flex flex-wrap gap-4 mt-6 min-h-6/10 overflow-y-auto">
                {activeProducts.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => setSelectedProduct(item)}
                    className="w-1/5"
                  >
                    <div
                      className={`flex flex-col gap-2 justify-center items-center p-3 ${item == selectedProduct ? "bg-[#F35C81]/13" : ""
                        }`}
                    >
                      <div className={`min-w-10/12 opacity-100`}>
                        <Image src={item.image} alt={item.title} />
                      </div>
                      <p>
                        {item.title.split("  ").map((word) => <p className="text-center text-xs">{word}</p>)}
                      </p>

                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
