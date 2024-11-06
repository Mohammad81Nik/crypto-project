import Image from "next/image";


const CurrencyValueInput = () => {
  return (
    <div className="bg-input-bar flex flex-row-reverse items-center h-[47px] rounded-[50px] pr-[22px] pl-[22px]">
      <input
        type="text"
        className="w-[50%] text-right outline-none bg-transparent text-text-color text-[14px]"
        placeholder="مقدار را وارد کنید"
      />
      <div className="w-[50%] flex flex-row-reverse gap-3 pr-2 border-r-2 border-r-input-bar-separator">
        <Image
          src={"/iran-currancy.png"}
          alt="currency icon"
          width={30}
          height={30}
          className="w-[30px] h-[30px] rounded-[50%]"
        />
        <input
          type="text"
          className="w-[70%] text-right outline-none bg-transparent text-text-color text-[12px] custom-tablet:text-[14px]"
          placeholder="تومان"
        />
        <Image width={24} height={24} src={'/arrow.svg'} alt="arrow icon" />
      </div>
    </div>
  );
};

export default CurrencyValueInput;
