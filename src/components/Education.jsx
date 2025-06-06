import { useTranslation } from 'react-i18next'
import TimelineItem from './TimelineItem'

export default function Education() {
  const { t } = useTranslation()

  const timeline = [
    {
      year: '2025',
      title: t('edu_cielterre_title'),
      location: 'Lille',
      description: t('edu_cielterre_desc'),
      link: 'https://www.ciel-et-terre.net/fr/'
    },
    {
      year: '2024',
      title: t('edu_getec_title'),
      location: 'Arras',
      description: t('edu_getec_desc'),
      link: null
    },
    {
      year: '2023',
      title: t('edu_thales_title'),
      location: 'Sophia Antipolis',
      description: t('edu_thales_desc'),
      link: 'https://www.thalesgroup.com'
    },
    {
      year: '2024–2025',
      title: t('edu_uvigo_title'),
      location: 'Vigo, Espagne',
      description: t('edu_uvigo_desc'),
      link: 'https://www.uvigo.gal/'
    },
    {
      year: '2022–2025',
      title: t('edu_polytech_title'),
      location: 'Lille, France',
      description: t('edu_polytech_desc'),
      link: 'https://www.polytech-lille.fr'
    }
  ]

  return (
    <section id="education" className="py-16 px-4 border-t border-gray-300 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{t('education_title')}</h2>
        <div className="space-y-10">
          {timeline.map((item, i) => <TimelineItem key={i} {...item} />)}
        </div>
      </div>
    </section>
  )
}
