import { HeaderData } from '@/app/data/data'
import React from 'react'

const PromotionalOffer = () => {
  return (
    <div className='relative py-3px bg-danger-100'>
      <div className='md:max-w-95/100 md:mx-auto md:px-5 max-md:px-4'>
        <div className='flex items-center justify-center xl:gap-5 max-xl:gap-4'>
          <p className={`text-13px text-accent-100 font-bold cursor-pointer`}>{HeaderData?.promotionalOfferText}</p>
        </div>
      </div>
    </div>
  )
}

export { PromotionalOffer }