import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const sections = ['header', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('header')
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      for (let id of sections) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(id)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLabels = {
    header: t('navbar_accueil'),
    skills: t('navbar_competences'),
    projects: t('navbar_projets'),
    education: t('navbar_parcours'),
    contact: t('navbar_contact'),
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-3">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Menu principal */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base mb-2 sm:mb-0">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`font-medium transition ${
                  activeSection === id
                    ? 'text-blue-600 underline underline-offset-4'
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                {navLabels[id]}
              </a>
            </li>
          ))}
        </ul>

        {/* Sélecteur de langue */}
        <div className="flex justify-center gap-4 text-sm">
          <button
            onClick={() => i18n.changeLanguage('fr')}
            className={`font-medium ${
              i18n.language === 'fr' ? 'text-blue-600 underline' : 'text-gray-700 hover:text-blue-500'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`font-medium ${
              i18n.language === 'en' ? 'text-blue-600 underline' : 'text-gray-700 hover:text-blue-500'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}
