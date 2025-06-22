import { motion } from "framer-motion";
import Button from "./Button";

const CTASection = () => {
  return (
    <section className="bg-[#00B5CA] pb-25 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-manrope text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-montserrat text-white text-lg mb-6"
        >
          Book a free consultation or talk to our experts now.
        </motion.p>
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
    </section>
  );
};

export default CTASection;
