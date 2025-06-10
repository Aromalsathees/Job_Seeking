import React from 'react';


const Home1 = () => {

  return (
  
    <div className='lg:w-screen h-screen bg-white text-black flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-center'>
        <span className="block text-green-300 mt-10">Find Your First</span>
        <span className="block mt-1 text-green-300">Job Today!</span>
      </h1>
      <h3 className='lg:mt-4 mt-1 lg:font-bold text-gray-500'>
        <span className='block lg:ml-3'>Track,Apply,and Get Hired</span>
        <span className='block lg:ml-8 ml-6'>All in One Platform</span>
      </h3>
      <div className='lg:ml-15 lg:mt-3 mt-12'>
        <form>
        <input className='lg:p-2 p-2 lg:w-200 lg:rounded-2xl ml-10 rounded-2xl lg:border-1 lg:mt-3 border ' type="text" placeholder='search...' />
        <button className='ml-1 rounded-md bg-green-400 text-white'>search</button>
        </form>
      </div>
    </div>

  );
};

export default Home1;
