"use client";

import { useState } from "react";
import arrowDown from "@/public/arrow.svg";
import arrowUp from "@/public/arrowUp.svg";
import Image from "next/image";

const accordianMap = [
  {
    qTitle: "رمز ارز چیست؟",
    id: Math.random().toString(),
    content: (
      <>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </>
    ),
  },
  {
    qTitle: "آیا می توانم با کارت بانکی بیت کوین بخرم؟",
    id: Math.random().toString(),
    content: (
      <>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </>
    ),
  },
  {
    qTitle: "چرا باید از والت استفاده کنم؟",
    id: Math.random().toString(),
    content: (
      <>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </>
    ),
  },
];

const Questions = () => {
  const [accordState, setAccordState] = useState<{
    id: string;
    isOpen: boolean;
  }>({ id: "", isOpen: false });
  return (
    <div className="w-full flex flex-col items-end text-right gap-y-[15px]">
      <h2 className="text-[20px] custom-tablet:text-[30px] font-extrabold">سوالات متداول</h2>
      {accordianMap.map((item) => {
        return (
          <div
            className="w-full border-[1px] border-accordian-border-color rounded-[15px] bg-white pt-[30px] pb-[30px] pr-[20px] custom-tablet:pr-[40px] pl-[20px] custom-tablet:pl-[40px]"
            key={item.id}
            onClick={() => {
              setAccordState((prevState) => {
                return { id: item.id, isOpen: !prevState.isOpen };
              });
            }}
          >
            <div className="flex flex-row-reverse justify-between">
              <h3 className=" text-[16px] custom-tablet:text-[18px]">{item.qTitle}</h3>
              <Image
                src={
                  accordState.id === item.id && accordState.isOpen
                    ? arrowUp
                    : arrowDown
                }
                alt="arrow Icon"
                className={`${accordState.id === item.id && accordState.isOpen ? "w-[15px] h-[15px]" : undefined}`}
              />
            </div>
            <div
              className={`overflow-hidden text-[14px] custom-tablet:text-[16px] transition-all mt-0 duration-500 ${
                accordState.id === item.id && accordState.isOpen
                  ? "h-[100px] mt-[30px]"
                  : "h-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
