import Image from "next/image";
import companyLogo from "@/public/company-logo.svg";
import phoneLogo from "@/public/phone-icon.svg";
import profilePic from "@/public/profile.png";
import arrowIcon from "@/public/arrow.svg";

const MainNavigation = () => {
  return (
    <header className="w-full bg-nav-background">
      <nav className="w-full h-[104px] flex flex-row-reverse items-center justify-between pl-[143px] pr-[143px] text-nowrap">
        <div className="flex flex-row-reverse items-center gap-14">
          <Image src={companyLogo} alt="compony-logo" width={109} height={53} />
          <ul className="flex gap-14">
            <li>صفحه اصلی</li>
            <li>قیمت رمزارزها</li>
            <li>مقالات</li>
            <li>تماس با ما</li>
            <li>سایر</li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-14">
          <div className="flex flex-row-reverse items-center gap-4">
            <figure className="w-[30px] h-[30px] rounded-[50%] overflow-hidden">
              <Image src={profilePic} alt="profile picture" />
            </figure>
            <p>علی اسماعیلی</p>
            <Image src={arrowIcon} alt="arrow icon" />
          </div>
          <div className="flex flex-row-reverse items-center gap-4">
            <Image src={phoneLogo} alt="phone icon" />
            <p>021-91008590</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
