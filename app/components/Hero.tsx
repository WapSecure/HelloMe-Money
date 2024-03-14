"use client";

import React, { useState } from "react";
import SendMoney from "./SendMoney";
import Check from "@app/assets/icons/Check";

import Image from "next/image";
import Speed from "@app/assets/icons/images/Speed.png";
import Euro from "@app/assets/icons/images/Euro.png";
import Security from "@app/assets/icons/images/Security.png";
import Support from "@app/assets/icons/images/Support.png";

const HeroPage: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const gradientStyle = {
    backgroundImage: "linear-gradient(to bottom, #195399 35%, white 65%)",
  };

  return (
    <div className="relative flex flex-col" style={gradientStyle}>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between w-full">
        {/* First Column */}
        <div className="flex flex-col lg:max-w-[calc(50%-70px)] pt-[203px] pl-[60px]">
          <h1 className="text-6xl text-white mb-4 w-full font-sans">
            Get <span className="font-bold">Multicurrency</span> Account
          </h1>
          <p className="flex flex-row gap-4 text-defaultBlue mb-4 font-sans">
            <span className="bg-white rounded-xl text-sm p-2">
              Get Euro/GBP IBAN Account in your name.
            </span>{" "}
            <span className="bg-white rounded-xl text-sm p-2">
              No Credit Check.
            </span>
          </p>
          <div className="flex flex-col mb-4">
            <p className="flex flex-row items-center text-defaultBlue text-sm font-sans">
              <span>
                <Check />
              </span>
              <span>
                Send Money Locally & Internationally With Your HelloMe Money
                Account
              </span>
            </p>
            <div className="flex flex-row font-sans">
              <p className="flex flex-row items-center text-defaultBlue text-sm font-sans">
                <span>
                  <Check />
                </span>
                <span>Sign Up In Minute</span>
              </p>{" "}
              <p className="flex flex-row items-center text-defaultBlue text-sm font-sans">
                <span>
                  <Check />
                </span>
                <span>24/7 Customer Support</span>
              </p>{" "}
              <p className="flex flex-row items-center text-defaultBlue text-sm font-sans">
                <span>
                  <Check />
                </span>
                <span>Free Credit Score Builder</span>
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-2.5 w-full">
            <button
              className={`${
                selectedButton === "personal" || hoveredButton === "personal"
                  ? "bg-defaultBlue text-white"
                  : "bg-white border border-defaultBlue text-defaultBlue"
              } p-3 rounded-2xl lg:w-[273px]`}
              onClick={() => setSelectedButton("personal")}
              onMouseEnter={() => setHoveredButton("personal")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Personal Account
            </button>
            <button
              className={`${
                selectedButton === "business" || hoveredButton === "business"
                  ? "bg-defaultBlue text-white"
                  : "bg-white border border-defaultBlue text-defaultBlue"
              } p-4 rounded-2xl w-full lg:w-[273px]`}
              onClick={() => setSelectedButton("business")}
              onMouseEnter={() => setHoveredButton("business")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Business Account
            </button>
          </div>
        </div>

        {/* Second Column with SendMoney component */}
        <div className="lg:pr-[60px] pt-14 max-w-[calc(50%-40px)]">
          <SendMoney />
        </div>
      </div>
      {/* Footer Section */}
      <div className="hidden lg:flex flex-col items-center justify-center text-black pb-6">
        <div className="mb-4 flex flex-row items-end w-full gap-40">
          <span>
            <Image src={Euro} alt="Euro Icon" />
          </span>
          <div className="flex flex-col justify-center items-center">
            {" "}
            <h1 className="text-sm font-bold pb-4 font-sans">
              The complete financial stack for your business
            </h1>
            <p className="text-sm font-sans">
              Top-end financial tools to help your business with its financial
              operations and cash flow.
            </p>
            <p className="text-sm font-sans">
              We help companies of all types work better, save time and money
              with a simply better digital banking service that works..
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center gap-3">
            <span>
              <Image src={Speed} alt="Speed Icon" />
            </span>
            <div className="flex flex-col text-xs text-black w-[309px]">
              <p className="font-bold">Speed</p>
              <p className="">
                Open a personal/business-grade current account from anywhere in
                10 minutes
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <span>
              <Image src={Security} alt="Security Icon" />
            </span>
            <div className="flex flex-col text-xs text-black w-[309px] ">
              <p className="font-bold">Security</p>
              <p>
                Rely on bank-grade security with all your money fully insured
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <span>
              <Image src={Support} alt="Support Icon" />
            </span>
            <div className="flex flex-col text-black text-xs w-[309px]">
              <p className="font-bold font-sans">Support</p>
              <p className="font-sans">
                Get access to a trusted support team and resources whenever you
                want
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
