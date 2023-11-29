import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <main className='bg-black min-h-screen'>
        <form action="" className='mx-auto lg:w-[300px] mb-24'>
            <h2 className='text-3xl font-bold mb-8'>Sign In</h2>
            <section>
                <input type="text" name="email" placeholder='Email or phone number' className='block w-full bg-zinc-800 py-4 px-4 rounded-md mb-4' />
                <input type="password" name="password" id="" placeholder='password' className='block w-full bg-zinc-800 py-4 px-4 rounded-md'/>
                <button className="bg-red-600 rounded-md w-full mt-12 py-3">Sign In</button>

                <div className='flex justify-between text-zinc-400 text-sm mt-4'>
                    <div>
                        <input type="checkbox" name="" id="" checked  className='text-blue-600'/>
                        <span>Remember me</span>
                    </div>

                    <Link href='/'>Need help</Link>
                </div>
            </section>

            <div className='text-zinc-400 mt-16 text-sm'>
                <p className='mb-3'>
                    <span>New to Netflix?</span><Link href='/' className='text-white text-base'>Sign up now</Link>
                </p>

                <p className='text-[12px]'>{`This page is protected by Google reCAPTCHA to ensure you're not a bot.`}<Link href='/' className='text-blue-600'>Learn more.</Link>
                </p>
            </div>
        </form>

        <footer className='text-zinc-400 pl-[11%] pr-[8%] py-10'>
            <div className='mb-7'>Questions? Contact us</div>
            <div className='flex flex-wrap text-[12px]'>
                <div className='w-1/4'>
                    <Link className='block mb-3' href="">FAQ</Link>
                    <Link className='block' href="">Cookie Preferences</Link>
                </div>
                <div className='w-1/4'>
                    <Link className='block mb-3' href="">Help Center</Link>
                    <Link className='block' href="">Corporate Information</Link>
                </div>
                <div className='w-1/4'>
                    <Link className='block' href='/'>Terms of use</Link>
                </div>
                <div className='w-1/4'>
                    <Link className='block' href='/'>Privacy</Link>
                </div>
            </div>
        </footer>
    </main>
  )
}
