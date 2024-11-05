"use client";
import TabButton from "../ui/TabButton";
import { useState } from "react";
import Image from "next/image";
import arrowIcon from "@/public/arrowWhite.svg";

const tabButtonsMap = [
  { title: "دیفای", id: "1" },
  { title: "حریم خصوصی", id: "2" },
  { title: "متاورس", id: "3" },
  { title: "قابل استخراج", id: "4" },
  { title: "میم کوین", id: "5" },
  { title: "استیل کوین", id: "6" },
  { title: "توکن", id: "7" },
  { title: "ICO", id: "8" },
];

const Category = () => {
  const [categoryAtive, setCategoryActive] = useState<string>("دیفای");
  const [accordianIsOpen, setAccordianIsOpen] = useState<boolean>(false);
  const accordTriggerHandler = () => {
    setAccordianIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="hidden min-[420px]:flex mt-[52px] lg:mt-[83px] justify-center custom-tablet:justify-normal flex-wrap custom-tablet:flex-nowrap w-full flex-row-reverse gap-4 mb-[20px] custom-tablet:mb-[37px]">
        {tabButtonsMap.map((item) => {
          return <TabButton key={item.id} id={item.id} title={item.title} />;
        })}
      </div>
      <div className="block min-[420px]:hidden w-full mt-[52px] lg:mt-[83px] mb-[12px]">
        <button
          onClick={accordTriggerHandler}
          className={` w-full bg-primary-color text-white ${
            accordianIsOpen ? "rounded-b-0 rounded-t-[8px]" : "rounded-[8px]"
          } h-[47px] flex flex-row-reverse justify-between items-center`}
        >
          <span className="mr-8">{categoryAtive}</span>
          <Image src={arrowIcon} alt="Arrow down" className="text-white ml-5" />
        </button>
        <div
        id="accordian category"
          className={`block min-[420px]:hidden overflow-hidden transition-all duration-500 ${accordianIsOpen ? "h-[329px]" : "h-0"}`}
        >
          {tabButtonsMap.map((item) => {
            if (item.title !== categoryAtive) {
              return (
                <button
                  className="w-full bg-table-body-row-1 h-[47px]"
                  key={item.id}
                  onClick={() => {
                    setCategoryActive(item.title);
                    setAccordianIsOpen(false);
                  }}
                >
                  {item.title}
                </button>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
