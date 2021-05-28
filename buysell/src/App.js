import "./styles.css";
import styled, { css } from "styled-components";
import { useState } from "react";

// mock
// https://i.ibb.co/W6GbZFR/interview-example.gif

const Button = styled.button`
  flex: 1;
  background: rgb(250, 103, 45);
  color: white;
  padding: 12px;
  border: 1px solid #cdcdcd;
  ${(props) =>
    props.green &&
    css`
      background: rgb(45, 175, 52);
    `}
`;

const Div = styled.div`
  color: rgb(250, 103, 45);
  ${(props) =>
    props.green &&
    css`
      color: rgb(45, 175, 52);
    `}
  width: calc(50% - 20px);
  text-align: left;
`;

const DivFull = styled.div`
  width: 100%;
  display: flex;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  width: 90%;
  margin: 20px auto;
`;

const Li = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  animation: opac 1s;
  @keyframes opac {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DivAlignRight = styled.div`
  text-align: right;
  width: calc(50% - 20px);
  color: #fff;
`;

export default function App() {
  const [list, setList] = useState([]);
  const [sell, setSell] = useState([]);

  const createItem = () => {
    return {
      id: Math.random(),
      size: Math.random().toFixed(4),
      price: (37000 + Math.random() * 2000).toFixed(2)
    };
  };

  const sortByPrice = (arr) => {
    return arr.sort((a, b) => a.price - b.price);
  };

  const createBid = (e) => {
    setList(sortByPrice([...list, createItem()]));
  };

  const createAsk = (e) => {
    setSell(sortByPrice([...sell, createItem()]));
  };

  return (
    <div className="App">
      <DivFull>
        <Button green onClick={createBid}>
          Buy
        </Button>
        <Button onClick={createAsk}>Sell</Button>
      </DivFull>
      {/* Sell item */}
      {sell.length > 0 && (
        <Ul>
          {sell.map((item, i) => {
            return (
              <Li key={i}>
                <DivAlignRight>{item.size}</DivAlignRight>
                <Div>{item.price}</Div>
              </Li>
            );
          })}
        </Ul>
      )}
      {list.length > 0 && sell.length > 0 && <hr />}
      {/* Bid item */}
      {list.length > 0 && (
        <Ul>
          {list.map((item, i) => {
            return (
              <Li key={i}>
                <DivAlignRight>{item.size}</DivAlignRight>
                <Div green>{item.price}</Div>
              </Li>
            );
          })}
        </Ul>
      )}
    </div>
  );
}
