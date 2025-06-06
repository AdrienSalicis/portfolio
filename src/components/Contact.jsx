export default function Contact() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">📢 Contact</h2>
      <p>Email : <a href="mailto:adrien.salicis@icloud.com" className="text-blue-600 underline">adrien.salicis@icloud.com</a></p>
      <p>Téléphone : 07 81 76 46 09</p>
      <p>LinkedIn : <a href="https://www.linkedin.com/in/adrien-salicis" className="text-blue-600 underline">linkedin.com/in/adrien-salicis</a></p>

      <div className="mt-6">
        <a
          href="/CV_Adrien_Salicis.pdf"
          download
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          📄 Télécharger mon CV
        </a>
      </div>
    </section>
  )
}
