import React from 'react'
import Navbar from '../components/Navbar'
import { foreign, faves } from './data'
import Footer from '../components/Footer';
import Row from '../components/Row';

export default function page() {
  // https://occ-0-5544-299.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfFU2J-v7XCYysMgGbxPRpUMFbZlzASEFmuGj-t3mTCpelWoVqkjsH3g3EJvX_OV9qmpKb0NL1zEh3TQ6aH4jT__yLxWChEw-9VKKXNa0Uy9qVmyAOPXqg2g90RrSJdAtRzN.jpg?r=1a1
  return (
    <main className='overflow-x-hidden'>
        <Navbar />
        <div className='mt-28'>
          <h1 className='mb-[70px] text-3xl pl-[25px]'>My List</h1>
          <Row title='' movies={faves} />
          <Row title='Top rated foreign specials from chat room' movies={foreign} />
        </div>
        <Footer />
    </main>
  )
}
