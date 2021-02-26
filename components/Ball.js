import styles from "../styles/Roulette.module.css";

const Ball = ({ x, y }) => (
  <div className={styles.ball} style={{ top: y, left: x }} />
)

export default Ball;