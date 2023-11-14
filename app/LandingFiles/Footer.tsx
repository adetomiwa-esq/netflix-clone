import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-2 bg-black px-[5%] lg:px-[12%] py-16 text-red-500'>
        <div className='mb-4'><Link className='underline text-zinc-300' href='/'>Quesions? contact us.</Link></div>

        <div className="flex">
            <div className="w-3/12">
                <Link className='underline block mb-4 text-zinc-300' href="/">FAQ</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Investor Relations</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Privacy</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Speed Test</Link>
            </div>

            <div className="w-3/12">
                <Link className='underline block mb-4 text-zinc-300' href="/">Help Center</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Jobs</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Cookie Preferences</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Legal Notices</Link>
            </div>

            <div className="w-3/12">
                <Link className='underline block mb-4 text-zinc-300' href="/">Account</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Ways to watch</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Corporate Information</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Only on Netflix</Link>
            </div>

            <div className="w-3/12">
                <Link className='underline block mb-4 text-zinc-300' href="/">Media Center</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Terms of use</Link>
                <Link className='underline block mb-4 text-zinc-300' href="/">Contact Us</Link>
            </div>

        </div>
    </footer>
  )
}
