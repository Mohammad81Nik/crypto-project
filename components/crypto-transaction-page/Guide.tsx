import Image from "next/image";

const Guide = ({ currency_name }: { currency_name: string }) => {
  return (
    <div className="w-full flex flex-col min-[500px]:flex-row items-center bg-white rounded-[15px] p-8 min-[500px]:p-4">
      <div className="flex-grow text-center min-[500px]:text-right flex flex-col justify-center h-[70%] gap-4">
        <h2 className="text-[16px] custom-tablet:text-[20px] lg:text-[28px] font-extrabold justify-self-start">
          علاقه مند به خرید {currency_name} هستید؟
        </h2>
        <p className="text-[12px] custom-tablet:text-[16px] lg:text-[22px] font-light">
          ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین داشته
          باشید.
        </p>
        <button className="w-[182px] h-[47px] rounded-[50px] text-[16px] font-bold border-[1px] border-primary-color bg-primary-color text-white transition-colors duration-500 hover:bg-white hover:text-primary-color self-center  min-[500px]:self-end">
          اکنون شروع کنید
        </button>
      </div>
      <Image
        src={"/figure.png"}
        className="-scale-x-[1] lg:w-[300px] md:w-[280px] sm:w-[230px] w-[196px]"
        alt="figure"
        width={337}
        height={337}
        sizes="(min-width: 1024px) 300px, (min-width: 768px) 280px"
      />
    </div>
  );
};

export default Guide;
