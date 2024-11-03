
const ToTransactionButton = ({isUsedInAccordian} : {isUsedInAccordian: boolean}) => {
  return (
    <button className={`h-[47px] bg-primary-color text-white text-[14px] font-extrabold rounded-[8px] ${isUsedInAccordian ? 'w-full' : 'w-[130px]'}`}>
        معامله
    </button>
  )
}

export default ToTransactionButton