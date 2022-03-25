import { useState, useEffect } from "react";
import { DancingDog, Link, Member, Subtitle, Title } from "./components";
import { initializeMemebers, getMemberByDate } from "./utils";

const members = initializeMemebers(
  import.meta.env.VITE_MEMBERS,
  import.meta.env.VITE_INIT_DATE
);

function App() {
  const [member, setMember] = useState();

  useEffect(() => {
    setMember(getMemberByDate(members));
  }, []);

  return (
    <>
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
          <DancingDog />
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
    </>
  );
}

export default App;
