import { motion } from "framer-motion";

export default function Workspace() {
  return (
    <motion.section
      id="workspace"
      className="py-20 bg-gray-100 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 className="text-3xl font-bold mb-4" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        Reserve a Workspace
      </motion.h2>
      <motion.p className="text-lg mb-6 text-gray-600" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        Need a spot to work or host a meeting? Reserve a space today.
      </motion.p>
      <motion.button
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Reserve Now
      </motion.button>
    </motion.section>
  );
}
