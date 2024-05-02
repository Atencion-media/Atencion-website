import React from 'react'

const SectionHeading = ({title="Hello"}) => {
  return (
    <div className='py-3 px-10 border-solid border-2 border-[gold] rounded-full w-fit mx-auto'>
        <h2 className='text-xl text-white tracking-wider font-bold'>{title}</h2>
    </div>
  )
}

export default SectionHeading