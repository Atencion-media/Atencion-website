import SectionHeading from '@/common/layout/SectionHeading'
import React from 'react'
import CaseStudyCard from './CaseStudyCard'

const CaseStudies = () => {
  return (
    <div className='w-full  p-4 md:p-12 mt-0  md:mt-2'>
        <SectionHeading title='Client Case Studies'/>
        <h4 className='text-lg text-white font-bold tracking-wider my-4 text-center mx-auto'>Discover what we did for them</h4>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto '>
            <CaseStudyCard/>
            <CaseStudyCard/>
            <CaseStudyCard/>
        </div>
    </div>
  )
}

export default CaseStudies