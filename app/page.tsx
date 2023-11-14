
import Download from './LandingFiles/Download'
import FAQs from './LandingFiles/FAQs'
import Footer from './LandingFiles/Footer'
import KidsSection from './LandingFiles/KidsSection'
import Tv from './LandingFiles/Tv'
import Watch from './LandingFiles/Watch'
import Top from './LandingFiles/top'

export default function Home() {
  return (
    <main>
      <Top />
      <div className="">
        <Tv />
        <Download />
        <Watch />
        <KidsSection />
        <FAQs />
        <Footer />
      </div>
    </main>
  )
}
