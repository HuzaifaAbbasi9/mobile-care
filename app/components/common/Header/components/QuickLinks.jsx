import { HeaderData } from '@/app/data/data'
import React from 'react'

const QuickLinks = () => {
  return (
    <div className='relative py-3px'>
      <div className='md:max-w-95/100 md:mx-auto md:px-5 max-md:px-4'>
        <div className='flex items-center justify-end xl:gap-5 max-xl:gap-4'>
          {HeaderData?.quickLinks?.map((link, i)=>(
            <p key={i} className={`text-11px text-dark-100/60 font-semibold cursor-pointer`}>{link.title}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export { QuickLinks }