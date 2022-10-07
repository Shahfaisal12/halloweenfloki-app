import React from 'react'
// import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

const Base = (props) => {
  return (
    <>
    {/* <Header /> */}
    <Navbar />
    <div>
    {props.children}
    </div>
    <Footer />
    </>
  )
}

export default Base