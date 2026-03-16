import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const RootLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="contianer flex_between flex_col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout
