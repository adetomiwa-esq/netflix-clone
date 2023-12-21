'use client'
import Image from 'next/image'
import { oneNight } from './MockData';
import { FaAngleLeft, FaAngleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Props{
    movies: {
        imgSrc: string
    }[],
    title: string
} 


export default function Row({movies, title} : Props) {
    const Movies = movies
    const Title = title
    

    const [current, setCurrent] = useState<any>(0)

    const [imgEnd, setImgEnd] = useState(0)

    
// console.log(movies)
    // function previous(){
    //     if(current >= 100){
    //         setCurret(old => old - 100)
    //     }
    //     else(setCurret(200))
    // }

    const [currentScreenWidth, setCurrentScreenWidth] = useState(0)

    

    useEffect(() => {
        const posters = document.querySelectorAll('.row_poster')
        const end = posters[posters.length-1]?.getBoundingClientRect().right

        
        setImgEnd(+end)
        console.log(end)
        

        setCurrentScreenWidth(window.innerWidth)
        console.log(currentScreenWidth)

        window.addEventListener('resize', changeScreenSize)
        
    }, [currentScreenWidth])

    function changeScreenSize(){
        setCurrentScreenWidth(window.innerWidth)
    }

    const [transform, setTransform] = useState<string>('')

    function next(){


        if(current < imgEnd){
            setCurrent((prev: any) => (prev + currentScreenWidth))
            
        }
        if(current > (imgEnd - current)){
            setCurrent(0)
        }
        
        
    }
    console.log(current)
  return (
    <section className='overflow-x-hidde  mt-5'>
        <Link href='/' className='pl-[20px] text-lg flex items-center h-8 group w-fit'>{Title}<span className='text-sm w-0 overflow-x-hidden block group-hover:w-fit ease-in-out transition-all duration-1000 delay-300 ml-1'>Explore All</span></Link>
        
        {/* <div className='relative w-full flex justify-center'>
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
        </div> */}

        <div className='relative group w-fit'>
            <div className="absolute right-0 flex items-center justify-center text-2xl w-9 h-full top-0 cursor-pointer z-10 opacity-0 group-hover:opacity-100" onClick={next}>
                <div className="w-full h-[100%] opacity-[9.5] bg-[#13121286] absolute right-0 z-[12]"></div>
                <FaChevronRight />
            </div>

            <div className="absolute left-0 flex items-center justify-center text-2xl w-9 h-full top-0 cursor-pointer z-10 opacity-0 group-hover:opacity-100" onClick={next}>
                <div className="w-full h-[100%] opacity-[9] bg-[#13121286] absolute right-0 z-[12]"></div>
                <FaChevronLeft />
            </div>

            <div
                className="row_posters"
                style={{transform: `translateX(-${current}px)`}}
            >

                {
                    Movies.map((x, index) => (
                        <Link href="/nowplaying" key={index} className={`row_poster`}>
                            <img
                            className={`w-full`}
                            src={x.imgSrc} 
                            alt='' />
                        </Link>
                        
                    ))
                }

            </div>
        </div>
    </section>
  )
}
