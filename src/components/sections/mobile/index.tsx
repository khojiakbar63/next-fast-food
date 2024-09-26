import { Container } from "@mui/material";
import React from "react";
import BurgerLeft from "@/assets/icons/mobile-top-burger.svg";
import BurgerRight from "@/assets/icons/mobile-bottom-burger.svg";
import ProMax from "@/assets/icons/12pro-max.svg";
import Pro from "@/assets/icons/12pro.svg";
import Image from "next/image";

const Mobile: React.FC = () => {
  return (
    <div className="!pt-[337px] !pb-[229px] !bg-white">
      <div className="!h-[374px] !bg-[#90E051] !pt-[50px] !relative">
        <Container>
          <div>
            <Image
              className="!absolute !left-0 !-top-[200px] hover:!animate-bounce !duration-150"
              src={BurgerLeft}
              alt="s"
            />

              <div className="!absolute !left-0 ">
                <Image className="!h-[694px] !absolute !-top-[240px] !left-[300px] !z-20" src={ProMax} alt="s" />
                <Image className="!hover:!left-[560px] !duration-200 !max-h-[482px] !relative !-top-[100px] !left-[450px] !z-10" src={Pro} alt="s" />
              </div>

            <h1 className="!ml-[500px] !max-w-[803px] !text-[45px] !leading-[77px] !font-bold !text-[#fff]">
              Now With Your Favotite Mobile Applivation In Your Pocket
            </h1>
            <Image
              className="!absolute !right-0 !top-[100px] !hover:animate-bounce !duration-200"
              src={BurgerRight}
              alt="s"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Mobile;
