import React from "react";
import Image from "next/image";
import newsFrame from "@app/assets/icons/images/newsFrame.png";
import Newsletter from "@app/components/Newsletter";

// NewsletterPage component
const NewsletterPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-[200px] mb-[100px]">
      <Image
        src={newsFrame}
        alt="News Frame Image"
      />
      <h1 className="text-4xl mb-4 mt-4 font-sans">
        Keep up with us by signing up for our newsletter
      </h1>
      <Newsletter />
    </div>
  );
};

export default NewsletterPage;
