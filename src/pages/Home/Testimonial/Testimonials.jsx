import React from 'react'
import Slider1 from './Slider'
import SectionHeading from '@/common/layout/SectionHeading'
import CustomSwiper from './CustomSwiper'
import Slider2 from './Slider2'

const Testimonials = () => {
  return (
    <div id='Testimonials'  className="w-full bg-black2 mt-4 md:mt2 ">
      <Slider1/>
        <SectionHeading title='Client Testimonials'/>
        <h2 className="text-white font-bold tracking-wider text-center mt-4 text-lg">They are happy with us!</h2>
        <CustomSwiper/>
      <Slider2/>

    </div>
  )
}

export default Testimonials