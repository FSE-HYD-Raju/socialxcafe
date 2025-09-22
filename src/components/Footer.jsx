import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      className="bg-black text-white py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="container mx-auto px-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h3 className="text-xl font-bold mb-4">SOCIALXCAFE</h3>
        <p className="mb-4">123 Main Street · Your City · Open daily 8am - 11pm</p>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} SocialXcafe. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
