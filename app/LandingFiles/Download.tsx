import React from 'react'
import Image from 'next/image'

export default function Download() {
  return (
    <section className='mt-2 flex bg-black items-center px-[12%] py-16'>
        <div className='w-6/12'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" height={50} width={50} alt='' className='w-full' />
        </div>

        <div className="w-6/12">
            <h1 className='text-5xl leading-[54px] font-bold mb-3'>Download your shows to watch offline</h1>
            <p className='text-2xl'>Save your favorites easily and always have something to watch.</p>
        </div>
    </section>
  )
}
