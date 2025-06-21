import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen min-w-screen flex flex-col items-center justify-center mt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className=" p-6 rounded-md text-center space-y-6 max-w-2xl z-10">
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Welcome to <span className="text-brand ">Iilos</span>
        </motion.h1>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-700 max-w-xl mx-auto"
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
