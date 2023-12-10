import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import { oneNight, trendingNow } from '../components/MockData';
import Footer from '../components/Footer';
import Row from '../components/Row';

export default function page() {
  console.log(trendingNow)
  console.log('hello')
  return (
    <main className='overflow-x-hidden'>
        <Navbar />
        <Banner />
        <div className='-mt-16'>
          <Row title='One Night'  movies={oneNight}/>
          <Row title='Exciting movies' movies={trendingNow} />
          <Row title='New release' movies={trendingNow} />
        </div>
        <Footer />
    </main>
  )
}
