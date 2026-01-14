import { motion } from "framer-motion";

export default function MotionButton({
  disabled = false,
  children,
  className = "",
  ...props
}) {
  const motionProps = !disabled
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 300 }
      }
    : {};

  return (
    <motion.button
      {...motionProps}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}