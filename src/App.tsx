import Alignment from './components/Alignment'
import Audience from './components/Audience'
import Funnel from './components/Funnel'
import Hero from './components/Hero'
import Nav from './components/Nav'
import NextSteps from './components/NextSteps'
import Opportunity from './components/Opportunity'
import Performance from './components/Performance'
import Pricing from './components/Pricing'
import Qualification from './components/Qualification'
import Responsibilities from './components/Responsibilities'
import ROI from './components/ROI'
import SiteFooter from './components/SiteFooter'
import System from './components/System'
import Timeline from './components/Timeline'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Opportunity />
        <Audience />
        <System />
        <Funnel />
        <Responsibilities />
        <Timeline />
        <Performance />
        <ROI />
        <Pricing />
        <Qualification />
        <Alignment />
        <NextSteps />
      </main>
      <SiteFooter />
    </div>
  )
}
