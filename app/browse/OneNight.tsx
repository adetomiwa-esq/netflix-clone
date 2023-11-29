'use client'
import Image from 'next/image'
import { oneNight } from './MockData';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react';

export default function OneNight() {

    console.log(oneNight)
    const [current, setCurret] = useState(0)

    function next(){
        if(current < 200){
            setCurret(old => old + 100)
        }
        else{
            setCurret(0)
        }
    }

    function previous(){
        if(current >= 100){
            setCurret(old => old - 100)
        }
        else(setCurret(200))
    }
  return (
    <section className='overflow-x-hidden'>
        <h3>Watch i One Night</h3>
        
        <div className='relative w-full flex justify-center'>
            <div className='text-white h-full text-5xl'>
                <div className="absolute left-0 flex items-center h-full top-0 cursor-pointer border z-10" onClick={previous}>
                    <div className='absolute left-0 h-full w-full z-[5]'></div>
                    <FaAngleLeft />
                </div>
                <div className="absolute right-0 flex items-center h-full top-0 cursor-pointer z-10 backdrop:" onClick={next}><FaAngleRight /></div>
            </div>


            <div className={`flex h-fit w-[95%] transition-all delay-300 duration-300 ease-linear -translate-x-[${current}%]`}>
                {
                    oneNight.map((x, index) => {
                        return <div key={index} className='min-w-[20%] w-1/4'>
                            <img alt='' src={x.imgSrc} className='w-full mr-2'/>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}
