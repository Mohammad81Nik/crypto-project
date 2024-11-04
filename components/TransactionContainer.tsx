import { ICryptoItem } from "@/types/types";
import CryptoIconContainer from "./ui/CryptoIconContainer";
import CurrencyValueInput from "./ui/currencyValueInput";
import interchangeIcon from "@/public/interchangeIcon.svg";
import Image from "next/image";
import PersianTextEditor from "./ui/PersianTextEditor";

const TransactionContainer = ({ data }: { data: ICryptoItem }) => {
  const todayPriceInfoMap = [
    {
      id: Math.random().toString(),
      renderItem: (
        <>
          <span>: تغییر قیمت امروز</span>
          <span>{data.daily_change_percent}%</span>
        </>
      ),
    },
    {
      id: Math.random().toString(),
      renderItem: (
        <>
          <span>: خرید {data.fa_name}</span>
          <span className="flex gap-1">
            <PersianTextEditor
              price={data.buy_irt_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              unit="تومان"
            />
          </span>
        </>
      ),
    },
    {
      id: Math.random().toString(),
      renderItem: (
        <>
          <span>: فروش {data.fa_name}</span>
          <span className="flex gap-1">
            <PersianTextEditor
              price={data.sell_irt_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              unit="تومان"
            />
          </span>
        </>
      ),
    },
    {
      id: Math.random().toString(),
      renderItem: (
        <>
          <span>: بالاترین قیمت 24 ساعته</span>

          <span className="flex gap-1">
            <PersianTextEditor
              price={"10000000".replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              unit="تومان"
            />
          </span>
        </>
      ),
    },
    {
      id: Math.random().toString(),
      renderItem: (
        <>
          <span>: پایین ترین قیمت 24 ساعته</span>
          <span className="flex gap-1">
            <PersianTextEditor
              price={"10000000".replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              unit="تومان"
            />
          </span>
        </>
      ),
    },
  ];
  return (
    <div className="relative flex flex-col custom-tablet:flex-row-reverse justify-between custom-tablet:h-[481px] rounded-[30px] w-full bg-white pl-[20px] custom-tablet:pl-[40px] pr-[20px] custom-tablet:pr-[40px] pt-[29px] pb-[29px] gap-4">
      <div className="w-full custom-tablet:w-[50%] flex flex-col text-right gap-4 custom-tablet:gap-6 custom-tablet:pl-[40px]">
        <h2 className="text-[16px] font-bold">: قیمت لحظه‌ای</h2>
        {/* SUMMARY INFO SECTION!!!! */}
        <div className="w-full flex flex-row-reverse items-center justify-between">
          <div className="w-[50%] flex flex-row-reverse items-center gap-4">
            <CryptoIconContainer
              iconUrl={data.icon}
              alt={data.en_name}
              width={73}
              height={73}
            />
            <div className="w-[50%] flex flex-col gap-2">
              <span className="text-[14px] custom-tablet:text-[18px] font-bold">
                {data.fa_name}
              </span>
              <span className="text-[14px] custom-tablet:text-[18px]text-text-color">
                {data.en_name}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[14px] custom-tablet:text-[18px] font-bold flex gap-2">
              <PersianTextEditor
                price={data.buy_irt_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                unit="تومان"
              />
            </span>
            <span className="text-[14px] custom-table:text-[18px] text-text-color">
              ${data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </div>
        <hr className="w-full bg-seperator-line" />
        {/* TODAYS PRICE LIST */}
        <ul className="h-[70%] flex flex-col max-[834px]:gap-8 custom-tablet:justify-between">
          {todayPriceInfoMap.map((item) => (
            <li
              key={item.id}
              className="flex flex-row-reverse justify-between text-[12px] custom-tablet:text-[16px]"
            >
              {item.renderItem}
            </li>
          ))}
        </ul>
      </div>
      <span className="hidden custom-tablet:block absolute top-[50%] h-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[1px] border-seperator-line"></span>
      <span className="block w-full  border-[1px] border-seperator-line custom-tablet:hidden"></span>
      <div className="w-full custom-tablet:w-[50%] custom-tablet:pr-[40px] flex flex-col justify-between gap-4 custom-tablet:gap-0">
        <div className="w-full flex flex-col items-end gap-[20px]">
          <h2 className="text-[16px] font-bold">: ارسال می کنید</h2>
          {/* CURRENCY SELECTION AND VALUE INPUT */}
          <CurrencyValueInput />
        </div>
        <div className="w-full flex items-center">
          <button className="w-[40px] h-[40px] bg-interchange-button relative rounded-[50%]">
            <Image
              src={interchangeIcon}
              alt="interchange"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
          </button>
        </div>
        <div className="w-full flex flex-col items-end gap-[20px]">
          <h2 className="text-[16px] font-bold">: دریافت می کنید</h2>
          <CurrencyValueInput />
        </div>
        <div className="flex flex-col items-center gap-[26px]">
          <div className="w-full flex flex-row-reverse justify-between text-[12px] min-[500px]:text-[14px] custom-tablet:text-[16px] font-bold">
            <span>نرخ ارز یک</span>
            <span className="flex gap-1">
              <PersianTextEditor price="5.600" unit="تومان" />
            </span>
          </div>
          <div className="w-full flex flex-row-reverse justify-between text-[12px] min-[500px]:text-[14px] custom-tablet:text-[16px] font-bold">
            <span>نرخ ارز دو</span>
            <span className="flex gap-1">
              <PersianTextEditor price="49750" unit="دلار" />
            </span>
          </div>
          <button className="w-full border-[1px] border-buy-button-color rounded-[50px] h-[47px] text-buy-button-color text-[16px] font-bold transition-colors duration-500 hover:bg-buy-button-color hover:text-white">
            ادامه ی خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionContainer;
