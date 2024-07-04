"use client";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowTrendUp,
} from "@/assets/icons";
import { TiSocialPinterest } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";
import "@/styles/styles.css";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  billEase,
  bpi,
  ceb,
  ecPay,
  gcash,
  grabPay,
  palawan,
  payPal,
  unionBank,
  visa,
} from "@/assets";
import { buttonClick } from "@/animations";

export default function Footer() {
  // Map function to display payment gateway in an Image wrapper
  const paymentGateways = [
    {
      id: 1,
      name: "gcash",
      image: gcash,
    },
    {
      id: 2,
      name: "grabPay",
      image: grabPay,
    },
    {
      id: 3,
      name: "ecPay",
      image: ecPay,
    },
    {
      id: 4,
      name: "payPal",
      image: payPal,
    },
    {
      id: 5,
      name: "billEase",
      image: billEase,
    },
    {
      id: 6,
      name: "unionBank",
      image: unionBank,
    },
    {
      id: 7,
      name: "bpi",
      image: bpi,
    },
    {
      id: 8,
      name: "palawan",
      image: palawan,
    },
    {
      id: 9,
      name: "ceb",
      image: ceb,
    },
    {
      id: 10,
      name: "visa",
      image: visa,
    },
  ];

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 2000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="px-20 py-5 bg-sky-200">
        <h1 className="text-2xl font-semibold mb-4">Got Questions?</h1>
        <div className="flex items-center justify-between">
          <p className="font-light text-md text-gray-700">
            {" "}
            You can find frequently asked questions and answers on our customer
            service page.
          </p>
          <Link href={"/customer-service"} className="flex gap-2">
            <p className="text-blue-500">Customer service</p>
            <FaArrowTrendUp className="text-xl text-blue-500" />
          </Link>
        </div>
        <div className="payment-gateway text-2xl text-center text-black pt-5 font-semibold">
          <h3>We offer different Payment Gateway that fits you</h3>
          <div className="flex gap-5 items-center justify-center py-5">
            {paymentGateways.map((gateway) => (
              <motion.div {...buttonClick}>
                <Image
                  key={gateway.id}
                  src={gateway.image}
                  alt={gateway.name}
                  width={100}
                  height={100}
                  className="shadow-md cursor-pointer rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-slate-100 z-50">
        <div className="grid grid-cols-6 gap-10 py-5 px-4 text-sm">
          <div className="userlinks col-span-2 ">
            <Link
              href="#home"
              className="block text-md mb-2 hover:font-semibold duration-75 ease-in"
            >
              Home
            </Link>
            <Link
              href="#terms"
              className="block text-md mb-2 hover:font-semibold duration-75 ease-in"
            >
              Terms and Condition
            </Link>
            <Link
              href="#seller"
              className="block text-md mb-2 hover:font-semibold duration-75 ease-in"
            >
              Be a Seller
            </Link>
            <Link
              href="#promos"
              className="block text-md mb-2 hover:font-semibold duration-75 ease-in"
            >
              Promos and Discounts
            </Link>
            <Link
              href="#about"
              className="block text-md mb-2 hover:font-semibold duration-75 ease-in"
            >
              About Charm
            </Link>
          </div>
          <div className="subscrbe col-span-2 p-3">
            <p className="blink text-lg font-bold mb-4">
              Subscribe to our newsletters
            </p>
            <p className="mb-6 text-sm">
              The Latest deals and offers sent to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
              <input
                className="w-full p-2 mr-4 rounded-md mb-4 text-black outline outline-blue-400 outline-1 focus:outline-green-600"
                type="email"
                placeholder="Enter email.."
                value={email}
                onChange={handleEmailChange}
              />
              <button className="p-2 mb-4 rounded-md bg-gray-700 hover:bg-gray-800 text-gray-300 hover:text-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <div className="toast">
                <div className="alert-info">
                  <span className="text-base">Subscribed successfully!</span>
                </div>
              </div>
            )}
          </div>
          <div className="contact p-3 col-span-2 text-end">
            <h3 className="text-[16px] pb-2">Contact Information &#58;</h3>
            <div className="flex flex-col gap-2">
              <p>Mobile Number &#58; 099954522515</p>
              <p>email &#58; charmhaven@gmail.com.ph</p>
              <p>
                website &#58;
                <Link href={"https://charmhaven.com.ph"} className="underline">
                  https://charmhaven.com.ph
                </Link>
              </p>
              <p>address &#58; Philippines</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-violet-500 to-violet-200 flex items-center justify-between">
          <div>
            <p className="mb-4 md:mb-0 p-2">
              Copyright&copy; 2024 Charm Haven Philippines
            </p>
          </div>
          <div className="flex gap-6">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <TiSocialPinterest size={20} />
          </div>
          <div>
            <p className="text-sm text-blue-700 mr-3">
              Powered by &#58; NextJs | Typescript | Firebase
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
