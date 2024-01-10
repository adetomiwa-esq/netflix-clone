import React from 'react'
import VideoController from './VideoController'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function page() {
  return (
    <div className='h-screen text-white group relative'>
      <Link href='/mylist' className='text-4xl block z-10 absolute top-8 left-5'><FaArrowLeft /></Link>
      <img src="https://occ-0-5544-299.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfFU2J-v7XCYysMgGbxPRpUMFbZlzASEFmuGj-t3mTCpelWoVqkjsH3g3EJvX_OV9qmpKb0NL1zEh3TQ6aH4jT__yLxWChEw-9VKKXNa0Uy9qVmyAOPXqg2g90RrSJdAtRzN.jpg?r=1a1" alt="" className='fixed top-0 left-0 w-full h-screen z-[-2]' />
        <p className='text-center w-[300px] absolute left-1/2 top-[40px] -translate-x-1/2'>nakama: (in the context of this movie, it refers to a crew member or an ally)</p>
        <VideoController />
    </div>
  )
}
