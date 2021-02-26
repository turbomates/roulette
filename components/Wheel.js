const Wheel = ({ angle }) => (
  <img src="/roulette.png" alt="roulette" style={{ transform: `rotate(${angle}deg)`}} />
);

export default Wheel;