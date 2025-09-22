import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 md:flex items-center gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Space</h2>
          <p className="text-lg text-gray-600">
            Café by day, community hub by night — our space is open to events,
            workshops, and gatherings of all kinds.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1557800636-894a64c1696f"
            alt="Community Space"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
