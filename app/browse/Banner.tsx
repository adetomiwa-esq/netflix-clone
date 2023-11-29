import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Banner() {
  return (
    <section className='h-[calc(100vh-50px)] relative flex items-center pl-12'>
        <Image src='/images/movieBanner.jpg' alt='banner' width={1190} height={1000} className='brightness-50 absolute left-0 top-0 z-[-1] h-full w-full' />

        <div className='w-full'>
            <img src="https://occ-0-5543-1168.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbNebMc2GCVEVphL1_1BRHb_QRWoisn4pfBVY1Ot9Gc7J0vqU2F5nuq1w-Z7REUEOnfkPbfImf35wB35m_Fxw0YSt4tNlGtOgEdjhrf_07jc.png?r=842" alt="" className='w-[400px]' />
            <p className='w-[450px]'>Brilliant yet awkward nine-year-old Sheldon Cooper lands in high school where his smarts leave everyone stumped in this {'"'} The Big Bang Theory{'"'} spinoff</p>

            <div className="flex items-center mt-8">
              <button className='flex text-[18px] items-center justify-center rounded-md w-28 h-[42px] mr-3 bg-white text-black'><i className='mr-1 text-[20px]'><FaPlay /></i> Play</button>
              <button className='flex text-[20px] items-center justify-center rounded-md w-[160px] h-[42px] bg-white text-black'>More Info</button>

              <div className="ml-auto border-l-zinc-50 border-l opacity-60 px-2 py-1 bg-[#141414] w-20">18+</div>
            </div>
        </div>
    </section>
  )
}
