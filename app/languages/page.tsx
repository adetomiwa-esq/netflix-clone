import React from 'react'
import Navbar from '../components/Navbar'
import { oneNight, trendingNow, newAndPopular } from '../components/MockData';
import Footer from '../components/Footer';
import Row from '../components/Row';
import BrowseLang from './BrowseLang';

export default function page() {
  console.log(trendingNow)
  console.log('hello')
  return (
    <main className='overflow-x-hidden'>
        <Navbar />
        <BrowseLang />
        <div className='mt-[200px]'>
            <Row title='New on Netflix' movies={newAndPopular} />
          <Row title='One Night'  movies={oneNight}/>
          <Row title='Exciting movies' movies={trendingNow} />
          <Row title='New release' movies={trendingNow} />
        </div>
        <Footer />
    </main>
  )
}
