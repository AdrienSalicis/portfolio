import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Header() {
  const { t } = useTranslation()

  return (
    <section id="header" className="relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Image de fond */}
      <img src={`${import.meta.env.BASE_URL}lac-header.jpg`} alt="background" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Contenu principal */}
      <div className="relative z-10 text-white px-4 text-center max-w-4xl">
        <motion.div
          className="flex flex-col items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Adrien Salicis"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold">{t('header_title')}</h1>
          <p className="text-lg md:text-2xl">{t('header_subtitle')}</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
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
