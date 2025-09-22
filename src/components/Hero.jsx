import Slider from "react-slick";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Snooker & Games",
    description: "Enjoy a range of indoor games and snooker tables.",
    img: "https://images.unsplash.com/photo-1610726683168-0b9eaf857a9f?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Cafe",
    description: "Relax and enjoy coffee, snacks, and desserts.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    title: "Library",
    description: "A quiet space for reading and study.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "Workspace",
    description: "Reserve a desk or private room for work or meetings.",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f",
  },
  {
    title: "Events",
    description: "Join workshops, events, and community gatherings.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <section id="hero" className="h-screen relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="h-screen relative">
            <img src={slide.img} alt={slide.title} className="w-full h-screen object-cover"/>
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">{slide.title}</h2>
              <p className="text-lg mb-6 text-white">{slide.description}</p>
              <div className="space-x-4">
                <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                  Book a Table
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                  Explore Events
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
