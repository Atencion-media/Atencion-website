import React from 'react'

const VideoPlayer = () => {
  return (
    <div id='videoPlayer' className='bg-black2 relative rounded-lg overflow-hidden w-3/5 md:w-4/5'>
         <iframe
        width='100%'
        height='380'
        src='https://www.youtube.com/embed/j8VJXb2LoMM?autoplay=1&loop=1&controls=0&modestbranding=0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer