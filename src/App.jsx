import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <main
    className='body-front text-gray-400 bg-black'>
      
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default App
