import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-16 px-4 border-t border-gray-300 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('contact_title')}</h2>
      <p className="mb-2">{t('contact_email')}: <a href="mailto:adrien.salicis@icloud.com" className="text-blue-600 underline">adrien.salicis@icloud.com</a></p>
      <p className="mb-2">{t('contact_phone')}: 07 81 76 46 09</p>
      <p>
        <a href="https://www.linkedin.com/in/adrien-salicis" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mr-4">LinkedIn</a>
        <a href="https://github.com/AdrienSalicis" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
      </p>
    </section>
  )
}
