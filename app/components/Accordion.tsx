"use client";

import React, { useState } from "react";
import PlusIcon from "@app/assets/icons/PlusIcon";

interface AccordionCardProps {
  question: string;
  answer: string;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-1/2" : "w-1/2"
      } bg-white rounded-2xl shadow-md pt-[49px] pb-[54px] px-[36px] mb-8 mr-4 flex-shrink-0 ${
        isExpanded ? "max-w-[639.954px]" : "max-w-[639.954px]"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="text-xl font-semibold max-w-[455px] font-sans">{question}</h3>
        {isExpanded ? (
          <div className="flex items-center justify-center w-8 h-8 bg-[#4A3AFF] text-white rounded-md">
            <span className="text-2xl font-bold font-sans">-</span>
          </div>
        ) : (
          <PlusIcon />
        )}
      </div>
      {isExpanded && <p className="mt-2">{answer}</p>}
    </div>
  );
};

interface AccordionProps {
  cards: AccordionCardProps[];
}

const Accordion: React.FC<AccordionProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <AccordionCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Accordion;
