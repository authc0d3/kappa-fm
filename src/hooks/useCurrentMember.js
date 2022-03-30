import { initializeMemebers, getMemberByDate } from "../utils";

export function useCurrentMember() {
  const members = initializeMemebers(
    import.meta.env.VITE_MEMBERS,
    import.meta.env.VITE_INIT_DATE
  );
  const currentMember = getMemberByDate(members);
  return currentMember;
}
