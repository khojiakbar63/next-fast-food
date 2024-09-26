"use client"
import React from "react";
import { Button, Card, IconButton } from "@mui/material";
import { useState } from "react";
import F from "@/assets/icons/f.svg";
import T from "@/assets/icons/t.svg";
import I from "@/assets/icons/i.svg";
import Y from "@/assets/icons/y.svg";
import Image from "next/image";
import './style.css'

const Subscribe = () => {
    const [placeholder, setPlaceholder] = useState("Enter your name");
  return (
    <div className="mx-auto max-w-screen-2xl relative mt-[200px]  md:px-8   ">
      <Card className="card absolute z-50 left-[150px] -top-[160px] min-w-[1320px] flex  items-center rounded-[20px] bg-white pt-[80px] lg:flex-row lg:justify-between p-[80px] shadow-lg">
        <div className="mb-4 sm:mb-8 lg:mb-0">
          <h2 className=" text-center text-[32px] leading-[40px] font-bold text-[#90E051] sm:text-2xl lg:text-left lg:text-3xl">
            Subscribe <br /> To Our Newsletter
          </h2>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <form className="mb-3 flex min-w-[559px] max-w-md">
            <input
             placeholder={placeholder}
             onFocus={() => setPlaceholder("Start typing...")}
             onBlur={() => setPlaceholder("Enter your name")}
              className="bg-gray-white w-full flex-1 border border-[#90E051] p-[16px] text-[#90E051] placeholder-[#90E051] outline-none  transition duration-100 focus:placeholder:"
            />

            <Button className="inline-block bg-[#90E051] rounded-none  px-[48px] py-[16px] border border-[#90E051] text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 focus-visible:ring hover:bg-[#8fe051ce] active:bg-[#8fe051] md:text-base">
              Subscrib now
            </Button>
          </form>
        </div>

        <div className="flex gap-2">
          <IconButton className="w-[30px] h-[32px] bg-[#90E051] hover:bg-[#8fe051c2] active:bg-[#90E051] rounded-[4px] ">
            <Image src={F} alt="s" />
          </IconButton>
          <IconButton className="w-[30px] h-[32px] bg-[#90E051] hover:bg-[#8fe051c2] active:bg-[#90E051] rounded-[4px] ">
            <Image src={T} alt="s" />
          </IconButton>
          <IconButton className="w-[30px] h-[32px] bg-[#90E051] hover:bg-[#8fe051c2] active:bg-[#90E051] rounded-[4px] ">
            <Image src={I} alt="s" />
          </IconButton>
          <IconButton className="w-[30px] h-[32px] bg-[#90E051] hover:bg-[#8fe051c2] active:bg-[#90E051] rounded-[4px] ">
            <Image src={Y} alt="s" />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

export default Subscribe;
