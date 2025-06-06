import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()

  const skillGroups = [
    { category: t('skills_cad'), skills: ['Catia', 'Creo', 'Fusion 360', 'TopSolid'] },
    { category: t('skills_simulation'), skills: ['Ansys', 'RDM7'] },
    { category: t('skills_prototyping'), skills: ['Usinage', 'Tôlerie', 'Soudure', 'Impression 3D'] },
    { category: t('skills_programming'), skills: ['Python', 'GitHub', 'Tkinter', 'Jupyter'] }
  ]

  return (
    <section id="skills" className="py-16 px-4 border-t border-gray-300 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{t('skills_title')}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{group.category}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {group.skills.map((skill, j) => <li key={j}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
