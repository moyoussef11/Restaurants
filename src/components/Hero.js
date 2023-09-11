import React from 'react';
import hero from '../images/undraw_barbecue_3x93.svg'

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse py-24 px-5 items-center md:flex-row">
      <div className='mt-5 w-full text-center md:text-left md:w-1/2'>
        <h2 className='text-red-900 font-bold text-2xl md:text-6xl'>Good food choices are good investments.</h2>
        <p className='my-3 text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum amet leo.
        </p>
        <button className='bg-red-900 py-2 px-10 rounded mr-2 text-white font-bold hover:bg-slate-300 hover:text-red-900 hover:border-red-900 border transition-all'>order now</button>
        <button className='bg-white shadow font-bold border py-2 px-10 rounded mr-2 hover:border-red-900 hover:text-red-900'>learn more</button>
      </div>
      <div className='w-full md:w-1/2'><img className='w-full' src={hero} alt='hero'/></div>
    </div>
  );
}

export default Hero;