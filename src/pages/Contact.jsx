import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Button from "../ui/components/Button";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Something went wrong. Try again.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 md:px-20 bg-white">
      <h2 className="font-manrope text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
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
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5CA]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5CA]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5CA]"
              />
            </div>

            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              label="Get Started"
              variant="primary"
              size="md"
              onClick={() => console.log("Clicked!")}
              animate={true}
            />
            {status && (
              <p className="text-sm text-center mt-2 text-green-600 font-medium">
                {status}
              </p>
            )}
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
