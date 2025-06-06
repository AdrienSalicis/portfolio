import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <div className="p-4 md:p-10">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

