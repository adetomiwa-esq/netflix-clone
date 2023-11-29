import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCaretDown, FaRegBell } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 px-9 py-5 flex items-center'>
        <div>
            <Image src='/images/netflixText.png' alt='logo' width={105} height={80} />
        </div>

        <ul className='flex w-[540px] justify-between items-center ml-6 text-sm'>
          <li className='hover:opacity-60'><Link href='/'>Home</Link></li>
          <li className='hover:opacity-60'><Link href='/'>TV Shows</Link></li>
          <li className='hover:opacity-60'><Link href='/'>Movies</Link></li>
          <li className='hover:opacity-60'><Link href='/'>New & Popular</Link></li>
          <li className='hover:opacity-60'><Link href='/'>My List</Link></li>
          <li className='hover:opacity-60'><Link href='/'>Browse by Languages</Link></li>
        </ul>

        <ul className="ml-auto flex items-center text-xl w-[160px] justify-between">
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
