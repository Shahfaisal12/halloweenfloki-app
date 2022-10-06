import React from 'react'
import Hero from '../elements/Hero'
import Faqs from '../untils/Faqs'
import Floki from './Floki'
import OurDocument from './OurDocument'
import OurPlane from './OurPlane'
import Tokenomic from './Tokenomic'
// import Imgmansonry from './Imgmansonry.js'
// import Producttable from './Producttable'

const Home = () => {
  return (
    <>
    <Hero />
    <Floki />
    <Tokenomic />
    <OurPlane />
    <OurDocument />
    <Faqs />
    
    {/* <Producttable />
    <Imgmansonry /> */}
    </>
  )
}

export default Home