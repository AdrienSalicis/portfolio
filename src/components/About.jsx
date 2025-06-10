import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16 px-4 border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">{t('about.title')}</h2>
        <motion.p
          className="text-lg leading-relaxed text-gray-700 text-justify"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('about.description')}
        </motion.p>
      </div>
    </section>
  )
}
