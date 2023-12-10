'use client'
import React, { useEffect, useState } from 'react'
import { PiSquaresFourFill } from 'react-icons/pi'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'

export default function Top() {
    const languages = ['English', 'Arabic', 'Bengali', 'Cantonese', 'Danish', 'Dutch', 'English', 'Filipino', 'Flemish', 'French', 'German', 'Hindi', 'Indonesian', 'Italian', 'Japanese', 'Korean', 'Lebanese', 'Malay', 'Malayalam', 'Mandarin', 'Marathl', 'Norwegian', 'Polish', 'Portugese', 'Spanish', 'Swedish', 'Tamil', 'Telugu', 'Thai', 'Turkish', 'Vietnamese']

    const [bg, setBg] = useState('')
  function setNavbarBg(){
    if(window.scrollY > 10){
      setBg('bg-[rgb(20,20,20)]')
    }
    else{setBg('')}
  }

  useEffect(() => {
    window.addEventListener('scroll', setNavbarBg)

    const body = document.querySelector('body')

    if(Number(body?.getBoundingClientRect().top) < -8 ){
      setBg('bg-[rgb(20,20,20)]')
    }
    else{setBg('')}
        // const end = posters[posters.length-1]?.getBoundingClientRect().right
  }, [])
  return (
    <section className={`fixed left-0 top-[65px] w-full ${bg} z-30 px-9 flex items-center justify-between`}>
        <div className="flex items-center">
            <h2 className='text-4xl mr-7'>TV Shows</h2>
            <select name="" id="" className='bg-transparent border w-[100px] px-1 mr-3 py-1 text-sm'>
                <option className='bg-[#141414] opacity-70' value="">Genre</option>
                <option className='bg-[#141414] opacity-70' value="">Dubbing</option>
                <option className='bg-[#141414] opacity-70' value="">Subtitles</option>
            </select>
        </div>
        <div className="flex items-center">
            <div className='border py-1 px-2'><HiMiniBars3CenterLeft /></div>
            <div className='border py-1 px-3'><PiSquaresFourFill /></div>
        </div>
    </section>
  )
}
