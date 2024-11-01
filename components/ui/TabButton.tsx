import React from 'react'

const TabButton = ({title, id}: {title: string, id: string}) => {
  return (
    <button key={id} className='basis-[12.5%] pt-[21px] pb-[21px] bg-nav-background rounded-[8px]'>
        {title}
    </button>
  )
}

export default TabButton