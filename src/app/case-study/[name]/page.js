import CaseStudyPage from '@/pages/CaseStudy/CaseStudyPage'
import React from 'react'

const page = ({params}) => {
  return (
    <CaseStudyPage ind={params?.name}/>
  )
}

export default page