'use client';
import React, { useState, useEffect } from "react";
import { useMobile } from "@/components/MobileProvider";

const ContactUsCard = ({
  showAlert,
}: {
  showAlert: (message: string, variant: "success" | "error") => void;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({});
  const isMobile = useMobile();

  const validate = () => {
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.phone
    ) {
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const validity = validate();
    setIsValid(validity);
    if (validity) {
      setButtonStyle({}); // Reset style when form becomes valid
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const res = await fetch("https://api.pinkcitymouthfresheners.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.message) {
          showAlert(data.message, "success");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        } else if (data.error) {
          showAlert(data.error, "error");
        } else {
          showAlert("Failed to send message. Please try again.", "error");
        }
      } catch{
        showAlert("Failed to send message. Please try again.", "error");
      }
      setIsSubmitting(false);
    } else {
      showAlert("Please fill out all required fields correctly.", "error");
    }
  };

  const handleButtonHover = () => {
    if (!isValid) {
      const top = Math.random() * 80;
      const left = Math.random() * 80;
      setButtonStyle({
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        transition: "top 0.3s ease, left 0.3s ease",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-lg shadow-md text-black flex flex-col justify-center items-start relative ${
        isMobile ? "p-6 gap-2" : "p-14  gap-6"
      }`}>
        <div className="w-full">
      <h1 className="text-2xl text-center font-bold text-pinkcity-dark">
        ENQUIRE MORE
      </h1>
      <h1 className="text-2xl text-center font-bold text-pinkcity-dark">
        ABOUT OUR PRODUCT LINEUP
      </h1>
        </div>
      <h2 className={`${isMobile ? "text-xl" : "text-2xl pb-8"}`}>Get In Touch</h2>
      <div className={`flex items-center w-full ${isMobile ? 'flex-col gap-2' : 'justify-around  gap-8'}`}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className={`border-1 border-black focus:outline-none bg-transparent px-4 py-2 rounded-[6] ${isMobile ? 'w-full text-sm' : 'w-1/2'}`}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className={`border-1 border-black focus:outline-none bg-transparent px-4 py-2 rounded-[6] ${isMobile ? 'w-full text-sm' : 'w-1/2'}`}
        />
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email address"
        className={`border-1 border-black focus:outline-none w-full bg-transparent px-4 py-2 rounded-[6] ${isMobile ? "text-sm" : ""}`}
      />
      <div className="border-1 border-black rounded-[6] w-full flex items-center px-4">
        <span className={`text-black pr-2 whitespace-nowrap ${isMobile ? "text-sm" : ""}`}>+91 |</span>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className={`focus:outline-none bg-transparent w-full py-2 ${isMobile ? "text-sm" : ""}`}
        />
      </div>
      <div className={`w-full flex flex-col ${isMobile ? "gap-2" :  "gap-4"}`}>
        <label className={`font-extralight ${isMobile ? "text-sm" : "text-lg"}`} htmlFor="message">
          Message (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className={`border-1 border-black focus:outline-none w-full bg-transparent px-4 py-2 rounded-[6] resize-none ${isMobile ? "text-sm" : ""}`}
          rows={isMobile ? 3 : 4}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-pinkcity-dark text-white font-bold py-2 px-4 rounded-lg transition-colors"
        style={buttonStyle}
        onMouseEnter={handleButtonHover}>
        {isSubmitting ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactUsCard;
