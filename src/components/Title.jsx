import { motion } from "framer-motion";

const variants = {
  hide: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function Title({ children }) {
  return (
    <motion.div
      initial="hide"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <h1>{children}</h1>
      <hr />
    </motion.div>
  );
}

export default Title;
