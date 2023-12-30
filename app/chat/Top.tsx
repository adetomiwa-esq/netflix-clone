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
    <section className={`mt-[64px] min-h-[50px] w-full ${bg} z-30 px-2 flex items-center md:justify-between sm:px-9 flex-wrap`}>
        <div className="flex items-center flex-wrap mb-2 sm:mb-0">
            <h2 className='text-2xl mr-2 md:text-4xl sm:mr-7'>Chat Room</h2>
            <select name="" id="" className='bg-transparent border px-1 mr-3 py-1 text-sm mb-2 sm:mb-0'>
                <option className='bg-[#141414] opacity-70' value="">Genre</option>
                <option className='bg-[#141414] opacity-70' value="">Dubbing</option>
                <option className='bg-[#141414] opacity-70' value="">Subtitles</option>
            </select>

            <div className="flex items-center mb-2 sm:mb-0 mr-2">
              <p className='mr-1'>select preferred Language</p>
              <select name="" id="" className='bg-transparent border py-1 px-1'>
                {
                    languages.map((lang, index) => (
                        <option className='bg-[#141414] opacity-70' key={index} value="">{lang}</option>
                    ))
                }
              </select>
            </div>

            <select name="" id="" className='bg-transparent border py-1 px-1 mb-2 sm:mb-0'>
              <option className='bg-[#141414] opacity-70'value="">Select Movie</option>
            </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="" className='mr-2 sm:mx-2'>Sort by</label>
          <select name="" id="" className='bg-transparent border py-1 px-1'>
              {
                  languages.map((lang, index) => (
                      <option className='bg-[#141414] opacity-70' key={index} value="">{lang}</option>
                  ))
              }
          </select>
        </div>
    </section>
  )
}
