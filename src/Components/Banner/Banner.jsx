import React from 'react';

const Banner = () => {
  return (
    <div className='flex md:flex-row flex-col gap-10 max-w-3xl md:py-20 my-20 px-6 md:mx-auto items-center h-screen'>
      <div className='space-y-6'>
        <h1 className='text-5xl font-semibold'>Books to freshen up your bookshelf</h1>
      <button className='bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 cursor-pointer font-medium'>View The List</button>
      </div>
      <div>
        <img className='h-100 w-120'  src="/public/Images/pngwing 1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;