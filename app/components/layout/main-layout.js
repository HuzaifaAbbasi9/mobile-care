import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
    <header>Header 1 test</header>
    <main>{children}</main>
    <footer>Footer</footer>
    </>
  )
}

export { MainLayout }