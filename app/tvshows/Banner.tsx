import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Banner() {
  return (
    <section className='h-[350px] md:h-screen relative flex items-center pl-12'>
        <Image src='/images/series.jpg' alt='banner' width={1190} height={1000} className='brightness-50 absolute left-0 top-0 z-[-1] h-full w-full' />

        <div className='w-full'>
            <img src="https://occ-0-5543-1168.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSN2Kn0g-gq7lRS1Uw8sV7RrCuHGw7kWegPJHhpCOcj-sFCViFKXoPog3h-Uv0VlbjMFmT9eyKAg0JIryZ53FTNIqXC1bBIOF_P8e_jNB1zF.webp?r=ed1" alt="" className='w-40 md:w-[350px]' />
            <p className='w-[450px] text-xs md:text-sm mt-4'>Trapped in adolescent bodies, feuding vampire brothers Stefan and Damon vie for the affection of captivating teenager Elena</p>

            <div className="flex items-center mt-4 md:mt-8">
              <button className='flex items-center justify-center rounded-md mr-3 bg-white text-black text-base w-[85px] h-[35px] md:text-[18px] md:w-28 md:h-[42px]'><i className='mr-1 md:text-[20px]'><FaPlay /></i> Play</button>
              <button className='flex items-center justify-center rounded-md bg-white text-black text-base h-[35px] w-[120px] md:text-[20px] md:w-[160px] md:h-[42px]'>More Info</button>

              <div className="ml-auto border-l-zinc-50 border-l opacity-60 px-2 py-1 bg-[#141414] w-20">18+</div>
            </div>
        </div>
    </section>
  )
}
