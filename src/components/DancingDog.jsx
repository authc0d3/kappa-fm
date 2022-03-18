import { motion } from "framer-motion";
import dog from "../dog.gif";

const variants = {
  hide: { opacity: 0, scale: 0, y: 100 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

function DancingDog({ name }) {
  return (
    <motion.div
      className="dog"
      initial="hide"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <img src={dog} alt="music" />
    </motion.div>
  );
}

export default DancingDog;
