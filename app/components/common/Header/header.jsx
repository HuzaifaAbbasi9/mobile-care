import React from 'react'
import { ContactInfo, MainNavigation, NavigationLinks, PromotionalOffer, QuickLinks } from './components'

const SiteHeader = () => {
  return (
    <header>
      <ContactInfo />
      <QuickLinks />
      <PromotionalOffer />
      <MainNavigation />
    </header>
  )
}

export { SiteHeader }