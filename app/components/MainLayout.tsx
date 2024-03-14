"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Logo from "@app/assets/icons/Logo";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = React.useState<string | null>(
    null
  );
  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);

  const navigateTo = (path: string, buttonId: string | null) => {
    router.push(path);
    setSelectedButton(buttonId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between py-4 px-12 mx-[16px]">
        {/* Left side */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <button
            className={`text-white bg-[#195399] flex items-center px-2 rounded-lg mb-2 sm:mr-[30px] ${
              selectedButton === "hellome-money" ||
              hoveredButton === "hellome-money"
                ? "bg-gray-300 text-black"
                : ""
            }`}
            onClick={() => navigateTo("#", "hellome-money")}
            onMouseEnter={() => setHoveredButton("hellome-money")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span>
              <Logo />
            </span>
            <span className="font-sans">HelloMe Money</span>
          </button>
          <button
            className={`text-[#195399] py-2 px-1 rounded-lg mr-[50px] font-sans ${
              selectedButton === "personal-account" ||
              hoveredButton === "personal-account"
                ? "bg-gray-300 text-black"
                : ""
            }`}
            onClick={() => navigateTo("#", "personal-account")}
            onMouseEnter={() => setHoveredButton("personal-account")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Personal Account
          </button>
          <button
            className={`text-[#195399] py-2 px-1 rounded-lg mr-[50px] font-sans ${
              selectedButton === "business-account" ||
              hoveredButton === "business-account"
                ? "bg-gray-300 text-black"
                : ""
            }`}
            onClick={() => navigateTo("#", "business-account")}
            onMouseEnter={() => setHoveredButton("business-account")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Business Account
          </button>
          <button
            className={`text-[#195399] py-2 px-1 rounded-lg font-sans ${
              selectedButton === "company" || hoveredButton === "company"
                ? "bg-gray-300 text-black"
                : ""
            }`}
            onClick={() => navigateTo("#", "company")}
            onMouseEnter={() => setHoveredButton("company")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Company
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button
            className={`text-[#195399] rounded-[40px] px-4 py-2 font-sans ${
              selectedButton === "login" || hoveredButton === "login"
                ? "bg-[#195399] text-white"
                : ""
            }`}
            onClick={() => navigateTo("#", "login")}
            onMouseEnter={() => setHoveredButton("login")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Login
          </button>
          <button
            className={`text-[#195399] rounded-[40px] border border-[#195399] px-4 py-2 font-sans ${
              selectedButton === "signup" || hoveredButton === "signup"
                ? "bg-[#195399] text-white"
                : ""
            }`}
            onClick={() => navigateTo("#", "signup")}
            onMouseEnter={() => setHoveredButton("signup")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Signup
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-grow h-full">{children}</div>
    </div>
  );
};

export default MainLayout;
