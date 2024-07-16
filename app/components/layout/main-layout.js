import React from 'react'
import { SiteFooter, SiteHeader } from '../common'

const MainLayout = ({children}) => {
  return (
    <>
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
    </>
  )
}

export { MainLayout }