import Image from "next/image";
import companyLogo from "@/public/company-logo.svg";
import phoneLogo from "@/public/phone-icon.svg";
import profilePic from "@/public/profile.png";
import arrowIcon from "@/public/arrow.svg";
import hamburger from "@/public/hamburger.svg";

const MainNavigation = () => {
  return (
    <header className="w-full bg-nav-background">
      <nav className="w-full h-[64px] custom-mobile:h-[92px]  custom-tablet:h-[104px] flex flex-row-reverse items-center justify-between min-[1280px]:pl-[10%] min-[1024px]:pl-[5%] min-[1280px]:pr-[10%] pl-[2%] min-[1024px]:pr-[5%] pr-[2%] text-nowrap">
        <div className="w-[50%] flex flex-row-reverse items-center gap-[5%] custom-tablet:flex-grow max-[834px]:gap-3">
          <div className="flex justify-center items-center rounded-[7px] custom-tablet:hidden border-[1.5px] border-black w-[24px] h-[24px]">
            <Image src={hamburger} alt="trigger icon" />
          </div>

          <Image
            src={companyLogo}
            alt="compony-logo"
            className="custom-tablet:h-[53px] custom-tablet:w-[109px] w-[57px] h-[28px]"
          />
          <ul className="hidden custom-tablet:flex-grow custom-tablet:flex custom-tablet:flex-row-reverse xl:gap-[10%] lg:gap-[5%] md:gap-[5%]">
            <li>صفحه اصلی</li>
            <li>قیمت رمزارزها</li>
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
            <Image src={arrowIcon} alt="arrow icon"/>
          </div>
          <div className="hidden custom-tablet:flex items-center custom-tablet:flex-row-reverse  custom-tablet:flex-grow gap-1 lg:gap-[5%]">
            <Image src={phoneLogo} alt="phone icon" className="max-[1024px]:w-[16px] max-[1024px]:h-[16px]" />
            <p>021-91008590</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
