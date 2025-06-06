export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 border-t border-gray-300 mt-12">
      <div className="mb-2">
        Site développé par <span className="font-semibold">Adrien Salicis</span> © {currentYear}
      </div>
      <div className="space-x-4">
        <a
          href="https://www.linkedin.com/in/adrien-salicis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AdrienSalicis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
