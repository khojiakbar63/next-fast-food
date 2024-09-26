import { Card } from "@/components";
import MenuHamburger from "@/assets/images/menu-burger.svg";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search-icon-.svg";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MenuCardList({ className }: { className?: string }) {
  return (
    <div
      className={`${
        className ? className : ""
      } relative flex items-center justify-center pt-[53px] pb-[117px] bg-white`}
    >
      <Image
        prefix={SearchIcon}
        className="absolute left-0 top-[70px]"
        src={MenuHamburger}
        alt="MenuHamburger"
      />
      <div className="bg-[#90E051] !z-10 !rounded-[71px] !pt-[40px] !px-[40px]">
        <Box sx={{ "& > :not(style)": { m: 1, mb: "50px" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              bgcolor: "#fff",
              width: "253px",
              borderRadius: "69px",
              height: "45px",
              border: "none",
              padding: "0 20px",
            }}
          >
            <Image src={SearchIcon} alt="SearchIcon" className="mb-3" />
            <TextField
              id="input-with-sx"
              label="Search"
              variant="standard"
              sx={{
                marginBottom: "6px",
                fontSize: "8px",
                "& .MuiInputLabel-root.Mui-focused": {
                  display: "none",
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              className=" !ml-[10px] !border-none !outline-none"
            />
          </Box>
        </Box>
        <div className=" grid grid-cols-6 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
            <Card className="mb-[46px] max-w-[232px]" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
