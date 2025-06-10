import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-100 text-gray-700 py-6 border-t mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">{t('footer.madeBy')}</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/AdrienSalicis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/adrien-salicis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}
