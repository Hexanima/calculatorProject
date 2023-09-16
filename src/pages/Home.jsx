import Button from "../components/Button";
import Display from "../components/Display";
import useCalculator from "../hooks/useCalculator";
import styles from "./home.module.css";

function Home() {
  const { count, addOne } = useCalculator();
  return (
    <div className={`${styles.calc}`}>
      <Display />
      <div className={`${styles.buttons}`}>
        <div className={`${styles.numbers}`}>
          <Button number={1} />
          <Button number={2} />
          <Button number={3} />
          <Button number={4} />
          <Button number={5} />
          <Button number={6} />
          <Button number={7} />
          <Button number={8} />
          <Button number={9} />
          <Button number={0} />
        </div>
        <div className={`${styles.functions}`}>
          <Button number={"+"} />
          <Button number={"-"} />
          <Button number={"x"} />
          <Button number={"/"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
