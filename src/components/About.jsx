import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16 px-4 border-t border-gray-300 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 className="text-3xl sm:text-4xl font-bold mb-6" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {t('about_title')}
        </motion.h2>

        <motion.p className="text-lg text-gray-700 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {t('about_paragraph1')}
        </motion.p>

        <motion.p className="text-lg text-gray-700 leading-relaxed mt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          {t('about_paragraph2')}
        </motion.p>
      </div>
    </section>
  )
}
