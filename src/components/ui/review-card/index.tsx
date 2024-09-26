import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Customer from "../../../assets/icons/customer.svg";
import ArrowBackIcon from "@/assets/icons/ArrowLeft.svg";
import ArrowForwardIcon from "@/assets/icons/ArrowRight.svg";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <Card className="shadow-none bg-white" sx={{ minWidth: 675 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className="font-bold text-[60px] leading-[70px] text-[#333333] w-[529px]"
            component="div"
          >
            Customer Review
          </Typography>
          <Typography
            className="font-[400] text-[16px] leading-[30px] text-[#828282] mb-[60px]"
            variant="body2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </Typography>
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-[22px]">
              <Image className="w-[90px] h-[90px]" src={Customer} alt="s" />

              <div className="-mt-[16px]">
                <h3 className="font-[700] text-[22px] leading-[32px] text-[#90E051]">
                  Abdur Rahman
                </h3>
                <small className="font-[400] text-[18px] leading-[28px] text-[#828282]">
                  Customer
                </small>
              </div>
            </div>
            <div className="flex gap-[6px] pr-8 hover:gap-[7px] duration-150">
              <Image src={ArrowBackIcon} alt="s"/>
              <Image src={ArrowForwardIcon} alt="s"/>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
