"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import React from "react";
import Container from "@mui/material/Container";
import SearchIcon from "../../../assets/icons/search.svg";
import User from "../../../assets/icons/user.svg";
import ShoppingBag from "../../../assets/icons/shopping-bag.svg";
import "./style.css";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="!h-[160px]">
      <Container className="!max-w-[1700px]">
        <div className="!flex !h-[160px] !items-center !justify-between">
        
         <Link href='#'>
                  <h1>BurgerJon</h1>
                </Link>
          <nav>
            <ul className="!flex !gap-[56px] !text-[#000]">
              <li>
                <Link
                  className={`!text-[25.57px] !font-[500] !leading-[42.22px] ${
                    pathname === "/" ? "active" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`!text-[25.57px] !font-[500] !leading-[42.22px] ${
                    pathname === "/menu" ? "active" : ""
                  }`}
                  href="/menu"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className={`!text-[25.57px] !font-[500] !leading-[42.22px] ${
                    pathname === "/about" ? "active" : ""
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`!text-[25.57px] !font-[500] !leading-[42.22px] ${
                    pathname === "/shop" ? "active" : ""
                  }`}
                  href="/shop"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
          <div className="!flex !items-center !gap-[18.62px]">
            <IconButton aria-label="search">
              <Image src={SearchIcon} alt="Picture of the Search icon" />
            </IconButton>
            <IconButton aria-label="search">
              <Image src={User} alt="Picture of the User icon" />
            </IconButton>
            <IconButton aria-label="search">
              <Image src={ShoppingBag} alt="Picture of the Shopping bag icon" />
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
