import CryptoTable from "@/components/CryptoTable";
import TabButton from "@/components/ui/TabButton";

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

const page = () => {
  return (
    <div className=" flex flex-col items-center pt-[calc(200px-104px)] pl-[150px] pr-[150px] h-[2000px]">
      <h1 className="text-[40px] font-extrabold">
        لیست قیمت لحظه‌ای ارزهای دیجیتال‌
      </h1>
      <div className="mt-[83px] w-full flex flex-row-reverse gap-4 ">
        {tabButtonsMap.map((item) => {
          return <TabButton title={item.title} id={item.id} />;
        })}
      </div>
      <CryptoTable />
    </div>
  );
};

export default page;
