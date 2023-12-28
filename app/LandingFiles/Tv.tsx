import React from 'react'
import Image from 'next/image'

export default function Tv() {
  return (
    <section className='mt-2 flex bg-black items-center px-[12%] py-16 flex-col md:flex-row'>
        <div className="">
            <h1 className='text-[40px] font-bold mb-3'>Enjoy on your TV</h1>
            <p className='text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>

        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" height={50} width={50} alt='' className='w-[500px]' />


    </section>
  )
}
