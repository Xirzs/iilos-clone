// src/components/ui/Button.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import clsx from "clsx"; // Optional utility for cleaner className handling

const Button = ({
  label = "Click Me",
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  animate = true,
}) => {
  // Tailwind style variants
  const baseStyles = "rounded-md font-medium transition cursor-pointer";
  const variants = {
    primary:
      "bg-black text-white font-montserrat font-semibold hover:bg-gray-700",
    secondary: "bg-white text-black border border-black hover:bg-gray-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <motion.button
      className={combinedClassName}
      onClick={onClick}
      initial={{ opacity: 0, transform: "translate3d(0, 30px, 0)" }}
      animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
      whileHover={animate ? { scale: 1.05 } : {}}
      whileTap={animate ? { scale: 0.95 } : {}}
    >
      {label}
    </motion.button>
  );
};

// Optional: Prop validation
Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  animate: PropTypes.bool,
};

export default Button;
