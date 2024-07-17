import { HeaderData } from '@/app/data/data'
import React from 'react'

const QuickLinks = () => {
  return (
    <div className='relative py-3px'>
      <div className='container'>
        <div className='flex items-center justify-end gap-5'>
          {HeaderData?.quickLinks?.map((link, i)=>(
            <p key={i} className={`text-11px text-dark-100/60 font-semibold cursor-pointer`}>{link.title}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export { QuickLinks }