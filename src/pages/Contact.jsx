import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen min-w-screen bg-white pt-28 pb-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Get in Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg"
        >
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5CA]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5CA]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5CA]"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#00B5CA] text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-[#0096ab] transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Embedded Map */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.090401616089!2d73.91137647517163!3d18.57083706753956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1161aa7cc5b%3A0xa9f2e98ce32c4bdb!2sPune!5e0!3m2!1sen!2sin!4v1718714965400!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
