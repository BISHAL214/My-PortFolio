import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Loader from './Components/Loader'
import { useEffect, useState } from 'react'
import ParticlesBg from './Components/ParticlesBg' 


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <main className='body-front text-gray-400 bg-black'>

      {
        loading ? 
        <Loader 
        />
        :

        <>

          <div>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
          <ParticlesBg />
        </>

      }



    </main>
  )
}

export default App
