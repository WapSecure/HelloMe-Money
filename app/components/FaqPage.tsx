import Accordion from "@app/components/Accordion";
import { accordionData } from "@app/Data/AccordionData";

const FaqPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[-45px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-defaultBlue text-sm font-bold">FAQ’S</h1>
        <h2 className="text-black text-4xl pt-[14px] font-bold">Got questions?</h2>{" "}
        <p className="text-black text-sm">
          Get the answers to your questions about HelloMeMoney.
        </p>
      </div>
      <span className="flex justify-center items-center">
        <Accordion cards={accordionData} />;
      </span>
    </div>
  );
};

export default FaqPage;
