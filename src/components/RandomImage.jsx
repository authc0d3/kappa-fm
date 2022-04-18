import { motion } from "framer-motion";

const MAX_IMAGES = 21;

const variants = {
  hide: { opacity: 0, scale: 0, y: 100 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const getImageUrl = (image) =>
  new URL(`../assets/${image}.gif`, import.meta.url).href;

function DancingDog({ name }) {
  const randomImage = getImageUrl(Math.floor(Math.random() * MAX_IMAGES));
  return (
    <motion.div
      className="dog"
      initial="hide"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <img src={randomImage} alt="music" />
    </motion.div>
  );
}

export default DancingDog;
