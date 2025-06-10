import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"



const Joblisting = () => {

  const [dataset,setDataset] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:8000/job_listing/').then(response=>{
      setDataset(response.data)
      }).catch(error=>{
        console.error("error fecthing:", error)   
    })
  },[])









  return (
    <div className='lg:w-screen lg:min-h-screen w-20px bg-white pt-24 p-5'>
      <div className='border-0 border-gray-600 min-h-screen'>
        <h1 className='text-green-300 text-2xl font-bold lg:ml-10'>Job Listing</h1>
        <div className='lg:ml-12 lg:mt-5 mt-5 mb-5'>
          <input className="border border-gray-400 lg:w-350 w-full px h-14 placeholder-gray-500 pl-3 rounded-lg " type="text" placeholder='search Jobs...' />
        </div>


        <div className='grid grid-cols-3 text-black lg:space-x-5 lg:px-21 lg:m-5 lg:mt-10 mt-3 space-x-1 '>
          <div className='border border-gray-600 rounded-md'>
            <Select>
              <SelectTrigger className="lg:w-[400px] w-30">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='border border-gray-600 rounded-md'>
            <Select>
              <SelectTrigger className="lg:w-[400px] w-30">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='border border-gray-600 rounded-md'>
            <Select>
              <SelectTrigger className="lg:w-[400px] w-30">
                <SelectValue placeholder="Experince Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:pl-4 lg:pr-6 mt-5 mb-5'>

    
    {dataset.map((job,index) => (


          <div key={index} className='border border-gray-300 w-[300px] lg:mt-15 mt-5  h-auto p-4 shadow-md mx-auto rounded-md'>
            <div className='grid grid-cols-2 border-b'>
              <div className='lg:mt-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Check Icon" width="60" height="24" />
              </div>
              <div className='lg:space-y-2 font-semibold'>
                <h2 className='text-black font-semibold text-2xl'>{job.jobtitle}</h2>
                <p className='text-gray-500 font-semibold'>Toch Corp</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500">location_on</span>
                  <p className="text-gray-500 font-semibold whitespace-nowrap">New Yourk,Ny</p>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="material-symbols-outlined">work</span>
                  <p className='text-gray-500 font-semibold lg:mb-2 mb-2'>Full Time</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 lg:mt-2 mt-2'>
              <a href="" className='lg:mt-2 lg:ml-2 mt-2'>Apply</a>
               <Link to={`/jobtitles/${job.id}`}> 
                   <button className='border-1 shadow border-gray-300 lg:ml-8 rounded-md'>Save</button>
               </Link> 
            </div>
        
          </div>

      ))}
    

{/* 

           <div className='border border-gray-300 w-[300px] h-auto p-4 shadow-md mx-auto rounded-md'>
            <div className='grid grid-cols-2 border-b'>
              <div className='lg:mt-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Check Icon" width="60" height="24" />
              </div>
              <div className='lg:space-y-2 font-semibold'>
                <h2 className='text-black font-bold text-2xl'>Software Engineer</h2>
                <p className='text-gray-500 font-semibold'>Toch Corp</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500">location_on</span>
                  <p className="text-gray-500 font-semibold whitespace-nowrap">New Yourk,Ny</p>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="material-symbols-outlined">work</span>
                  <p className='text-gray-500 font-semibold lg:mb-2 mb-2'>Full Time</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 lg:mt-2 mt-2'>
              <a href="" className='lg:mt-2 lg:ml-2 mt-2'>Apply</a>
              <button className='border-1 shadow border-gray-300'>Save</button>
            </div>
          </div>

      
          <div className='border border-gray-300 w-[300px] h-auto p-4 shadow-md mx-auto rounded-md'>
            <div className='grid grid-cols-2 border-b'>
              <div className='lg:mt-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Check Icon" width="60" height="24" />
              </div>
              <div className='lg:space-y-2 font-semibold'>
                <h2 className='text-black font-bold text-2xl'>Software Engineer</h2>
                <p className='text-gray-500 font-semibold'>Toch Corp</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500">location_on</span>
                  <p className="text-gray-500 font-semibold whitespace-nowrap">New Yourk,Ny</p>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="material-symbols-outlined">work</span>
                  <p className='text-gray-500 font-semibold lg:mb-2 mb-2'>Full Time</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 lg:mt-2 mt-2'>
              <a href="" className='lg:mt-2 lg:ml-2 mt-2'>Apply</a>
              <button className='border-1 shadow border-gray-300'>Save</button>
            </div>
          </div>

          <div className='border border-gray-300 w-[300px] h-auto p-4 shadow-md mx-auto rounded-md'>
            <div className='grid grid-cols-2 border-b'>
              <div className='lg:mt-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Check Icon" width="60" height="24" />
              </div>
              <div className='lg:space-y-2 font-semibold'>
                <h2 className='text-black font-bold text-2xl'>Software Engineer</h2>
                <p className='text-gray-500 font-semibold'>Toch Corp</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500">location_on</span>
                  <p className="text-gray-500 font-semibold whitespace-nowrap">New Yourk,Ny</p>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="material-symbols-outlined">work</span>
                  <p className='text-gray-500 font-semibold lg:mb-2 mb-2'>Full Time</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 lg:mt-2 mt-2'>
              <a href="" className='lg:mt-2 mt-2 lg:ml-2'>Apply</a>
              <button className='border-1 shadow border-gray-300'>Save</button>
            </div>
          </div> */}



        </div>  









      </div> 
    </div>
  )
}

export default Joblisting
