import React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import RightArrow from "../../../assets/icons/right-arrow.svg";
import Location from "../../../assets/icons/location.svg";
import Phone from "../../../assets/icons/phone.svg";
import Mail from "../../../assets/icons/mail.svg";
import Clock from "../../../assets/icons/clock.svg";
import "./style.css";

const Header: React.FC = () => {
  return (
    <footer className="pt-[141px] pb-[197px]">
      <Container className="max-w-[1328px]">
        <div className="footer-content">
          <div className="w-[300px]"></div>

          <div className="w-[299px]">
            <h4 className="text-[#fff] text-[35px] font-bold leading-[49px] mb-[13px]">
              Explore
            </h4>
            <div className="flex gap-[58px]">
              <ul className="flex flex-col gap-[20px]">
                <li className="flex gap-[5px] items-center">
                  <Image src={RightArrow} alt="Picture of the Search icon" />
                  <a
                    className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="flex gap-[5px] items-center">
                  <Image src={RightArrow} alt="Picture of the Search icon" />
                  <a
                    className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                    href="#"
                  >
                    About us
                  </a>
                </li>
                <li className="flex gap-[5px] items-center">
                  <Image src={RightArrow} alt="Picture of the Search icon" />
                  <a
                    className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                    href="#"
                  >
                    Contact us
                  </a>
                </li>
              </ul>

              <ul className="flex flex-col gap-[20px]">
                <li className="flex gap-[5px] items-center">
                  <Image src={RightArrow} alt="Picture of the Search icon" />
                  <a
                    className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="flex gap-[5px] items-center">
                  <Image src={RightArrow} alt="Picture of the Search icon" />
                  <a
                    className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li className="flex gap-[5px] items-center">
                  <Image src={RightArrow} alt="Picture of the Search icon" />
                  <a
                    className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                    href="#"
                  >
                    Our Menu
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[308px]">
            <h4 className="text-[#fff] text-[35px] font-bold leading-[49px] mb-[13px]">
              Contact us
            </h4>
            <ul className="flex flex-col gap-[20px]">
              <li className="flex gap-[5px] items-center">
                <Image src={Location} alt="Picture of the Search icon" />
                <a
                  className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                  href="#"
                >
                  3rd Floor, Office 45
                </a>
              </li>
              <li className="flex gap-[5px] items-center">
                <Image src={Phone} alt="Picture of the Search icon" />
                <a
                  className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                  href="#"
                >
                  00965 - 96659986
                </a>
              </li>
              <li className="flex gap-[5px] items-center">
                <Image src={Mail} alt="Picture of the Search icon" />
                <a
                  className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                  href="#"
                >
                  M.Alyaqout@4house.Co
                </a>
              </li>
              <li className="flex gap-[5px] items-center">
                <Image src={Clock} alt="Picture of the Search icon" />
                <a
                  className="text-[#fff] text-[18px] font-normal leading-[26px] border-transparent border-b-2 hover:border-[#fff] active:border-green-200"
                  href="#"
                >
                  Sun - Sat / 10:00 AM - 8:00 PM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Header;
