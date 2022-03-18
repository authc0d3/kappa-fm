import dayjs from "dayjs";
import { DancingDog, Link, Member, Subtitle, Title } from "./components";

const initDate = dayjs("2022-03-01");

const teamMembers = [
  { name: "Dani", initDate: initDate },
  { name: "Tony Paulaner", initDate: initDate.add(1, "d") },
  { name: "Irene", initDate: initDate.add(2, "d") },
  { name: "David", initDate: initDate.add(3, "d") },
  { name: "Miguel Ángel", initDate: initDate.add(6, "d") },
  { name: "Natacha", initDate: initDate.add(7, "d") },
  { name: "Tatiana", initDate: initDate.add(8, "d") },
];

function calcWeekendDays(init, end) {
  let count = 0;
  let current = init;
  while (current.isBefore(end)) {
    if (current.day() === 0 || current.day() === 6) count++;
    current = current.add(1, "d");
  }
  return count;
}

function getMemberByDate(date) {
  const today = dayjs(date || dayjs().format("YYYY-MM-DD"));
  if (today.day() === 0 || today.day() === 6) return undefined;

  let memberByDate;
  teamMembers.every((member) => {
    const diffFromInit = Math.floor(
      Math.abs(today.diff(member.initDate, "day")) -
        calcWeekendDays(member.initDate, today)
    );
    if (diffFromInit % teamMembers.length === 0) {
      memberByDate = member;
      return false;
    }
    return true;
  });

  return memberByDate;
}

function App() {
  const todayMember = getMemberByDate();

  return (
    <>
      <Title>
        📻 Kappa <span>FM</span>
      </Title>
      <Subtitle>
        {todayMember
          ? "La canción de hoy le toca a..."
          : "Pero... ¿Que haces aquí hoy?"}
      </Subtitle>
      <Member name={todayMember?.name} />
      {todayMember && (
        <>
          <DancingDog />
          <Link href="https://youtube.com/" target="_blank">
            🔍 Ir a youtube
          </Link>
        </>
      )}
    </>
  );
}

export default App;
