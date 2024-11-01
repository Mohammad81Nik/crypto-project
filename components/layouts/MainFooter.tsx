import Image from "next/image";
import companyLogo from "@/public/company-logo-white.svg";
import Link from "next/link";
import instagramLogo from "@/public/instagram-icon.svg";
import facebookLogo from "@/public/facebook-icon.svg";
import twitterLogo from "@/public/twitter-icon.svg";
import linkedInLogo from "@/public/linkedin-icon.svg";
import youtubeLogo from "@/public/youtube-icon.svg";
import LogoContainer from "../ui/LogoContainer";

const relatedLinksMap: { title: string; href: string }[] = [
  { title: "صفحه ی اصلی", href: "/crypto-price-list" },
  { title: "قیمت رمزارزها", href: "/crypto-price-list" },
  { title: "مقالات و وبلاگ", href: "/crypto-price-list" },
  { title: "درباره ی ما", href: "/crypto-price-list" },
  { title: "سوالات متداول", href: "/crypto-price-list" },
  { title: "شرایط و قوانین", href: "/crypto-price-list" },
  { title: "فرصت های شغلی", href: "/crypto-price-list" },
  { title: "انجمن", href: "/crypto-price-list" },
];

const currencyInterchangeLinksMap: { title: string; href: string }[] = [
  { title: "خرید بیت کوین", href: "/currency-interchange" },
  { title: "خرید اتریوم", href: "/currency-interchange" },
  { title: "خرید ریپل", href: "/currency-interchange" },
  { title: "خرید سولانا", href: "/currency-interchange" },
  { title: "خرید یواس دی کوین", href: "/currency-interchange" },
  { title: "خرید چین لینک", href: "/currency-interchange" },
  { title: "خرید دوج کوین", href: "/currency-interchange" },
  { title: "خرید تتر", href: "/currency-interchange" },
];

const logoMap: { logoPath: string; alt: string }[] = [
  { logoPath: instagramLogo, alt: "instagram logo" },
  { logoPath: facebookLogo, alt: "facebook logo" },
  { logoPath: twitterLogo, alt: "twitter logo" },
  { logoPath: linkedInLogo, alt: "linkedIn logo" },
  { logoPath: youtubeLogo, alt: "youtube logo" },
];

const MainFooter = () => {
  return (
    <footer className="w-full h-[579px] sm:h-[370px] min-[670px]:h-[357px] lg:h-[402px] bg-footer-background text-white flex flex-col items-center text-right pl-[5%] sm:pl-[2%] xl:pl-[5%] pr-[5%] sm:pr-[2%] xl:pr-[5%] pt-[5%] cutsom-tablet:pt-[2.5%] gap-[2%] text-[10px] sm:text-[12px] lg:text-[16px]">
      <section className="w-full flex flex-col gap-y-[20px] sm:flex-row-reverse sm:gap-x-[5%]">
        <div className="w-full sm:w-[40%] lg:w-[30%] flex flex-col items-end gap-4">
          <Image src={companyLogo} alt="company logo" />
          <p className="leading-[30px] ">
            راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های
            پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام
            تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به
            ثبت رسید و فعالیت رسمی آغاز نمود.
          </p>
        </div>
        <hr className="border-line-color block w-full sm:hidden" />
        <div className="w-full justify-between sm:w-[60%] lg:w-[70%] flex flex-row-reverse gap-[10%] sm:mt-[5%] md:mt-[2%]">
          <div className="w-[40%] md:w-[50%] lg:w-[50%] flex flex-col items-end gap-4">
            <h2 className="custom-tablet:text-[16px] lg:text-[20px] font-extrabold">
              لینک های مرتبط
            </h2>
            <ul className="w-full h-[150px] flex flex-col flex-wrap-reverse items-start gap-[25px] lg:gap-[12px]">
              {relatedLinksMap.map((item) => {
                return (
                  <li>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[40%] md:w-[50%] lg:w-[50%] flex flex-col items-end gap-4">
            <h2 className="custom-tablet:text-[16px] lg:text-[20px] font-extrabold">
              تبادل ارز
            </h2>
            <ul className="w-full h-[150px] flex flex-col flex-wrap-reverse items-start gap-[25px] lg:gap-[12px]">
              {currencyInterchangeLinksMap.map((item, index) => {
                return (
                  <li className="w-fit">
                    <Link
                      href={item.href}
                      className={`${
                        index >= 4
                          ? "hidden min-[450px]:block sm:hidden lg:block"
                          : undefined
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <hr className="w-full border-line-color" />
      <section className="w-full flex flex-col-reverse text-center sm:text-right sm:flex-row-reverse items-center sm:justify-between gap-[20px] sm:p-4 lg:p-0">
        <p className="w-full sm:w-[50%]">
          تمامی حقوق این سرویس متعلق به مجموعه{" "}
          <span className="font-semibold">ری پیمنت</span> است
        </p>
        <hr className="border-[1px] border-line-color w-full sm:hidden" />
        <div className="w-full sm:w-[50%] flex justify-center sm:justify-start gap-[20px]">
          {logoMap.map((item) => {
            return <LogoContainer logoPath={item.logoPath} alt={item.alt} />;
          })}
        </div>
      </section>
    </footer>
  );
};

export default MainFooter;
