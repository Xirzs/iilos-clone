import { motion } from "framer-motion";
import featureImg from "../assets/heroImg.png";
const FeatureBlock = () => {
  return (
    <div className="w-full lg:w-3/4 mx-auto mt-4 mb-16 overflow-hidden  shadow-xl flex flex-col md:flex-row">
      <motion.div
        className="w-full md:w-1/2 h-64 bg-black"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={featureImg}
          alt="Feature"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 bg-[#00B5CA] p-6 lg:p-10 flex flex-col justify-center"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-2xl font-bold mb-4">
          Redefining Logistics Education
        </h2>
        <p className="text-white text-base mb-6">
          IILOS combines industry expertise, global perspectives, and innovative
          technology to deliver specialized training in supply chain management
          and logistics.
        </p>
        <button className="px-6 py-3 border border-white text-white text-sm font-medium rounded-md hover:bg-white/10 transition">
          Discover More
        </button>
      </motion.div>
    </div>
  );
};

export default FeatureBlock;
