import { useEffect, useState } from 'react';

const sections = ['header', 'skills', 'projects', 'education', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-3">
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`font-medium transition ${
                  activeSection === id
                    ? 'text-blue-600 underline underline-offset-4'
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                {id === 'header' ? 'Accueil' :
                 id === 'skills' ? 'Compétences' :
                 id === 'projects' ? 'Projets' :
                 id === 'education' ? 'Parcours' :
                 'Contact'}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
