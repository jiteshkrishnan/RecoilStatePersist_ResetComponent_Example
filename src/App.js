import { useCallback } from "react";
import { useRecoilState, DefaultValue } from "recoil";
import { counter } from "./atoms";
import "./styles.css";

export default function App() {
  const [count, setCount] = useRecoilState(counter);
  const handleReset = useCallback(() => {
    setCount(new DefaultValue());
  }, []);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase count</button>
      <button onClick={handleReset}>Reset Another way</button>
    </div>
  );
}
