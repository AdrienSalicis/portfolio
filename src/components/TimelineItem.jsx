import { motion } from 'framer-motion';

export default function TimelineItem({ year, title, location, description, link }) {
  return (
    <motion.div
      className="relative pl-6 border-l-2 border-blue-600 pb-10"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1.5"></div>
      <h3 className="text-xl font-semibold">
        {title}{' '}
        <span className="text-sm text-gray-500 font-normal">
          ({year})
        </span>
      </h3>
      <p className="text-gray-700 text-sm italic">{location}</p>
      <p className="text-gray-700 mt-1">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium underline mt-2 inline-block"
        >
          En savoir plus →
        </a>
      )}
    </motion.div>
  );
}
