import styles from "../styles/Roulette.module.css";

const Button = ({ color, onClick, children }) => (
  <div
    className={styles.button}
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Button;