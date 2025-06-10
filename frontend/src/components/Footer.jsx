import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-200 w-screen  bottom-0 border-t'>
        <div className='mx-auto ml-2 mr-2 mt-5  flex flex-cols-3 w-full text-black'>
            <div className='mx-auto flex lg:mt-15 space-y-2 '>
                  <ul className='space-y-2 text-gray-600 font-semibold'>
                    <li>Quick Links</li>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>About</li>
                  </ul>
            </div>

             <div className='mx-auto flex lg:mt-15'>
                  <ul className=' space-y-2 text-gray-600 font-semibold'>
                    <li>Cotact</li>
                    <li>Email</li>
                    <li>Contact</li>
                  </ul>
            </div>

             <div className='mx-auto flex lg:mt-15'>
                  <ul className=' space-y-2 text-gray-600 font-semibold'>
                    <li>Email</li>
                    <li>aromal</li>
                  </ul>
            </div>
          </div>
          <div className='flex justify-center items-center lg:mt-10 mt-3'>
            <p className='text-black font-semibold'>@2025 Job Tracker. All-rights reserved.</p>
          </div>
    </footer>
  )
}

export default Footer