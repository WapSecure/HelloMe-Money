"use client";
import ArrowDown from "@app/assets/icons/ArrowDown";
import NairaCurrency from "@app/assets/icons/NairaCurrency";
import PoundCurrency from "@app/assets/icons/PoundCurrency";
import Turbo from "@app/assets/icons/Turbo";
import React, { useState } from "react";

const SendMoney: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters from the input
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    setAmount(numericValue);
  };

  return (
    <div className="container p-4 bg-gray-300 rounded-2xl shadow-md w-[530px] max-h-[791px] mx-auto">
      {/* Form */}
      <form className="mx-auto p-4 bg-gray-200 rounded-md shadow-md font-sans">
        {/* Title */}
        <h1 className="text-xl font-semibold text-center text-black mb-4">
          Send Money
        </h1>

        {/* Subtitle */}
        <p className="text-xs font-medium text-black mb-4 font-sans">
          How much do you want to send?
        </p>
        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-[#979797] pb-1">
            Amount
          </label>
          <div className="flex items-center w-full">
            <span className="text-black bg-gray-200 rounded-bl-lg border border-gray-400 rounded-tl-lg p-3">
              £
            </span>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="border border-gray-400 p-3 w-full text-gray-400"
            />
            {/* Country Dropdown (Assuming you have an appropriate component for this) */}
            <div className="flex flex-row gap-1 bg-gray-200 rounded-tr-lg border border-gray-400 rounded-br-lg p-3">
              <span>
                <PoundCurrency />
              </span>
              <span>
                <ArrowDown />
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Turbo />
        </div>

        {/* Recipients Input */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-[#979797] pb-1 font-sans">
            Recipient's Receives
          </label>
          <div className="flex items-center">
            <span className="text-black border border-gray-400 bg-gray-200 rounded-tl-lg rounded-bl-lg p-3 ">
              ₦
            </span>
            <input
              type="number"
              className="border border-gray-400 p-3 w-full text-gray-400"
            />
            {/* Country Dropdown (Assuming you have an appropriate component for this) */}
            <div className="flex flex-row gap-1 bg-gray-200 border border-gray-400 rounded-tr-lg rounded-br-lg p-3">
              <span>
                <NairaCurrency />
              </span>
              <span>
                <ArrowDown />
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Option Dropdown */}
        <div className="mb-4 relative">
          <label className="block text-xs font-medium text-black pb-1 font-sans">
            Delivery Option
          </label>
          {/* Assuming you have a custom dropdown component */}
          <div className="relative">
            <select className="border border-gray-300 rounded-lg p-2 w-full text-gray-400 p-3 appearance-none shadow-md">
              <option
                value="bank"
                className="text-[#979797] text-xs font-medium"
              >
                Bank
              </option>
              {/* Add other options as needed */}
            </select>
            <span className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pointer-events-none">
              <ArrowDown />
            </span>
          </div>
        </div>

        {/* Rate and Payable Amount */}
        <div className="flex flex-col mb-4 mt-4 bg-gray-300 p-3 border border-dashed border-gray-500 rounded-lg ">
          <div className="flex justify-between mb-2">
            <span className="text-black text-xs">Our Rate:</span>
            <span className="text-defaultBlue text-xs">
              1.00 GBP = 1420.00 NGN
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-black text-xs">Payable Amount:</span>
            <span className="text-defaultBlue text-xs">{amount} GBP</span>
          </div>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className={`${
            selectedButton === "sendMoney" || hoveredButton === "sendMoney"
              ? "bg-defaultBlue text-white mt-6"
              : "bg-white border border-defaultBlue text-defaultBlue"
          } rounded-2xl p-4 mt-6 w-full text-center`}
          onClick={() => setSelectedButton("sendMoney")}
          onMouseEnter={() => setHoveredButton("sendMoney")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMoney;
