import { useEffect } from 'react';

import { setResult } from '../utils/bets';
import { calculateNextBallAngle, calculateBallPosition, initialBallPosition } from "../utils/ball";
import { calculateNextWheelAngle, generateRandomNumber, getNumberColor, isRightNumber } from "../utils/wheel";

export const initial = {
  speed: null,
  wheelAngle: 0,
  ballAngle: 0,
  ballPosition: initialBallPosition,
  number: null,
  stepsToNumber: null,
  bets: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {...state, speed: 20, bets: [...state.bets, { bet: action.bet, result: "pending" }] };

    case "SPIN":
      const wheelAngle = calculateNextWheelAngle(state.wheelAngle);
      const ballAngle = calculateNextBallAngle(state.ballAngle);
      const ballPosition = calculateBallPosition(ballAngle)
      const isRight = isRightNumber(state.number, state.wheelAngle, state.ballAngle);

      const speed = isRight ? null : state.speed;
      const number = isRight ? null : state.number;
      const bets = isRight ? setResult(state.bets, state.number) : state.bets;

      return { ...state, bets, number, speed, wheelAngle, ballAngle, ballPosition };

    case "SET_NUMBER":
      return { ...state, speed: 40, number: action.number  };
  }
}














