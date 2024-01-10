'use client'
import React, { useEffect, useState } from 'react'
import { ratings } from './Ratings'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { BsEmojiSmile, BsFillSendFill } from 'react-icons/bs'

function ChatSection() {
    const [select, setSelect] = useState(0)
    
    const [allRatings, setAllRatings] = useState([...ratings])

    const [myReview, setMyReview] = useState({
        img: 'https://occ-0-5543-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229',
        name: 'Janet',
        rating: 0,
        review: '',
        original: true
    })


    function createReview(e: any){
        setMyReview(prev => {
            return {...prev, review: e.target.value}
        })
    }

    const [modal, setModal] = useState(false)

    function displayRatingModal(){
        setModal(true)
    }

    function updateRating(i: number){
        setSelect(i + 1)
        const num = i + 1
        setMyReview(prev => {
            return {...prev, rating: num}
        })
        setTimeout(function(){
            setModal(false)
        }, 1000)


        // setTimeout(function(){
        //     run()
        // }, 1000)
    }

    function sendMyReview(){
        console.log(myReview)
        setAllRatings(prev => {
            return [...prev, myReview]
        })

        setMyReview({
            img: 'https://occ-0-5543-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229',
            name: 'Janet',
            rating: 1,
            review: '',
            original: true
        })
    }
    
    useEffect(() => {
        const body = document.querySelector('.body')
        // ts-ignore
        body?.addEventListener('click', screenFunc)

        function screenFunc(e: any){
            if(!(e.target.classList.contains('hello'))){
                setModal(false)
            }
            // alert('hello')
        }
    }, [])
  return (
    <section className='body h-[calc(100vh-114px)]'>
        <div className="flex h-full">
            <div className='h-full overflow-y-scroll w-full pb-[80px] px-2 md:w-[250px] lg:w-[350px] md:pb-2'>
                {
                    allRatings.map((rating, i) => (
                        <div key={i} className='flex px-4 py-4 border-b'>
                            <img
                                src={rating.img}
                                alt=""
                                className='rounded-full w-10 h-10 mr-2'
                            />

                            <div className='w-[calc(100%-50px)]'>
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
                                <p className='bg-blue-950 rounded-lg p-3 text-sm mt-2 md:hidden'>{rating.review}</p>
                            </div>
                        </div>
                    ))
                }

                <div className='fixed bottom-0 left-0 w-full h-[80px] border-t text-lg flex items-center justify-between px-1 z-10 bg-[#141414] md:hidden'>
                    <div className='border p-2 rounded-md hover:text-red-500 hover:bg-white' onClick={displayRatingModal}><FaStar /></div>
                    <input
                        type="text"
                        placeholder='review movie'
                        className='w-10/12 border bg-transparent py-3 px-3 rounded-md'
                        value={myReview.review}
                        name='review'
                        onChange={createReview}
                    />
                    <button className='border p-2 rounded-md hover:text-red-500 hover:bg-white' disabled={!myReview.review ? true : false} onClick={sendMyReview}><BsFillSendFill /></button>
                </div>

            </div>

            <div className={`hello text-3xl fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-red-500 py-5 px-12 rounded-lg z-50 ${modal ? 'block' : 'hidden'}`}>
                <h1 className='text-center mb-4'>Rate Movie</h1>
                <div className="flex items-center justify-center gap-1">
                    {
                        [...Array(5)].map((x, i) => (
                          <i key={i} onClick={() => updateRating(i)}>
                            {i >= select ? <FaRegStar /> : <FaStar />}
                          </i>
                        ))
                    }
                </div>
            </div>

            <div className='hidden md:block w-[calc(100%-250px)] lg:w-[calc(100%-350px)] relative border h-full'>
                <div className='h-full pb-[84px] pt-4 overflow-y-scroll px-3'>
                    {
                        allRatings.map((rating, i) => (
                            <div key={i} className={`mb-6 w-3/6 ${rating.original ? 'ml-auto' : '' }`}>
                                <div className={`${rating.original ? 'justify-end' : ''} flex items-center mb-2`}>
                                    <img
                                        src={rating.img}
                                        alt=""
                                        className='rounded-full w-7 h-7 mr-2'
                                    />
                                    <p>{rating.name}</p>

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
                                <p className={`${rating.original ? 'bg-red-500 ml-auto' : 'bg-blue-950'} rounded-lg p-3 text-sm`}>{rating.review}</p>
                            </div>
                        ))
                    }
                </div>


                <div className='absolute bottom-0 left-0 w-full h-[80px] border-t text-lg flex items-center justify-between px-4 z-10 bg-[#141414]'>
                    <div className='border p-2 rounded-md hover:text-red-500 hover:bg-white relative' onClick={displayRatingModal}><FaStar /> <span className="absolute top-0 right-0 text-xs">{myReview.rating}</span></div>
                    <input
                        type="text"
                        placeholder='review movie'
                        className='w-10/12 border bg-transparent py-3 px-3 rounded-md'
                        value={myReview.review}
                        name='review'
                        onChange={createReview}
                    />
                    <button className='border p-2 rounded-md hover:text-red-500 hover:bg-white' disabled={!myReview.review ? true : false} onClick={sendMyReview}><BsFillSendFill /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChatSection
