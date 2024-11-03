import { redirect } from "next/navigation";

const ToTransactionButton = ({
  isUsedInAccordian,
  currency_code,
}: {
  isUsedInAccordian: boolean;
  currency_code: string;
}) => {
  return (
    <button
      onClick={() => {
        redirect(`/crypto-price-list/${currency_code}`);
      }}
      className={`h-[47px] bg-primary-color text-white text-[14px] font-extrabold rounded-[8px] border-2 border-primary-color transition-colors duration-500 hover:text-primary-color hover:bg-white ${
        isUsedInAccordian ? "w-full" : "w-[130px]"
      }`}
    >
      معامله
    </button>
  );
};

export default ToTransactionButton;
