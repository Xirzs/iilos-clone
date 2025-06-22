import { motion } from "framer-motion";
import Button from "../../ui/components/Button";

const FeatureBlock = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg shadow-xl flex flex-col md:flex-row">
          {/* Left Image */}
          <motion.div
            className="w-full md:w-1/2 h-64 md:h-auto bg-black bg-cover bg-center"
            style={{ backgroundImage: "url('/images/heroImg.png')" }}
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Right Text */}
          <motion.div
            className="w-full md:w-1/2 bg-[#00B5CA] p-6 lg:p-10 flex flex-col justify-center"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-manrope text-white text-2xl font-bold mb-4">
              Redefining Logistics Education
            </h2>
            <p className="font-montserrat text-white text-base mb-6">
              IILOS combines industry expertise, global perspectives, and
              innovative technology to deliver specialized training in supply
              chain management and logistics.
            </p>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              label="Get Started"
              variant="primary"
              size="md"
              onClick={() => console.log("Clicked!")}
              animate={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
