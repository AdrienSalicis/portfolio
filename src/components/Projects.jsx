export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-gray-300">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 border-b pb-2 border-gray-200">Projets</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold">WindDatas (2025)</h3>
          <p>Projet personnel de collecte et comparaison de données météo issues de stations réelles et d'APIs. Python, Jupyter, Tkinter, analyse statistique.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Vélomobile Low-Tech (2024)</h3>
          <p>Tricycle tandem low-tech modélisé sous Catia. Projet d’innovation durable.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Stage R&D – Ciel & Terre (2025)</h3>
          <p>Étude d’une centrale solaire flottante. Développement d’outils de dimensionnement.</p>
        </div>
      </div>
    </section>
  )
}
