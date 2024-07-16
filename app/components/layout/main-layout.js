import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
    </>
  )
}

export { MainLayout }