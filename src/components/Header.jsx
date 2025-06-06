import { motion } from 'framer-motion';

export default function Header() {
  return (
    <section
      id="header"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Adrien Salicis
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-gray-600 max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ingénieur en Conception Mécanique, passionné par la transition écologique,
        la conception responsable et les nouvelles mobilités.
      </motion.p>
    </section>
  );
}
