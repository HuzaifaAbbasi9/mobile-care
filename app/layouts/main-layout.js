import React from 'react'
import { SiteFooter, SiteHeader } from '../components'

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