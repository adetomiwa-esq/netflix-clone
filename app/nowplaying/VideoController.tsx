import React from 'react';
import {  RiForward10Fill, RiReplay10Fill } from 'react-icons/ri'
import {  GrBackTen } from 'react-icons/gr'
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { MdOutlinePause, MdOutlineReplay10 } from 'react-icons/md';
import { CgStack } from 'react-icons/cg';
import { PiChatCenteredThin } from 'react-icons/pi';
import { SiSpeedtest } from 'react-icons/si';
import { AiOutlineExpand } from 'react-icons/ai';

function VideoController() {
  return (
    <section className='absolute bottom-0 h-[100px] w-full px-8 opacity-0 group-hover:opacity-100'>
        <div className='h-[2px] bg-white relative mb-4'>
            <div className='bg-red-500 w-3 h-3 rounded-full absolute top-1/2 -translate-y-1/2'></div>
        </div>

        <div className='flex justify-between text-[42px]'>
            <div className='text-white flex items-center gap-5'>
                <i className='hover:scale-150'><MdOutlinePause /></i>
                <i className='hover:scale-150'><RiReplay10Fill /></i>
                <i className='hover:scale-150'><RiForward10Fill /></i>
                <i className='hover:scale-150'><HiOutlineSpeakerWave /></i>
            </div>

            <div className='flex gap-5'>
                <i className='hover:scale-150'><CgStack /></i>
                <i className='hover:scale-150'><PiChatCenteredThin /></i>
                <i className='hover:scale-150'><SiSpeedtest /></i>
                <i className='hover:scale-150'><AiOutlineExpand /></i>
            </div>
        </div>
    </section>
  )
}

export default VideoController