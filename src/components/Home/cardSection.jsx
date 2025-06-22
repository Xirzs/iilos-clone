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
  // Add more cards as needed...
];

const CardSection = () => {
  return (
    <motion.section
      className="pb-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-manrope text-3xl font-bold text-center text-gray-900 mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gray-100 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#00b5ca] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#00b5ca] transition-colors duration-300 mb-2">
                  {card.title}
                </h3>
                <p className=" text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CardSection;
