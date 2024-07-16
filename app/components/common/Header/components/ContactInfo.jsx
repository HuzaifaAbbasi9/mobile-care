import { HeaderData } from '@/app/components/data/data'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className='relative bg-dark-100 py-3px'>
      <div className='container'>
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