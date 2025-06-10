import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()

  const skills = [
    {
      category: t('skills_cad'),
      items: ['Catia', 'Fusion 360', 'TopSolid', 'Creo', 'BySoft']
    },
    {
      category: t('skills_simulation'),
      items: ['Ansys', 'RDM7']
    },
    {
      category: t('skills_prototyping'),
      items: ['Impression 3D', 'Usinage', 'Soudure', 'Tôlerie']
    },
    {
      category: t('skills_programming'),
      items: ['Python', 'GitHub', 'Office', 'TopSolid ERP']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 border-t border-b">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t('skills_title')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-4">{group.category}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {group.items.map((item, i) => (
                  <li key={i} className="border-b pb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
