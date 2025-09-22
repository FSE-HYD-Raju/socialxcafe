import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Snooker & Games",
    description: "Enjoy a range of indoor games and snooker tables.",
    img: "https://cdn.pixabay.com/photo/2023/01/09/09/37/snooker-7706965_1280.jpg",
    formLink: "https://forms.gle/YOUR_SNOKER_FORM_LINK"
  },
  {
    title: "Cafe",
    description: "Relax and enjoy coffee, snacks, and desserts.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    formLink: "https://forms.gle/YOUR_CAFE_FORM_LINK"
  },
  {
    title: "Library",
    description: "A quiet space for reading and study.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    // no button
  },
  {
    title: "Workspace",
    description: "Reserve a desk or private room for work or meetings.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    formLink: "https://forms.gle/YOUR_WORKSPACE_FORM_LINK"
  },
  {
    title: "Events",
    description: "Join workshops, events, and community gatherings.",
    img: "https://cdn.prod.website-files.com/6284b6718db6e6a221b3f55a/6826d28ff96eaf2177406602_62ea33c5c69f445885ff9e68_what-is-a-workshop.jpeg",
  }
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-8 top-1/2 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-yellow-500 transition"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <FaChevronRight className="text-white text-2xl" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-8 top-1/2 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-yellow-500 transition"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <FaChevronLeft className="text-white text-2xl" />
    </button>
  );
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Scroll to Events section
  const scrollToEvents = () => {
    const el = document.getElementById("events");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="h-screen relative">
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
              {slide.formLink || slide.title === "Events" ? (
                <div className="space-x-4">
                  {slide.title !== "Events" ? (
                    <button
                      onClick={() => window.open(slide.formLink, "_blank")}
                      className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
                    >
                      Book a Table
                    </button>
                  ) : (
                    <button
                      onClick={scrollToEvents}
                      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                      Explore Events
                    </button>
                  )}
                </div>
              ) : null}
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
