import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.png";
import Particles from "react-tsparticles";

const Hero = () => {
  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-white mt-24 px-1 md:px-20 overflow-hidden">
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Welcome to <span className="text-brand">Iilos</span>
        </motion.h1>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-600 max-w-xl mx-auto"
        >
          We help students explore global education opportunities and guide them
          toward a brighter future.
        </motion.p>

        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-brand text-white font-medium rounded-md hover:bg-brand-dark transition"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
