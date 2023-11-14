"use client"
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { Questions } from './MockData'

export default function FAQs() {
    const answeredQuestions = Questions
    const [viewAns, setViewAns] = useState<any>(null)
    const [previousId, setPreviousId] = useState<any>()

    function toggleExpansion(id: number){
        // setAnsweredQuestions(prevValue => prevValue.map((x, index) => {
        //     return index ===id ? {...x, expand: !x.expand} : {...x, expand: false}
        // }))

        if(previousId == id){
            if(viewAns == null){
                return setViewAns(id)
            }
            return setViewAns(null)
        }else{
            setPreviousId(id)
        }
        

        if(viewAns == null){
            setViewAns(null)
        }

        setViewAns(id)
    }

  return (
    <section className='mt-2 bg-black px-[5%] lg:px-[12%] py-16'>
        <h1 className='text-center text-[42px] font-bold mb-6'>FREQUENTLY ASKED QUESTIONS</h1>

        <div>
        {
                answeredQuestions.map((question, index) => {
                    return <div
                    className='cursor-pointer my-3 text-[25px]'
                    key={index}
                    onClick={() => toggleExpansion(index)}>
                        <div className={`flex items-center justify-between mb-[2.5px] py-5 px-5 bg-zinc-800 hover:bg-zinc-700`}>
                            <h1 className=''>{question.question}</h1>
                            <i className="cursor-pointer">{viewAns === index ? <AiOutlineClose /> : <AiOutlinePlus />}</i>
                        </div>
                        <div className={`bg-zinc-800 mb-3 overflow-y-hidden transition-[height] ease-in-out delay-1000 duration-1000 ${viewAns === index ? 'h-fit px-4 pb-4' : 'h-0 transition-[height] ease-in-out delay-1000 duration-1000'}`}>
                            {question.answers.map((ans, index) => {
                                return <p key={index} className='mt-6'>{ans}</p>
                            })}
                        </div>
                        <div className='nav-link-line'></div>
                    </div>
                })
            }
        </div>
    </section>
  )
}
