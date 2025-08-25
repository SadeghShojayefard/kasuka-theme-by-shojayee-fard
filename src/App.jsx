import { useState } from 'react'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Team from './Components/Team/Team'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
