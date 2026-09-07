import { Header } from "./components/Header"
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Metrics } from './components/Metrics'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsappFloat'

function App() {

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Metrics />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
