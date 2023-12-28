import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SelectAccount() {
  return (
    <section className={`w-full min-h-[100svh] bg-black z-[900] flex justify-center items-center py-6 px-3`}>
        <div className=''>
            <h1 className='text-center text-2xl lg:text-6xl mb-6'>{`Who's watching`}</h1>
            <div className="flex items-center justify-between gap-3 text-center flex-wrap w-[280px] md:w-fit">
                <Link href='/browse' className=''>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8FZbHEhCRQDMYUCaM32SutP1OwIbtIbbtj4rbr_wYdLrVtxy" alt="" className='h-[130px] w-[130px] hover:border-2 rounded-md'/>
                    <p>Eloho</p>
                </Link>

                <Link href='/browse'>
                    <Image src='/images/icon1.jpeg' alt='' width={100} height={100} className='h-[130px] hover:border-2 rounded-md w-[130px]'/>
                    <p>Jane</p>
                </Link>

                <Link href='/browse'>
                <Image src='/images/icon4.png' alt='' width={100} height={100} className='h-[130px] w-[130px] hover:border-2 rounded-md'/>
                    <p>Princess</p>
                </Link>

                <Link href='/browse'>
                    <Image src='/images/icon3.png' alt='' width={100} height={100} className='h-[130px] w-[130px] hover:border-2 rounded-md'/>
                    <p>Sharon</p>
                </Link>

                <Link href='/browse'>
                    <Image src='/images/icon2.png' alt='' width={100} height={100} className='h-[130px] hover:border-2 rounded-md w-[130px]'/>
                    <p>kids</p>
                </Link>

            </div>

            <button className='border block mx-auto mt-8 px-5 py-2'>Manage profile</button>
        </div>
    </section>
  )
}
