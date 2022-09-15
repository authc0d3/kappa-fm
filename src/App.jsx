import { motion } from "framer-motion";
import Atropos from "atropos/react";
import { RandomImage, Link, Member, Subtitle, Title } from "./components";
import { useCurrentMember } from "./hooks";

const variants = {
  hide: { opacity: 0, scale: 0, rotate: 45 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

function App() {
  const member = useCurrentMember();
  return (
    <Atropos>
      <motion.div
        initial="hide"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
        className="card"
      >
        <Title>
          📻 Kappa <span>FM</span>
        </Title>
        <Subtitle>
          {member
            ? "La canción de hoy le toca a..."
            : "Pero... ¿Que haces aquí hoy?"}
        </Subtitle>
        <Member name={member?.name} />
        {member && (
          <>
            <RandomImage />
            <Link
              href="https://youtube.com/"
              target="_blank"
              style={{ marginBottom: "10px" }}
            >
              🔍 Ir a youtube
            </Link>
            <Link
              href="https://open.spotify.com/playlist/6eeT7daACvLsHCDZEMe4hv?si=1d96c1eaa89c42b7"
              target="_blank"
              color="success"
            >
              🎵 Spotify Kappa
            </Link>
          </>
        )}
      </motion.div>
    </Atropos>
  );
}

export default App;
