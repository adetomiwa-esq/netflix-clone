import React from 'react'

export default function BrowseLang() {
    const languages = ['English', 'Arabic', 'Bengali', 'Cantonese', 'Danish', 'Dutch', 'English', 'Filipino', 'Flemish', 'French', 'German', 'Hindi', 'Indonesian', 'Italian', 'Japanese', 'Korean', 'Lebanese', 'Malay', 'Malayalam', 'Mandarin', 'Marathl', 'Norwegian', 'Polish', 'Portugese', 'Spanish', 'Swedish', 'Tamil', 'Telugu', 'Thai', 'Turkish', 'Vietnamese']
  return (
    <section className='fixed left-0 top-[65px] w-full bg-[rgb(20,20,20)] z-30 px-9 pb-5'>
        <h2 className='text-2xl mb-3'>Browse by Languages</h2>
        <div className="flex items-center flex-wrap">
            <label htmlFor="" className='mr-2'>
                Select Your Preferences
            </label>
            <select name="" id="" className='bg-transparent border w-[230px] px-1 mr-3 py-1'>
                <option className='bg-[#141414] opacity-70' value="">Original Language</option>
                <option className='bg-[#141414] opacity-70' value="">Dubbing</option>
                <option className='bg-[#141414] opacity-70' value="">Subtitles</option>
            </select>

            <select name="" id="" className='bg-transparent border px-1 py-1 w-[230px]'>
                <option className='bg-[#141414] opacity-70' value="">Suggestions for you</option>
                <option className='bg-[#141414] opacity-70' value="">Year Released</option>
                <option className='bg-[#141414] opacity-70' value="">A-Z</option>
                <option className='bg-[#141414] opacity-70' value="">Z-A</option>
            </select>

            <label htmlFor="" className='mx-2'>Sort by</label>
            <select name="" id="" className='bg-transparent border w-[230px] py-1 px-1'>
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
