import { motion } from "framer-motion";
import Button from "../../ui/components/Button";

// physics for the animation
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 20,
};

const Hero = () => {
  return (
    <section
      className="w-full relative min-h-[calc(100vh-96px)]  flex flex-col items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="px-4 md:px-6 lg:px-8 w-full flex justify-center">
        <div className="p-6 rounded-md text-center space-y-6 max-w-2xl z-10">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, transform: "translate3d(-60px, 0, 0)" }}
            animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ ...spring }}
            className="font-manrope text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Welcome to <span className="text-brand">Iilos</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, transform: "translate3d(0, -40px, 0)" }}
            animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ ...spring, delay: 0.2 }}
            className="font-montserrat text-lg text-gray-700 max-w-xl mx-auto"
          >
            We help students explore global education opportunities and guide
            them toward a brighter future.
          </motion.p>

          {/* Button */}
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            label="Get Started"
            variant="primary"
            size="md"
            onClick={() => console.log("Clicked!")}
            animate={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
