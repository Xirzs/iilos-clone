import { motion } from "framer-motion";
import { FaReact, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";

const cards = [
  {
    title: "React Development",
    description: "Master React fundamentals with real-world projects.",
    icon: <FaReact size={40} className="text-brand" />,
  },
  {
    title: "Expert Mentors",
    description: "Learn from industry experts and professionals.",
    icon: <FaChalkboardTeacher size={40} className="text-brand" />,
  },
  {
    title: "Global Reach",
    description: "Join a global community of passionate learners.",
    icon: <FaGlobe size={40} className="text-brand" />,
  },
  {
    title: "React Development",
    description: "Master React fundamentals with real-world projects.",
    icon: <FaReact size={40} className="text-brand" />,
  },
  {
    title: "Expert Mentors",
    description: "Learn from industry experts and professionals.",
    icon: <FaChalkboardTeacher size={40} className="text-brand" />,
  },
  {
    title: "Global Reach",
    description: "Join a global community of passionate learners.",
    icon: <FaGlobe size={40} className="text-brand" />,
  },
  {
    title: "React Development",
    description: "Master React fundamentals with real-world projects.",
    icon: <FaReact size={40} className="text-brand" />,
  },
  {
    title: "Expert Mentors",
    description: "Learn from industry experts and professionals.",
    icon: <FaChalkboardTeacher size={40} className="text-brand" />,
  },
  {
    title: "Global Reach",
    description: "Join a global community of passionate learners.",
    icon: <FaGlobe size={40} className="text-brand" />,
  },
];

const CardSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
