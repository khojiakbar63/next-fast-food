import React from 'react';
import Image from "next/image";
import { IconButton } from "@mui/material";
import Menu_1 from "@/assets/icons/menu-1.svg";
import Star from "@/assets/icons/star.svg";
import Plus from "@/assets/icons/plus.svg";

const Card = ({className}: {className?: string}) => {
    return (
        <div className={`${className} group rounded-[23.39px] w-[232px] h-[263px] bg-white px-[25.19px] pt-24 relative mb-[60px] mr-[24px]`}>
            <Image
              className="duration-150 group-hover:translate-y-5 w-[147px] h-[118px] absolute -top-10 left-11"
              src={Menu_1}
              alt="Menu"
            />
            <small className="font-bold text-[16.79px] leading-[19.89px] block mb-[10px] text-[#000]">
              Чикен бургер
            </small>
            <p className="w-[176.12px] font-[500] text-[14.2px] leading-[16.83px] mb-[15.15px] text-[#000]">
              200 гр. котлеты + сырный салат + лук + томаты
            </p>
            <div className="flex items-center gap-[4.2px] mb-[12.39px]">
              <Image src={Star} alt="Star" />
              <p className="font-[400] text-[15.6px] text-[#000] leading-[18.61px]">
                5.3
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 mt-2">
              <span className="font-bold text-[19.6px] leading-[23.38px] text-[#90E051]">
                $ 22.
                <span className="font-[400] text-[15.4px] leading-[18.37px]">
                  53
                </span>
              </span>
              <IconButton
                aria-label="fingerprint"
                className="p-[9.8px] bg-[#90E051] hover:bg-[#98e451a1] active:bg-[#8aeb40] shadow-xl"
              >
                <Image src={Plus} alt="Plus" />
              </IconButton>
            </div>
          </div>
    );
};

export default Card;