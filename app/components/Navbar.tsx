'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCaretDown, FaCaretUp, FaRegBell, FaBars } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { MdChat } from 'react-icons/md'

export default function Navbar() {

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
    <nav className={`${bg} fixed top-0 left-0 w-full z-50 px-9 h-[65px] flex items-center`}>
        <div className='mr-2 cursor-pointer sm:hidden'><FaBars /></div>
        <div>
            <Image src='/images/netflixText.png' alt='logo' width={105} height={80} />
        </div>

        <div className='hidden sm:block group h-full'>
          <div className='md:hidden ml-2 cursor-pointer h-full flex items-center'>Browse <i className='ml-[2px]'><FaCaretDown /></i></div>
          <ul className='justify-between items-center ml-6 fixed flex-col bg-[#141414] opacity-80 w-[300px] left-10 top-16 py-6 hidden transition-all delay-300 group-hover:flex border-t-2 md:border-t-0 md:h-full md:flex md:py-0 md:text-[13px] lg:text-sm lg:w-[540px] md:w-[450px] md:opacity-100 md:bg-transparent md:flex-row md:static'>
            <li className='-mt-[37px] md:hidden'><FaCaretUp /></li>
            <li className='hover:opacity-75 md:hover:opacity-60 mb-3 md:mb-0'><Link href='/browse'>Home</Link></li>
            <li className='hover:opacity-75 md:hover:opacity-60 mb-3 md:mb-0'><Link href='/tvshows'>TV Shows</Link></li>
            <li className='hover:opacity-75 md:hover:opacity-60 mb-3 md:mb-0'><Link href='/movies'>Movies</Link></li>
            <li className='hover:opacity-75 md:hover:opacity-60 mb-3 md:mb-0'><Link href='/new&popular'>New & Popular</Link></li>
            <li className='hover:opacity-75 md:hover:opacity-60 mb-3 md:mb-0'><Link href='/'>My List</Link></li>
            <li className='hover:opacity-75 md:hover:opacity-60 mb-3 md:mb-0'><Link href='/'>Browse by Languages</Link></li>
          </ul>
        </div>

        <ul className="ml-auto flex items-center text-xl w-[180px] justify-between">
          <Link href='/chat'><li><MdChat /></li></Link>
          <li className='text-2xl'><FiSearch /></li>
          <li className='text-sm'>kids</li>
          <li><FaRegBell /></li>
          <li className='flex items-center'>
            <img src="https://occ-0-5543-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="emoji" />
            <i className='ml-1'><FaCaretDown /></i>
          </li>
        </ul>
    </nav>
  )
}
