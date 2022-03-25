import { motion } from "framer-motion";

const variants = {
  hide: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0 },
};

function Link({ href, target, color, style, children }) {
  const className = `btn btn-${color || "danger"}`;
  return (
    <motion.a
      href={href}
      target={target || "_self"}
      className={className}
      initial="hide"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay: 2 }}
      style={style}
    >
      {children}
    </motion.a>
  );
}

export default Link;
