import React from "react";
import Chefs from "@/assets/icons/chefs.svg";
import Items from "@/assets/icons/items.svg";
import SpoonFork from "@/assets/icons/spoon-fork.svg";
import Pizza from "@/assets/icons/pizza.svg";
import Image from "next/image";
import { Container } from "@mui/material";
import './style.css'

const Indicators = () => {
  return (
    <div className="!bg-white !py-[40px]">
      <Container className="!max-w-[878.35px]">
        <div className="flex justify-between ">
          <div className="group hover:cursor-pointer flex flex-col items-center">
            <Image className="group-hover:scale-105  duration-200  w-[79.71px] h-[79.92px]" src={Chefs} alt="Chefs" />
            <small className="font-[600] text-[15.94px] leading-[21.26px] block my-[15px] text-[#000]">Professional Chefs</small>
            <p className="font-[600] text-[26.57px] leading-[29.23px] text-[#000]">420</p>
          </div>
          <div className="group hover:cursor-pointer flex flex-col items-center">
            <Image className="group-hover:scale-105  duration-200 w-[79.71px] h-[79.92px]" src={Items} alt="Items" />
            <small className="font-[600] text-[15.94px] leading-[21.26px] block my-[15px] text-[#000]">Items Of Food</small>
            <p className="font-[600] text-[26.57px] leading-[29.23px] text-[#000]">320</p>
          </div>
          <div className="group hover:cursor-pointer flex flex-col items-center">
            <Image className="group-hover:scale-105  duration-200 w-[79.71px] h-[79.92px]" src={SpoonFork} alt="SpoonFork" />
            <small className="font-[600] text-[15.94px] leading-[21.26px] block my-[15px] text-[#000]">Years Of Experienced</small>
            <p className="font-[600] text-[26.57px] leading-[29.23px] text-[#000]">30+</p>
          </div>
          <div className="group hover:cursor-pointer flex flex-col items-center">
            <Image className="group-hover:scale-105  duration-200 w-[79.71px] h-[79.92px]" src={Pizza} alt="Pizza" />
            <small className="font-[600] text-[15.94px] leading-[21.26px] block my-[15px] text-[#000]">Happy Customers</small>
            <p className="font-[600] text-[26.57px] leading-[29.23px] text-[#000]">220</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Indicators;
