import { Card } from "@/components";
import MenuHamburger from '@/assets/images/menu-burger.svg'
import Image from "next/image";

export default function MenuCardList({className}: {className?: string }) {
  return (
     <div className={`${className ? className : ""} relative flex items-center justify-center pt-[53px] pb-[117px] bg-white`}>
      <Image className="absolute left-0 top-[70px]"  src={MenuHamburger} alt="MenuHamburger"/>
        <div className="bg-[#90E051] z-10 rounded-[71px] pt-[40px] px-[40px]">
        <input type="text" placeholder="Search" className={`border-bottom w-[253px] rounded-[69px] bg-[#ffffffd8] text-[#6D6C6C] text-[16px] leading-[19px] font-[400] px-[30px] py-[10px] outline-none mb-[50px]`}/>
              <div className=" grid grid-cols-6 ">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
                  <Card className="mb-[46px] max-w-[232px]" key={index} />
                ))}
              </div>
        </div>
    </div>
    )

}
        