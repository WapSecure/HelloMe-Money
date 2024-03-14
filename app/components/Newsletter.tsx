import React from "react";
import Facebook from "@app/assets/icons/Facebook";
import X from "@app/assets/icons/X";
import Insta from "@app/assets/icons/Insta";
import Linkedin from "@app/assets/icons/Linkedin";

const Newsletter: React.FC = () => {
  return (
    <div className="flex items-center md:flex-row md:justify-between">
      {/* Newsletter Input */}
      <div className="relative flex items-center w-full max-w-md mb-6 md:mb-0">
        <input
          type="email"
          placeholder="Email address"
          className="py-3 px-4 w-full text-black border border-gray-300 rounded-full focus:outline-none"
        />
        <button className="absolute right-0 px-4 py-2 bg-defaultBlue m-1 text-white rounded-full">
          Subscribe
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-8 md:gap-8">
        <span className="cursor-pointer">
          <Facebook />
        </span>
        <span className="cursor-pointer">
          <X />
        </span>
        <span className="cursor-pointer">
          <Insta />
        </span>
        <span className="cursor-pointer">
          <Linkedin />
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
