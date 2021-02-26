import { getNumberColor } from "./wheel";

export const setResult = (bets, number) =>
  bets.map((bet, i) => bets.length === i + 1
    ? { ...bet, result: getNumberColor(number) }
    : bet
  );