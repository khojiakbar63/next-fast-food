import React from "react";
import { Container, Button } from "@mui/material";
import HeroBurger from "../../../assets/icons/hero-burger.svg";
import Image from "next/image";
import './style.css'

const Hero = () => {
  return (
    <div className="bg-white">
      <Container className="max-w-[1700px] pt-[60px] pb-[46px]">
        <div className="flex items-center gap-[173px]">
          <div className="w-[704px]">
            <h2 className="font-bold text-[116.32px] leading-[119.03px] text-[#000] mb-[20px]">
              Tasty Food <span className="text-[#90E051]">Collections</span>
            </h2>
            <p className="font-[500] text-[22.33px] leading-[33.5px] text-[#000] mb-[62px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <div className="flex gap-2">
              <Button className="!bg-[#90E051] !px-[72px] !py-[21px] !rounded-[20px] !text-white !font-[500] !text-[29.4px] !leading-[48.54px]">
                See All
              </Button>
              <Button className="!px-[72px] !py-[21px] !rounded-[20px] !text-[#90E051] !leading-[48.54px]">
                Menu
              </Button>
            </div>
          </div>

          <div className="w-[820px]">
            <div className="bg-[#90E051] w-[673px] h-[673px] rounded-[50%] relative group">
              <div className="group-hover:translate-y-2 duration-200 z-10 bg-[#90E051] w-[151px] h-[151px] rounded-[50%] absolute -top-[60px] -left-[60px] flex flex-col items-center justify-center">
                <small className="font-bold text-[34.65px] text-[#fff] leading-[41.06px]">
                  $22.53
                </small>
              </div>
              <Image
                src={HeroBurger}
                alt="Picture of the Shopping bag icon"
                className="absolute top-0 -left-[124px] max-w-[765px]"
              />
            </div>
          </div>
        </div>
        .
      </Container>
    </div>
  );
};

export default Hero;
