import React from 'react'
import Image from "next/image";
import { IMG_URL } from '@/constants/data/imageConstants';
const CaseStudyPage = () => {
  return (
    <div className='mt-20 md:mt-12 text-white'>
        <div className='flex flex-col items-center'>
        <Image 
        className='rounded-lg w-2/4 md:w-1/3'
        height={150}
        width={150}
        src={IMG_URL} alt="client-logo"/>
        <h1 className='pt-4 text-3xl font-bold'>Smita Holidays</h1>
        </div>
        
    <div className='pt-14 mx-40'>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl my-3'>The Problem</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni</p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl my-3'>The Solution</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni</p>
        </div>
         <div className='mt-10'>
            <h1 className='font-bold text-2xl my-3'>KPI</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni</p> 
        </div>
        <div className='flex mt-10 items-center mx-auto justify-between  flex-col md:flex-row '>
            <Image src={IMG_URL} 
            height={150}
            width={150} 
            className='rounded-lg w-[60%] my-4 md:w-[45%] '
            alt="sponsor-img"
            />
            <Image src={IMG_URL} 
            height={150}
            width={150} 
            className='rounded-lg w-[60%] my-4 md:w-[45%]'
            alt="sponsor-img"
            />
        </div>
    </div>
        <div className='flex justify-between pt-10 font-bold text-xl mx-24 md:mx-40'>
            <button>Previous</button>
            <button>Next</button>
        </div>
    
        <div className='flex border border-yellow-600 rounded-3xl mt-14 pt-4 flex-col md:flex-row gap-2 md:gap-10 m-8 justify-between'>
          <div className='flex items-center justify-center w-full md:w-[50%]'>
          <Image src={IMG_URL} 
            height={380}
            width={380} 
            className=' rounded-lg w-[80%]'
            alt="sponsor-img"
            />
          </div>
            <div className='m-auto p-12 md:mr-12 w-full md:w-[50%]'>
                <h1 className='font-bold text-2xl '>Work With Us</h1>
                <p>We are commited to working with you collaboratively to understand your goals and create a strategy that will achieve them.</p>
                <button className=" rounded-full font-bold py-2 px-6 bg-yellow-500 text-white my-6">
                    Schedule a call
                </button>
            </div>
        </div>


    </div>
  )
}

export default CaseStudyPage