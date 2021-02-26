const cx = 246;
const cy = 246;
const radius = 170;
const x = 246;
const y = 76;

export const initialBallPosition = [x, y];

export const calculateBallPosition = (angle) => {
  const radians = Math.PI / 180 * angle;

  const sin = Math.sin(radians);
  const cos = Math.cos(radians);

  const nx = cos * (x - cx) - sin * (y - cy) + cx;
  const ny = cos * (y - cy) - sin * (x - cx) + cy;

  return [nx, ny];
}

export const calculateNextBallAngle = (oldAngle) => {
  const newAngle = oldAngle - 1
  if (newAngle < 0) {
    return newAngle + 360;
  }
  return newAngle;
}