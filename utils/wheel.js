const roulettePart = 360 / 37;

const numbers = [
  [0, "green"],
  [32, "red"],
  [15, "black"],
  [19, "red"],
  [4, "black"],
  [21, "red"],
  [2, "black"],
  [25, "red"],
  [17, "black"],
  [34, "red"],
  [6, "black"],
  [27, "red"],
  [13, "black"],
  [36, "red"],
  [11, "black"],
  [30, "red"],
  [8, "black"],
  [23, "red"],
  [10, "black"],
  [5, "red"],
  [24, "black"],
  [16, "red"],
  [33, "black"],
  [1, "red"],
  [20, "black"],
  [14, "red"],
  [31, "black"],
  [9, "red"],
  [22, "black"],
  [18, "red"],
  [29, "black"],
  [7, "red"],
  [28, "black"],
  [12, "red"],
  [35, "black"],
  [3, "red"],
  [26, "black"],
];

export const calculateNextWheelAngle = (oldAngle) => {
  const newAngle = oldAngle + 1
  if (newAngle >= 360) {
    return newAngle - 360;
  }
  return newAngle;
}

export const getNumberColor = (number) => numbers.find(([n]) => number === n)[1];

export const generateRandomNumber = () => Math.round((Math.random() * 37));

export const isRightNumber = (number, wheelAngle, ballAngle) => {
  if (number === null) return false;

  const index = numbers.findIndex(([n]) => number === n)
  const numberAngleRange = [
    wheelAngle + Math.round(roulettePart * index),
    wheelAngle + Math.round(roulettePart * (index + 1))
  ];

  if (numberAngleRange[0] < ballAngle && numberAngleRange[1] > ballAngle) {
    return true;
  }

  return false;
};
































