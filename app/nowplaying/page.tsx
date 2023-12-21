import React from 'react'
import VideoController from './VideoController'

export default function page() {
  return (
    <div className='h-screen bg-black text-white group relative'>
        <p className='text-center w-[300px] absolute left-1/2 top-[40px] -translate-x-1/2'>nakama: (in the context of this movie, it refers to a crew member or an ally)</p>
        <VideoController />
    </div>
  )
}
