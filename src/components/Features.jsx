import { motion } from "framer-motion";

const features = [
  { title: "Snooker & Games", img: "https://images.unsplash.com/photo-1593931668600-3d1f3f29e6b6" },
  { title: "Cafe", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { title: "Library", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" },
  { title: "Events", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786" },
];

export default function Features() {
  // Container animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each child
      },
    },
  };

  // Each card animation
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="features"
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center" variants={container}>
        {features.map(({ title, img }) => (
          <motion.div key={title} className="rounded-xl overflow-hidden shadow hover:scale-105 transition" variants={item}>
            <img src={img} alt={title} className="w-full h-40 object-cover" />
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
