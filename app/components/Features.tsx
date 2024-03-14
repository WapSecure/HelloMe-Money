import React from "react";
import Image from "next/image";
import FeaturesImage from "@app/assets/icons/images/featuresImage.png";
import CircleWavyCheck from "@app/assets/icons/CircleWavyCheck";
import FeatureBanner from "@app/assets/icons/images/FeatureBanner.png";

const Features: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/2 p-4">
          <Image
            src={FeaturesImage}
            alt="Features Image"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>

        <div className="w-1/2 p-4 flex flex-col gap-[24px]">
          <h1 className="text-[48px] text-defaultBlue font-bold">
            Seamless Payment
          </h1>
          <p className="text-neutral-600 flex flex-row pl-8">
            <span>
              <CircleWavyCheck />
            </span>
            Using HelloMe Money account, you can send local & international
            payments to friends & family at any time.
          </p>
          <p className="text-neutral-600 flex flex-row items-center pl-8">
            {" "}
            <span>
              <CircleWavyCheck />
            </span>
            See your spending and transactions in real-time.
          </p>
          <p className="text-neutral-600 flex flex-row items-center pl-8">
            <span>
              <CircleWavyCheck />
            </span>
            Download your account statement in CSV or PDF.
          </p>
          <p className="text-neutral-600 flex flex-row items-center pl-8">
            <span>
              <CircleWavyCheck />
            </span>
            Download the app now.
          </p>
        </div>
      </div>

      <div className="w-full p-4 flex justify-center">
        <Image
          src={FeatureBanner}
          alt="Feature banner"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </div>
  );
};

export default Features;
