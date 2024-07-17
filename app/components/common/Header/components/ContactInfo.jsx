import { HeaderData } from '@/app/data/data'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className='relative bg-dark-100 py-3px mt-5'>
      <div className='md:max-w-95/100 md:mx-auto md:px-5 max-md:px-4'>
        <div className='flex items-center gap-5'>
          {HeaderData?.contactInfo?.map((info, i)=>(
            <p key={i} className={`text-11px text-light-100/60 font-medium cursor-pointer ${i === 1 ? 'ml-auto' : ''}`}>{info}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ContactInfo } 