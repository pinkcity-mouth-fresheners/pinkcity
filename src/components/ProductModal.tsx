import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMobile } from "./MobileProvider";
import Arrow from "../../public/images/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ProductModalProps {
  product: {
    title: string;
    image: StaticImageData;
    description: string;
    subcategories?: string[];
    items: selectedProduct[];
  };
  onClose: () => void;
  selectedProductSample?: selectedProduct
}

export interface selectedProduct {
  title: string;
  image: StaticImageData;
  description: string;
  parentCategory?: string;
}
const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, selectedProductSample }) => {
  const isMobile = useMobile();
  /* State Initialization with logic to respect selectedProductSample */
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (selectedProductSample?.parentCategory) {
      return selectedProductSample.parentCategory;
    }
    return product.subcategories?.[0] ?? "";
  });

  const [selectedProduct, setSelectedProduct] = useState<selectedProduct | null>(() => {
    if (selectedProductSample) return selectedProductSample;

    // Fallback default logic if no sample provided
    const defaultCategory = product.subcategories?.[0] ?? "";
    if (defaultCategory) {
      return product.items.find(item => item.parentCategory === defaultCategory) || null;
    }
    return product.items[0] || null;
  });

  // Derived state for active products based on category
  const activeProducts = React.useMemo(() => {
    if (activeCategory) {
      return product.items.filter((item) => item.parentCategory === activeCategory);
    }
    return product.items;
  }, [activeCategory, product.items]);

  const [animationPhase, setAnimationPhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);

    // When category changes, default to first item in that category
    const productsInNewCategory = product.items.filter(item => item.parentCategory === category);
    if (productsInNewCategory.length > 0) {
      handleProductChange(productsInNewCategory[0]);
    }
  };

  const handleProductChange = (newProduct: selectedProduct) => {
    if (newProduct.title === selectedProduct?.title) return;

    // Stage 1: Exit (Slide Left, Rotate CCW, Fade Out)
    setAnimationPhase('exiting');

    setTimeout(() => {
      // Stage 2: Swap Data and Reset Position (Instant Jump to Right)
      setSelectedProduct(newProduct);
      setAnimationPhase('entering');
    }, 300);
  };

  // To make the "Enter" animation work cleanly with React state:
  // We need an explicit "start enter" state and an "end enter" (idle) state.
  // BUT simplified approach:
  // 1. 'exiting': style = transform left
  // 2. 'entering': style = transform right (no transition? or transition from left? No, we want jump).
  //    Actually, if we just switch data and use a KEY on the div, React will remount it.
  //    If we remount it, we can use a CSS animation `animate-wheel-in`.
  //    That is much simpler than managing complex state phases.
  //    Let's try the key approach combined with animation classes.

  // Revised approach inside this Replacement: switch to keyed div with animation classes?
  // User asked for "translating left... rotating anticlockwise".
  // Let's stick to the state phase control for precision.

  // Refined Logic using useEffect for the 'entering' -> 'idle' step:
  useEffect(() => {
    if (animationPhase === 'entering') {
      // We are at "Start Position" (Right side).
      // Wait a tick then move to "End Position" (Center).
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimationPhase('idle');
        });
      });
    }
  }, [animationPhase]);

  /* ... setNextItem / setPrevItem ... */
  const setNextItem = () => {
    if (!selectedProduct) return;
    const currentIndex = activeProducts.findIndex(
      (item) => item.title === selectedProduct.title
    );
    const nextIndex = (currentIndex + 1) % activeProducts.length;
    handleProductChange(activeProducts[nextIndex]);
  };

  const setPrevItem = () => {
    if (!selectedProduct) return;
    const currentIndex = activeProducts.findIndex(
      (item) => item.title === selectedProduct.title
    );
    let nextIndex = (currentIndex - 1) % activeProducts.length;
    if (nextIndex < 0) {
      nextIndex = activeProducts.length - 1;
    }
    handleProductChange(activeProducts[nextIndex]);
  };

  // Helper to determine classes based on phase
  const getTransformClasses = () => {
    switch (animationPhase) {
      case 'exiting':
        return 'opacity-0 -translate-x-full -rotate-180 transition-all duration-1000 ease-in-out'; // Move Left, Rotate CCW
      case 'entering':
        return 'opacity-0 translate-x-full rotate-180 transition-none'; // Start at Right, Rotated CW (so it can rotate CCW to 0)
      case 'idle':
        return 'opacity-100 translate-x-0 rotate-0 transition-all duration-1000 ease-out'; // Move to Center, Rotate to 0
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <div
        className={`${isMobile ? "w-11/12 max-h-[90vh]" : "w-10/12 max-h-9/10"} rounded-[25px] p-1 bg-gradient-border overflow-y-auto relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[60] flex items-center justify-center text-black"
        >
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </button>
        <div className={`bg-white ${isMobile ? "p-4" : "p-8"} rounded-[22px] flex flex-col md:flex-row items-start justify-around w-full`}>
          <div className={`${isMobile ? "w-full gap-4 h-auto" : "w-1/2 gap-8 h-full"} flex flex-col justify-center items-start`}>
            <div className="min-w-4/5">
              <h2
                className={`${isMobile ? "text-2xl mb-2" : "text-4xl md:text-5xl mb-4"} text-black`}
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
              <div className="relative w-8/12 aspect-square overflow-hidden rounded-full"> {/* Overflow hidden to mask the slide */}
                <div
                  className={`w-full h-full relative transform ${getTransformClasses()}`}
                >
                  <Image
                    src={selectedProduct?.image || product.image}
                    alt={product.title}
                    className={`${isMobile ? "scale-100" : "scale-125"}`}
                    fill
                  />
                </div>
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
            <h1 className={`font-bold ${isMobile ? "text-xl" : "text-4xl"}`}>{selectedProduct?.title}</h1>
            <p className={`text-gray-700 ${isMobile ? "mb-2 text-sm" : "mb-6"}`}>{selectedProduct?.description}</p>
          </div>
          <div className={`${isMobile ? "w-full pl-0 p-4 pt-0 h-auto" : "w-1/2 pl-8 p-12 h-full"} flex flex-col gap-4 justify-start pb-0 items-start`}>

            {product.subcategories && (
              <div className={`flex w-full justify-start gap-4 ${isMobile ? "overflow-x-auto pb-2 flex-nowrap" : "flex-wrap"}`}>
                {product.subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => handleCategoryChange(subcategory)}
                    className="flex-shrink-0"
                  >
                    <p
                      className={`text-pinkcity-dark min-w-[100px] flex justify-center items-center border border-pinkcity-dark rounded-xl ${isMobile ? "text-xs px-3 py-1" : "px-6 py-2"
                        } ${subcategory === activeCategory
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
              <div className={`w-full flex flex-wrap gap-4 mt-6 ${isMobile ? "max-h-[40vh] overflow-y-auto" : "min-h-6/10 overflow-y-auto"}`}>
                {activeProducts.map((item) => (
                  <button
                    key={`${item.title}-${item.image}-${item.parentCategory}`}
                    onClick={() => handleProductChange(item)}
                    className={`${isMobile ? "w-1/4" : "w-1/5"}`}
                  >
                    <div
                      className={`flex flex-col gap-2 justify-center items-center p-3 ${item == selectedProduct ? "bg-[#F35C81]/13" : ""
                        }`}
                    >
                      <div className={`min-w-10/12 opacity-100`}>
                        <Image src={item.image} alt={item.title} />
                      </div>
                      <div>
                        {item.title.split("  ").map((word) => <p className="text-center text-xs">{word}</p>)}
                      </div>

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
