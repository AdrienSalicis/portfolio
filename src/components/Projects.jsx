import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('project_winddatas_title'),
      year: 2025,
      description: t('project_winddatas_desc'),
      techs: ['Python', 'APIs', 'Jupyter', 'Pandas'],
      link: null
    },
    {
      title: t('project_robotarm_title'),
      year: 2022,
      description: t('project_robotarm_desc'),
      techs: ['Arduino', 'Impression 3D', 'Modélisation 3D'],
      link: 'https://github.com/AdrienSalicis/Projet-Arduino'
    },
    {
      title: t('project_cabletransport_title'),
      year: 2023,
      description: t('project_cabletransport_desc'),
      techs: ['CAO', 'Jet d’eau', 'Usinage', 'Teamwork'],
      link: null
    },
    {
      title: t('project_velomobile_title'),
      year: 2024,
      description: t('project_velomobile_desc'),
      techs: ['Catia', 'Low-Tech', 'Éco-conception'],
      link: null
    },
    {
      title: t('project_lowtech_workshops_title'),
      year: '2023–2024',
      description: t('project_lowtech_workshops_desc'),
      techs: ['Animation', 'Pédagogie', 'Engagement'],
      link: null
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 border-t border-gray-300 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{t('projects_title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => <ProjectCard key={i} {...project} />)}
        </div>
      </div>
    </section>
  )
}
