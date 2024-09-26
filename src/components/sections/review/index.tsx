import Image from "next/image";
import React from "react";
import ReviewImg from "@/assets/images/review.png";
import GreenStar from "@/assets/icons/green-star.svg";
import { Container } from "@mui/material";
import { ReviewCard } from "@/components";
import { HoverPopover } from "@/components";

const Review: React.FC = () => {
  return (
    <div className="!bg-white !pt-[108px] !pb-[172px]">
      <Container className="!max-w-[1584px]">
        <div className="!flex !items-center !gap-[186px]">
          <div className="!max-w-[575px]">
            <ReviewCard />
          </div>
          <div>
            <HoverPopover
              content={
                <div className="w-[546px] max-h-[268px] pt-[40px] pb-[20px] px-[37.79px]">
                  <div className="flex items-center justify-between mb-[9px]">
                    <h4 className="font-[700] text-[25px] leading-[35px] text-[#333333]">
                      Order now
                    </h4>
                    <p className="font-[700] text-[20px] leading-[30px] text-[#4F4F4F]">
                      10.00$
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <Image key={index} src={GreenStar} alt="Star" />
                    ))}
                  </div>
                  <p className="font-[400] text-[20px] leading-[30px] text-[#828282] mt-[10px]">
                    Lorem ipsum dolor sit amet, consectetur elit. Quisque diam
                    pellentesque bibendum fringilla bibendum. Urna, elit augue
                    urna,
                  </p>
                </div>
              }
            >
              <Image className="w-[695px]" src={ReviewImg} alt="Review" />
            </HoverPopover>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
