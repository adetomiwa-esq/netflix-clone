import React from 'react'
import { ratings } from './Ratings'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { BsFillSendFill } from 'react-icons/bs'

function ChatSection() {
  return (
    <section className='h-[calc(100vh-114px)] border'>
        <div className="flex h-full">
            <div className='h-full overflow-y-scroll w-[350px]'>
                {
                    ratings.map((rating, i) => (
                        <div key={i} className='flex px-4 py-4 border-b'>
                            <img
                                src={rating.img}
                                alt=""
                                className='rounded-full w-10 h-10 mr-2'
                            />

                            <div>
                                <h1>{rating.name}</h1>
                                <div className='flex items-center'>
                                    <div className='flex items-center'>
                                        {
                                            [...Array(rating.rating)].map((x, i) => (
                                                <i key={i} className='text-red-600'><FaStar /></i>
                                            ))
                                        }
                                    </div>
                                    <div className='flex items-center'>
                                        {
                                            [...Array(5 - rating.rating)].map((x, i) => (
                                                <i key={i} className='text-red-600'><FaRegStar /></i>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className='w-[calc(100%-350px)] relative border border-red-500 h-full flex justify-between'>
                <div className='absolute bottom-0 left-0 w-full h-[80px] border-t'>
                    <div></div>
                    <input
                        type="text"
                        placeholder='review movie'
                        className='w-8/12 border bg-transparent py-3 px-3'
                    />
                    <div></div>
                    <button><BsFillSendFill /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChatSection
