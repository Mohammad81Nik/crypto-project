

const TabButton = ({title, id}: {title: string, id: string}) => {
  return (
    <button key={id} className=' basis-[20%] custom-tablet:basis-[12.5%] h-[47px] text-[14px] font-normal bg-nav-background rounded-[8px]'>
        {title}
    </button>
  )
}

export default TabButton