import { motion } from "framer-motion";

const variants = {
  hide: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Subtitle({ children }) {
  return (
    <motion.h4
      initial="hide"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.h4>
  );
}

export default Subtitle;
