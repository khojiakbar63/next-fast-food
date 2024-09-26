"use client"
import React, {useState} from "react";
import Image from "next/image";
import { Container } from "@mui/material";
import MenuBurger from "@/assets/images/menu-burger.svg";
import { CardList } from "@/components";
import "./style.css";

const Menu:React.FC = () => {
  const [cards, setCards] = useState('cards')
  const [btn, setBtn] = useState('See All')
  const [show, SetShow] = useState('hidden')
  return (
    <div className="bg-white pt-[92px] pb-[90px] flex items-center justify-between gap-[200px]">
      <Image className="w-[700px] max-h-[720px]" src={MenuBurger} alt="Menu" />
      <Container className="relative">
        <div className="rounded-[69px] flex gap-6 flex-wrap max-w-[596.24px] bg-[#90E051] px-[46px] pt-[60px] pb-[2px]">
          <input type="text" placeholder="Search" className={`${show} border-bottom w-[253px] rounded-[69px] bg-[#ffffffd8] text-[#6D6C6C] text-[16px] leading-[19px] font-[400] px-[30px] py-[10px] outline-none`}/>
          <CardList className={cards}/>
          <button onClick={()=>{
            setCards(cards === '' ? 'cards' : '')
            setBtn(btn === 'See All' ? 'Hide All' : 'See All')
            SetShow(show === 'block' ? 'hidden' : 'block')
            }} className={`${show === 'block' ?  'border-2 border-[#90E051]' : ''} absolute bottom-[36px] right-[43%] z-40 bg-[#fff] hover:bg-[#ffffffd8] text-[#90E051] text-[22px] leading-[26px] font-bold py-[17px] px-[73px] rounded-[17.5px] animate-bounce`}>{btn}</button>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
