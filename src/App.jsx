import Navbar from "./components/navbar"
import Analytics from './components/analytics'
import Newsletter from './components/newsletter'
import Cards from './components/cards'
import Hero from './components/hero'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default App
