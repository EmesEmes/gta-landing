import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
      </div>
    </main>
  )
}

export default App