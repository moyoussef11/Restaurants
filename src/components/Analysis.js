import React from 'react';

const Analysis = () => {
  return (
    <div className="bg-red-900 py-10 px-3 text-white flex flex-col space-y-5 md:flex-row items-center justify-evenly text-center">
      <div>
        <h3 className='text-4xl font-bold'>1287+</h3>
        <p className='font-bold mt-2'>SAVINGS</p>
      </div>
      <div>
        <h3 className='text-4xl font-bold'>5786+</h3>
        <p className='font-bold mt-2'>PHOTOS</p>
      </div>
      <div>
        <h3 className='text-4xl font-bold'>1440+</h3>
        <p className='font-bold mt-2'>ROCKETS</p>
      </div>
      <div>
        <h3 className='text-4xl font-bold'>7110+</h3>
        <p className='font-bold mt-2'>GLOBES</p>
      </div>
    </div>
  );
}

export default Analysis;