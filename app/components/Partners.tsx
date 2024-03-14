import AirBnB from "@app/assets/icons/AirBnB";
import BodyFrame from "@app/assets/icons/BodyFrame";
import Cisco from "@app/assets/icons/Cisco";
import CNN from "@app/assets/icons/Cnn";
import Ebay from "@app/assets/icons/Ebay";
import Google from "@app/assets/icons/Google";
import HandFrame from "@app/assets/icons/HandFrame";
import Uber from "@app/assets/icons/Uber";
import React from "react";

const Partners: React.FC = () => {
  return (
    <div className="bg-black p-8">
      <div className="flex flex-col gap-[32px] text-white mb-4">
        <h1 className="text-sm text-center font-sans">
          Given the enormous support from top global leaders
        </h1>
        <div className="flex flex-row gap-[88px] justify-center">
          <span>
            <Ebay />
          </span>
          <span>
            <CNN />
          </span>
          <span>
            <Google />
          </span>
          <span>
            <Cisco />
          </span>
          <span>
            <AirBnB />
          </span>
          <span>
            <Uber />
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between pb-[37px] space-x-16">
        <div className="w-1/2 flex flex-col gap-[146px] pt-[54px] pl-[104px]">
          <span>
            <HandFrame />
          </span>
          <div className="text-white">
            <p className="text-[42px] font-semibold w-[647px] font-sans">
              Here to there, with{" "}
              <span className="text-[#3C15FC]">rock solid</span> encryption.
            </p>
            <p className="text-sm w-[509px] font-sans">
              Transfer funds directly from the customers' account to merchants'
              account with the help of automated system. Only one-time setup
              required.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-[140px] pt-[178px] pr-[104px]">
          <div className="text-white">
            <p className="text-[42px] font-semibold w-[647px] font-sans">
              There to here, within{" "}
              <span className="text-[#3C15FC]">a snap</span> just a single tap.
            </p>
            <p className="text-sm w-[509px] font-sans">
              Transfer funds directly from the customers' account to merchants'
              account with the help of automated system. Only one-time setup
              required.
            </p>
          </div>
          <span>
            <BodyFrame />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Partners;
