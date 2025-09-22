// src/components/Events.jsx
import { motion } from "framer-motion";

const septemberEvents = [
  {
    title: "Tech Meetup by HangoutHeadQuarters",
    date: "Sat, Sept 27",
    time: "11:00 AM - 1:00 PM",
    img: "https://www.entrepreneurscollective.biz/wp-content/uploads/2021/08/eNCoOct-110-1-1024x683.jpg",
  },
  {
    title: "Art Workshops by MessySquare",
    date: "Sat, Sept 27",
    time: "1:00 PM - 5:00 PM",
    img: "https://www.shutterstock.com/image-photo/hands-palette-paintbrush-art-above-600nw-2467961517.jpg",
  },
  {
    title: "Intimate Live Performance by Sofar Sounds Hyderabad",
    date: "Sat, Sept 27",
    time: "7:00 PM - 12:00 AM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItnjar1pC5neOB4icvGtXAEwQGdXveUa5fQ&s",
  },
  {
    title: "Snooker Beginner Workshop by SocialX",
    date: "Sun, Sept 28",
    time: "11:00 AM - 1:00 PM",
    img: "https://www.snookercrazy.com/wp-content/uploads/2016/05/the-line-up.png",
  },
  {
    title: "Art Workshops by MessySquare",
    date: "Sun, Sept 28",
    time: "1:00 PM - 5:00 PM",
    img: "https://www.himanshuartinstitute.com/art-and-craft-workshops/drawing-painting-art-and-craft-workshop-for-ladies/art-and-craft-workshops-for-ladies/thumbs/online-offline-block-printing-workshop-for-ladies.jpg",
  },
  {
    title: "Intimate Live Performance by Sofar Sounds Hyderabad",
    date: "Sun, Sept 28",
    time: "7:00 PM - 12:00 AM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhll4i-eMrLza--nXpxAtvSPiVc1A3VGO5g&s",
  },
];

export default function Events() {
  return (
    <motion.section
      id="events"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          September Events at SocialX Café
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {septemberEvents.map((event, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow hover:scale-105 transition bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date} · {event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
