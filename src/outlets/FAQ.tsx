"use client";
import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is PinkCity Mouth Freshener?",
    answer: "PinkCity Mouth Freshener is a premium manufacturer of traditional mukhwas and mouth fresheners based in Jaipur, Rajasthan. Since 1982, we have been crafting authentic Indian mouth fresheners using the finest ingredients and traditional recipes, ensuring hygienically packed products that deliver exceptional taste and freshness."
  },
  {
    question: "What types of mouth fresheners does PinkCity offer?",
    answer: "PinkCity offers a wide range of premium mouth fresheners including Paan Mukhwas, Traditional Mukhwas, Saunf Products, Plain Supari, Sweet Supari, Dry Date Products, Silver Coated Products, and Confectionery Products. Each product is crafted with authentic ingredients and traditional recipes from Jaipur."
  },
  {
    question: "Where is PinkCity Mouth Freshener located?",
    answer: "PinkCity Mouth Freshener is located in Jaipur, Rajasthan, India - the historic Pink City. We have been serving customers from Jaipur and across India since 1982 with our authentic mukhwas products."
  },
  {
    question: "Does PinkCity offer wholesale or bulk orders?",
    answer: "Yes! PinkCity Mouth Freshener offers wholesale and bulk order options for businesses, retailers, and distributors. We are a trusted mouth freshener supplier with competitive pricing for large orders. Contact us for wholesale inquiries and custom requirements."
  },
  {
    question: "What makes PinkCity Mouth Freshener different from other brands?",
    answer: "PinkCity stands out with our 40+ years of experience since 1982, commitment to authentic traditional recipes, use of premium quality ingredients, hygienically packed products, and Jaipur's rich cultural heritage reflected in every blend. We combine traditional craftsmanship with modern quality standards."
  },
  {
    question: "Are PinkCity products hygienically packed?",
    answer: "Absolutely! All PinkCity Mouth Freshener products are processed and packed under strict hygienic conditions. We maintain the highest quality control standards to ensure that every packet you receive is fresh, pure, and safe for consumption."
  },
  {
    question: "What is mukhwas and how is it different from regular mouth fresheners?",
    answer: "Mukhwas is a traditional Indian mouth freshener typically consumed after meals. It's a blend of various seeds, nuts, and spices like fennel (saunf), sesame seeds, coconut, and aromatic spices. Unlike regular mint-based mouth fresheners, mukhwas offers authentic flavors rooted in Indian culinary traditions and aids digestion."
  },
  {
    question: "Can I order PinkCity products online?",
    answer: "Yes, you can enquire about PinkCity Mouth Freshener products through our website's contact form. We serve customers across India and welcome both retail and wholesale orders. Contact us for product availability, pricing, and shipping information."
  },
  {
    question: "What is the shelf life of PinkCity Mouth Freshener products?",
    answer: "Our products are freshly prepared and hygienically packed to ensure maximum freshness. The shelf life varies by product type, but generally, our mouth fresheners maintain their quality for several months when stored in a cool, dry place. Specific shelf life information is printed on each product package."
  },
  {
    question: "Why choose Jaipur-based mouth fresheners?",
    answer: "Jaipur, the Pink City, has a rich heritage of traditional mouth freshener manufacturing. PinkCity Mouth Freshener carries forward this legacy with authentic recipes passed down through generations, combined with Rajasthan's cultural authenticity and our commitment to quality since 1982."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="w-full py-20 px-10 bg-white pt-0" id="faq">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-center">
          <SectionHeading title="Frequently Asked Questions" />
          </div>
          <div className="text-center max-w-4xl my-8 mt-2">
            <h2 className="text-2xl font-semibold mb-4">Everything You Need to Know About PinkCity Mouth Freshener</h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-pinkcity"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <FontAwesomeIcon
                    icon={openIndex === index ? faChevronUp : faChevronDown}
                    className="text-pinkcity-dark text-xl flex-shrink-0"
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

