import React from 'react'
import Image from 'next/image'

export default function KidsSection() {
  return (
    <section className='mt-2 flex bg-black items-center px-8 md:px-[12%] py-16 flex-col-reverse md:flex-row'>
        <div className='md:w-6/12'>
            <img src="https://occ-0-5543-768.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" height={50} width={50} alt='' className='w-full' />
        </div>

        <div className="md:w-6/12">
            <h1 className='text-5xl leading-[54px] font-bold mb-3'>Create profiles for kids</h1>
            <p className='text-2xl'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
    </section>
  )
}
