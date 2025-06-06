import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10">
      <Header />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
