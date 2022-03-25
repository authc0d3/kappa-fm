import dayjs from "dayjs";

export const isWeekendDay = (date) => date.day() === 0 || date.day() === 6;
export const isFriday = (date) => date.day() === 5;

export const initializeMemebers = (members, initDateStr) =>
  members.split(",").reduce(
    (acc, name, i) =>
      i === 0
        ? [{ name, initDate: dayjs(initDateStr) }]
        : [
            ...acc,
            {
              name,
              initDate: acc[i - 1].initDate
                .clone()
                .add(!isFriday(acc[i - 1].initDate) ? 1 : 3, "d"),
            },
          ],
    []
  );

export function calcWeekendDays(init, end) {
  let count = 0;
  let current = init;
  while (current.isBefore(end)) {
    if (isWeekendDay(current)) count++;
    current = current.add(1, "d");
  }
  return count;
}

export function getMemberByDate(members, date) {
  const today = dayjs(date || dayjs().format("YYYY-MM-DD"));
  if (today.day() === 0 || today.day() === 6) return undefined;

  let memberByDate;
  members.every((member) => {
    const diffFromInit = Math.floor(
      Math.abs(today.diff(member.initDate, "day")) -
        calcWeekendDays(member.initDate, today)
    );
    if (diffFromInit % members.length === 0) {
      memberByDate = member;
      return false;
    }
    return true;
  });

  return memberByDate;
}
