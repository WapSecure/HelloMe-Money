import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-defaultBlue text-white py-12">
      <div className="container w-full mx-auto flex flex-col md:flex-col">
        {/* First Child Div */}
        <div className="w-full md:w-full flex flex-col md:flex-col justify-between">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-8 font-sans">
                Who we are
              </h4>
              <ul className="flex flex-col gap-2 font-sans">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Code of Conduct</a>
                </li>
                <li>
                  <a href="#">Partner with Us</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-8 font-sans">Legal</h4>
              <ul className="flex flex-col gap-2 font-sans">
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-8">Contact Us</h4>
              <p className="flex flex-col gap-2 max-w-[247px] font-sans">
                <span>
                  <span className="font-extralight text-gray-300">
                    United Kingdom Office:
                  </span>{" "}
                  <br /> 2nd Floor, 30 Churchill Pl, London E14 5EU
                  United Kingdom
                </span>
                <span>
                  <span className="font-extralight text-gray-300">
                    Canada Office:
                  </span>{" "}
                  <br /> 44322 YALE RD UNIT 3B #203 CHILLIWACK,
                  BC, CANADA V2R4H1
                </span>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full text-center pt-[54px] font-sans">
            <p className="text-sm">
              Copyright © 2024 HelloMe Money. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Second Child Div */}
        <div className="w-full md:w-full pt-[54px] font-sans">
          <p>
            HelloMe Money is a trading name of HelloMe Limited, a company
            registered in England and Wales under registration no: 12541573 with
            a registered office at 30 Churchill Place, Canary Wharf, London E14
            5RE. We oprate in accordance with the 'Data Protection Act 1998'
            with ICO Reference number:Zb247046.  {" "}
          </p>
           
          <p>
            HelloMe Canada Corp, a subsidiary of HelloMe Limited, is registered
            in British Columbia, Canada, with its registered office located at
            44322 YALE RD UNIT 3B #203 Chilliwack BC, CA V2R4H1. It is
            authorized by Fintrac under the MSB number M24732796 to provide
            financial services.
          </p>
           
          <p>
            {" "}
            Cashpot Limited UK is a financial technology and remittance company
            registered in the United Kingdom under registration number 7302407
            as an Authorised Payment Institution with the registered office at
            Unit 51, Skylines Business Village, London. E14 9TS. The Company is
            regulated by the Financial Conduct Authority (FCA) and Her Majesty’s
            Revenue & Customs (HMRC). Cashpot facilitates international payments
            and remittance services for customers on behalf of HelloMe Money.{" "}
          </p>
           
          <p>
            Moorwand as e-money license holder of Moorwand Ltd is a company
            incorporated and registered in England & Wales under registration
            No. 8491211 with a registered office at Irongate House, 30 Dukes
            Place, London, EC3A 7LP, United Kingdom. Moorwand Ltd is authorised
            by the Financial Conduct Authority under the Electronic Money
            Regulations 2011 (Register ref: 900709) to issue electronic money
            and payment instruments. The HelloMe Money GBP account and EUR SEPA
            IBAN are issued by Moorwand Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
