import background from '../../public/images/netflixBackground.jpg'
import Image from 'next/image'

export default function Top() {
  return (
    <section className="h-screen w-full">
      <Image src="/images/netflixBackground.jpg" fill={true} alt='background' className='brightness-[0.4] absolute w-full h-full top-0 left-0 -z-[1]'/> 

      <header className='flex justify-between items-center px-[8%] h-20'>
        <div className='text-red-500 text-5xl font-bold' style={{borderRadius: '50%/100px 100px 0 0'}}>NETFLIX</div>

        <button className='px-2 rounded-sm bg-red-500 text-white'>Sign In</button>
      </header>

      <div className='h-[calc(100vh-80px)] flex items-center text-center pt-12'>
        <div className='w-full'>
          <h1 className='text-5xl font-bold mb-5'>Unlimited movies, TV shows, and more</h1>
          <p className='text-2xl mb-8'>Watch anywhere. Cancel anytime</p>
          <p className='text-xl mb-2'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex items-center justify-center mt-4">
            <input
              type="text"
              name="" id=""
              placeholder='Email address'
              className='border-[1px] border-zinc-400 rounded-md py-[13px] px-3 w-96 text-sm mr-4 bg-transparent text-white'
            />
            <button className='bg-red-600 text-white px-6 py-2 text-[22px] rounded-md font-bold'>Get Started</button>
          </div>
        </div>

      </div>
    </section>
  )
}
