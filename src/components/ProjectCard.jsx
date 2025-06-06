import { motion } from 'framer-motion';

export default function ProjectCard({ title, year, description, techs, image, link }) {
  return (
    <motion.div
      className="bg-white border rounded-xl shadow-sm p-6 flex flex-col transition hover:shadow-lg hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-1">
        {title} <span className="text-sm text-gray-500">({year})</span>
      </h3>
      <p className="text-gray-700 flex-1">{description}</p>
      {techs && (
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-600 font-medium">
          {techs.map((tech, i) => (
            <span key={i} className="bg-blue-100 px-2 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          Voir le projet →
        </a>
      )}
    </motion.div>
  );
}
