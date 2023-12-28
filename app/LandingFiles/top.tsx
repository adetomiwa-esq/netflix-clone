import Link from 'next/link'
import background from '../../public/images/netflixBackground.jpg'
import Image from 'next/image'

export default function Top() {
  return (
    <section className="h-[450px] md:h-screen w-full relative">
      <Image src="/images/netflixBackground.jpg" width={1200} height={900} alt='background' className='brightness-[0.4] absolute w-full h-full top-0 left-0 -z-[1]'/> 

      <header className='flex justify-between items-center px-4 md:px-[8%] h-20'>
        <Image src='/images/text-logo.png' alt='logo' width={200} height={100} className='w-[100px] sm:w-[180px]' />

        <Link href='/login'><button className='px-2 rounded-sm bg-red-500 text-white'>Sign In</button></Link>
      </header>

      <div className='md:h-[calc(100vh-80px)] flex items-center text-center pt-5 sm:pt-12'>
        <div className='w-full'>
          <h1 className='text-3xl font-bold mb-3 md:mb-5 sm:text-4xl md:text-5xl'>Unlimited movies, TV shows, and more</h1>
          <p className='text-2xl mb-2 sm:mb-8'>Watch anywhere. Cancel anytime</p>
          <p className='text-xl mb-2'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex items-center justify-center mt-4 flex-col sm:flex-row">
            <input
              type="text"
              name="" id=""
              placeholder='Email address'
              className='border-[1px] border-zinc-400 rounded-md py-[13px] px-3  w-8/12 mb-2 text-sm mr-4 bg-transparent text-white sm:mb-0  md:w-96'
            />
            <Link href='/select-account'>
              <button className='bg-red-600 text-white px-6 py-2 text-[22px] rounded-md font-bold'>Get Started</button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
