import Head from 'next/head'
import { useReducer } from 'react';
import { useInterval } from "react-use";

import Ball from '../components/Ball';
import Button from '../components/Button';
import Wheel from '../components/Wheel';
import { reducer, initial } from '../reducers/roulette';
import { generateRandomNumber } from '../utils/wheel';

import styles from  "../styles/Roulette.module.css";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initial)
  const [x, y] = state.ballPosition;
  const isSpinning = state.speed !== null;

  const start = (bet) => {
    if (state.speed !== null) return;

    dispatch({ type: "START", bet })
    setTimeout(() => {
      dispatch({ type: "SET_NUMBER", number: generateRandomNumber() });
    }, 4000)
  }

  useInterval(() => {
    dispatch({ type: "SPIN" });
  }, state.speed);

  const lastTenBets = state.bets.slice(Math.max(state.bets.length - 10, 0)).reverse();

  return (
    <>
      <Head>
        <title>Roulette</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.game}>
        <Wheel angle={state.wheelAngle} />
        <Ball x={x} y={y} />
      </div>

      <div className={styles.buttonGroup}>
        <Button onClick={() => start("red")} color="red">Red</Button>
        <Button onClick={() => start("black")} color="black">Black</Button>
      </div>

      <div className={styles.bets}>
        {lastTenBets.map(({ bet, result }, i) => (
          <span key={i}>{bet} {result === "pending" ? "pending..." : bet === result ? "WIN" : "LOSE"}</span>
        ))}
      </div>
    </>
  )
};