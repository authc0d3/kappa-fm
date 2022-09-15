import { motion } from "framer-motion";

function MemberName({ name }) {
  return (
    <div className="memberName" data-atropos-offset="-5">
      <motion.div
        animate={{
          scale: [1, 1.2, 1, 1.2, 1],
          rotate: [0, 45, 0, -45, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        🎶
      </motion.div>
      {name}
      <motion.div
        animate={{
          scale: [1, 1.2, 1, 1.2, 1],
          rotate: [0, -20, 0, -60, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        🎉
      </motion.div>
    </div>
  );
}

function Member({ name }) {
  const variants = {
    hide: { opacity: 0, scale: 0, rotate: 45 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <motion.h2
      initial="hide"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, delay: 1 }}
      className="text-2xl"
    >
      {name ? <MemberName name={name} /> : "Vuelve el lunes 😉"}
    </motion.h2>
  );
}

export default Member;
