import { HeaderData } from '@/app/data/data'
import React from 'react'

const PromotionalOffer = () => {
  return (
    <div className='relative py-3px bg-danger-100'>
      <div className='container'>
        <div className='flex items-center justify-center gap-5'>
          <p className={`text-13px text-accent-100 font-bold cursor-pointer`}>{HeaderData?.promotionalOfferText}</p>
        </div>
      </div>
    </div>
  )
}

export { PromotionalOffer }