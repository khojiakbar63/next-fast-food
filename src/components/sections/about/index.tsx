import React from "react";
import MiniBurger from "@/assets/icons/about-burger.svg";
import KitchenBurger from "@/assets/icons/about-kitchen-burger.svg";
import Kitchen from "@/assets/icons/about-kitchen.svg";
import { Card, Container } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white h-[740px] max-h-[940px] ">
      <Container>
        <div className="flex">
          <div className="w-[50%] relative"></div>

          <div className="w-[50%] relative group">
            <Image
              className="w-[166px] h-[122px] absolute top-[190px] right-[890px] z-50"
              src={MiniBurger}
              alt="mini-burger"
            />
            <Card className=" absolute -bottom-[80px] -left-[400px] shadow-lg rounded-[12px] pt-[25px] px-[28px] pb-[40px] w-[482px] max-w-[662px] z-40">
              <h3 className="font-[700] text-[38px] leading-[58px] text-[#000000]">
                About Us
              </h3>
              <p className="font-[700] text-[20px] leading-[32px] text-[#828282]">
                Lorem Ipsum is not simply random text. It <br /> has roots in a
                piece of classical Latin <br /> literature from 45 BC, making it
                over 2000 <br />
                years old.
              </p>
            </Card>
            <Image className="group-hover:scale-110 transition-all duration-500" src={Kitchen} alt="kitchen" />

            <div className="relative">
              <div className="absolute -right-[110px] -top-[90px] bg-[#90E051] w-[211px] h-[211px] rounded-full"></div>
              <Image
                className="absolute -right-[110px] -top-[90px]"
                src={KitchenBurger}
                alt="kitchen-burger"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
