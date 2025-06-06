export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-center gap-6">
      <a href="#header" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</a>
      <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium">Compétences</a>
      <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium">Projets</a>
      <a href="#education" className="text-gray-700 hover:text-blue-600 font-medium">Parcours</a>
      <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
    </nav>
  );
}
