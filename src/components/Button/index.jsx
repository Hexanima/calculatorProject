import styles from "./button.module.css";

function Button({ number, onClick }) {
  return <button className={`${styles.button}`} onClick={onClick}>{number}</button>;
}
export default Button;
