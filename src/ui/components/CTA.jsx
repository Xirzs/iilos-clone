import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="bg-[#00B5CA] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-lg mb-6"
        >
          Book a free consultation or talk to our experts now.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="px-8 py-3 bg-white text-white font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Book Consultation
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
