import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Safety from './components/Safety'
import Pricing from './components/Pricing'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Safety />
      <Pricing />
      <Download />
      <Footer />
    </div>
  )
}
