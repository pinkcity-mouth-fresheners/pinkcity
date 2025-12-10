"use client";
import Alert from "@/components/Alert";
import ContactUsCard from "@/components/ContactUsCard";
import Star from "../../public/images/star_white.svg";
import DryPaan from "../../public/multimedia/dry_paan.png";
import { useMobile } from "@/components/MobileProvider";
import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    variant: "success" | "error";
  } | null>(null);
  const isMobile = useMobile();
  const showAlert = (message: string, variant: "success" | "error") => {
    setAlert({ show: true, message, variant });
  };

  return (
    <div
      id="contact"
      className={`w-screen bg-pinkcity-dark flex flex-col justify-center items-center text-white overflow-hidden ${
        isMobile ? "px-5" : "px-20"
      }`}
    >
      {alert?.show && (
        <Alert
          message={alert.message}
          variant={alert.variant}
          onClose={() => setAlert(null)}
        />
      )}
      <div
        className={`w-full flex justify-around items-center -gap-10 tracking-wider font-semibold ${
          isMobile ? "py-20 px-5" : "px-20"
        }`}
      >
        <div className={` ${isMobile ? "w-full" : "w-2/5"}`}>
          <div className="relative">
              <ContactUsCard showAlert={showAlert} />
          </div>
        </div>
        {!isMobile && (
          <div className="max-w-1/2 relative p-0">
            <Image src={Star} alt="Star" className="z-10 transform translate-x-4/10 translate-y-4/10 scale-[2] opacity-60"/>
            <Image src={DryPaan} alt="Dry Paan" className="absolute z-20 -bottom-100 -right-100 scale-[1.6]"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
