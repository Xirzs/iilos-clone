import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-[#00FFFF] mb-3">React</h1>
          <p className="text-gray-400 text-sm">
            Empowering students to explore international education through
            guidance and global opportunities.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <Link to="/" className="hover:text-[#00B5CA] transition">
            Home
          </Link>

          <Link to="/contact" className="hover:text-[#00B5CA] transition">
            Contact
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-[#00B5CA] transition"
                >
                  <Icon size={20} />
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Iilos. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
