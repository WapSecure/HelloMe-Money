import React from "react";
import Image from "next/image";
import Testimonial from "@app/assets/icons/images/Testimonial.png";

const Testimonies: React.FC = () => {
  return (
    <div className="flex flex-col w-full p-4">
      {/* Testimonies Heading Div (100%) */}
      <div className="w-full mb-4">
        <h2 className="text-sm font-bold text-defaultBlue text-center font-sans">
          Testimonials
        </h2>
      </div>

      {/* Testimonies Sub-heading Div (100%) */}
      <div className="flex justify-center mb-[23px]">
        <p className="text-[40px] w-[600px] font-semibold text-center leading-normal font-sans">
          Still on the fence, here’s what <span className="text-defaultBlue">our users</span> are saying
        </p>
      </div>

      {/* Testimonies Content Area Div (100%) */}
      <div className="w-full flex justify-center">
        <Image
          src={Testimonial}
          alt="Testimonial Image"
        />
      </div>
    </div>
  );
};

export default Testimonies;
