"use client";
import PersianTextEditor from "./PersianTextEditor";
import ToTransactionButton from "./ToTransactionButton";

const RowAccordian = ({
  buy_irt_price,
  sell_irt_price,
  currency_code,
}: {
  buy_irt_price: string;
  sell_irt_price: string;
  currency_code: string;
}) => {
  return (
    <>
      <div className="w-full flex flex-row-reverse justify-between">
        <span>فروش به والت</span>
        <span className="flex gap-1">
          <PersianTextEditor
            unit="تومان"
            price={sell_irt_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
        </span>
      </div>

      <div className="w-full flex flex-row-reverse justify-between">
        <span>خرید از والت</span>
        <span className="flex gap-1">
          <PersianTextEditor
            unit="تومان"
            price={buy_irt_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
        </span>
      </div>

      <ToTransactionButton
        currency_code={currency_code}
        isUsedInAccordian={true}
      />
    </>
  );
};

export default RowAccordian;
