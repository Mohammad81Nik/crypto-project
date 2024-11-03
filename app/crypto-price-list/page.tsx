import Category from "@/components/Category";
import CryptoTable from "@/components/CryptoTable";



const page = () => {
  return (
    <div className=" flex flex-col items-center pt-[calc(200px-104px)] pl-[2%] lg:pl-[5%] xl:pl-[10%] pr-[2%] lg:pr-[5%] xl:pr-[10%]">
      <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] font-extrabold">
        لیست قیمت لحظه‌ای ارزهای دیجیتال‌
      </h1>
      <Category />
      <CryptoTable />
    </div>
  );
};

export default page;
