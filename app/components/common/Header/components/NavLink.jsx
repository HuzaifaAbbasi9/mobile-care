import { SvgIcons } from '@/app/components'
import React from 'react'

const NavLink = ({text='',icon}) => {
  return (
    <div className='flex items-center gap-7px text-accent-100 cursor-pointer transition-opacity duration-300 hover:opacity-80'>
      {icon && <SvgIcons type={icon} />}
      <span className='text-base font-bold'>{text}</span>
    </div>
  )
}

export {NavLink}