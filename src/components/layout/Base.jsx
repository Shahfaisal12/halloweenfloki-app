import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Base = (props) => {
  return (
    <>
    <Header />
    <div>
    {props.children}
    </div>
    <Footer />
    </>
  )
}

export default Base