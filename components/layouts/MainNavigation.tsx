"use client";
import Image from "next/image";
import companyLogo from "@/public/company-logo.svg";
import phoneLogo from "@/public/phone-icon.svg";
import profilePic from "@/public/profile.png";
import arrowIcon from "@/public/arrow.svg";
import hamburger from "@/public/hamburger.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const hamburgerMenuMap = [
  {
    title: "صفحه ی اصلی",
    url: "/",
  },
  {
    title: "قیمت رمزارز ها",
    url: "/crypto-price-list",
  },
  {
    title: "مقالات",
    url: "/",
  },
  {
    title: "تماس با ما",
    url: "/",
  },
  {
    title: "سایر",
    url: "/",
  },
];

const MainNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { push } = useRouter();
  return (
    <header className="relative w-full bg-nav-background">
      <nav className="w-full h-[64px] custom-mobile:h-[92px]  custom-tablet:h-[104px] flex flex-row-reverse items-center justify-between min-[1280px]:pl-[10%] min-[1024px]:pl-[5%] min-[1280px]:pr-[10%] pl-[2%] min-[1024px]:pr-[5%] pr-[2%] text-nowrap">
        <div className="w-[50%] flex flex-row-reverse items-center gap-[5%] custom-tablet:flex-grow max-[834px]:gap-3">
          <div className=" flex justify-center items-center rounded-[7px] custom-tablet:hidden border-[1.5px] border-black w-[24px] h-[24px]">
            <Image
              onClick={() => {
                setMenuIsOpen((prevState) => !prevState);
              }}
              src={hamburger}
              alt="trigger icon"
            />
            <div
              className={`absolute w-full top-[64px] custom-mobile:top-[92px] left-0 flex flex-col z-10 bg-slate-100 opacity-95 items-center text-center transition-all duration-500 overflow-hidden ${
                menuIsOpen ? "h-[240px]" : "h-0"
              }`}
            >
              {hamburgerMenuMap.map((item) => {
                return (
                  <Link
                    className={`w-full py-3 transition-colors duration-500 hover:bg-primary-color hover:text-white ${
                      pathname === item.url
                        ? "text-primary-color"
                        : "text-black"
                    }`}
                    href={item.url}
                    key={item.title}
                    onClick={() => {
                      setMenuIsOpen(false)
                    }}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <Image
            src={companyLogo}
            alt="compony-logo"
            className="custom-tablet:h-[53px] custom-tablet:w-[109px] w-[57px] h-[28px]"
            onClick={() => push("/")}
          />
          <ul className="hidden custom-tablet:flex-grow custom-tablet:flex custom-tablet:flex-row-reverse xl:gap-[10%] lg:gap-[5%] md:gap-[5%]">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-primary-color" : "text-black"
                }`}
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/crypto-price-list"
                className={`${
                  pathname === "/crypto-price-list"
                    ? "text-primary-color"
                    : "text-black"
                }`}
              >
                قیمت رمزارزها
              </Link>
            </li>
            <li>مقالات</li>
            <li>تماس با ما</li>
            <li className="hidden min-[1280px]:block">سایر</li>
          </ul>
        </div>
        <div className="w-[50%] custom-tablet:w-[40%] xl:w-[30%] items-center flex justify-between custom-tablet:gap-[2%]">
          <div className="flex flex-row-reverse max-[834px]:justify-end items-center flex-grow gap-1 lg:gap-[5%] ">
            <figure className="min-w-[26px] max-h-[30px] w-[26px] h-[26px] rounded-[50%] overflow-hidden">
              <Image src={profilePic} alt="profile picture" />
            </figure>
            <p>علی اسماعیلی</p>
            <Image src={arrowIcon} alt="arrow icon" />
          </div>
          <div className="hidden custom-tablet:flex items-center custom-tablet:flex-row-reverse  custom-tablet:flex-grow gap-1 lg:gap-[5%]">
            <Image
              src={phoneLogo}
              alt="phone icon"
              className="max-[1024px]:w-[16px] max-[1024px]:h-[16px]"
            />
            <p>021-91008590</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
