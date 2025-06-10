import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Header() {
  const { t } = useTranslation()

  return (
    <section id="header" className="relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center">
      <img src="/lac-header.jpg" alt="background" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      <div className="relative z-10 text-white px-4 text-center max-w-4xl">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">{t('header_title')}</motion.h1>
        <motion.p className="text-lg md:text-2xl mb-8">{t('header_subtitle')}</motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-xl">
            {t('see_projects')}
          </a>
          <a href="/CV_Adrien_Salicis.pdf" download className="px-6 py-3 bg-white text-gray-900 rounded-xl">
            {t('download_cv')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
