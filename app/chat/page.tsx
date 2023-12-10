import React from 'react'
import Navbar from '../components/Navbar'
import { oneNight, trendingNow } from '../components/MockData';
import Footer from '../components/Footer';
import Row from '../components/Row';
import Top from './Top';
import ChatSection from './ChatSection';

export default function page() {
  console.log(trendingNow)
  console.log('hello')
  return (
    <main className='overflow-x-hidden'>
        <Navbar />
        <Top />
        <div className=''>
          <ChatSection />
        </div>
    </main>
  )
}
