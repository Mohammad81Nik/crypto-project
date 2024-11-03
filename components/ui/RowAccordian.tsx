"use client";
import ToTransactionButton from "./ToTransactionButton";

const RowAccordian = ({
  buy_irt_price,
  sell_irt_price,
}: {
  buy_irt_price: string;
  sell_irt_price: string;
}) => {
  return (
    <>
      <div className="w-full flex flex-row-reverse justify-between">
        <span>فروش به والت</span>
        <span>{sell_irt_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
      </div>

      <div  className="w-full flex flex-row-reverse justify-between">
        <span>خرید از والت</span>
        <span>{buy_irt_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
      </div>

      <ToTransactionButton  isUsedInAccordian={true}/>
    </>
  );
};

export default RowAccordian;
