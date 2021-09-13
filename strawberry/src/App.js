import "./styles.css";
import Strawberry from "./Strawberry";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useInterval from "./useInterval";

const Button = styled.button`
  background: #cdcdcd;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
`;

export default function App() {
  const arr = ["green", "yellow", "orange", "red"];
  const count = 6;

  const [ripe, setRipe] = useState(0);

  const handleRipe = () => {
    setRipe(ripe < arr.length - 1 ? ripe + 1 : 0);
  };

  useInterval(() => {
    handleRipe();
  }, 1000);

  useEffect(() => {
    let id = setInterval(handleRipe, 3000);
    return () => clearInterval(id);
  });

  return (
    <div className="App">
      <div>
        {new Array(count).fill("").map((item, i) => (
          <Strawberry key={i} color={arr[ripe]} />
        ))}
      </div>
      <div>
        <Button onClick={handleRipe}>{arr[ripe]}</Button>
      </div>
    </div>
  );
}
