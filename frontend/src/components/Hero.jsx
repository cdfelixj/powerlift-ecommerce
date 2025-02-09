import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-center text-[#414141]'>
          <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold'>Do You Want the Best Equipment for Powerlifting!!!</h1>
          <p className='mt-4 text-lg sm:text-xl'>Shop our newest arrivals and bestsellers</p>
          <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
          </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero