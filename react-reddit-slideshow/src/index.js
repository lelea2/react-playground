import React from "react";
import ReactDOM from "react-dom";
import { getDogs } from "./dogapi";
import "./styles.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import styled, { css } from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: block;
  width: 100%;
  position: relative;
`;

const Li = styled.li`
  width: 100%;
  text-align: center;
  animation: slide 0.5 forwards;
  animation-delay: 2s;
  /* position: absolute; */
  /* left: -200px; */
  @keyframes slide {
    100% {
      left: 0;
    }
  }
`;

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 20px;
  border: 1px solid #cdcdcd;
`;

const Carousel = ({ cards }) => {
  const [active, setActive] = useState(0);

  const onPrev = () => {
    const newActive = active - 1;
    setActive(newActive);
  };

  const onNext = () => {
    const newActive = active + 1;
    setActive(newActive);
  };

  return (
    <>
      <Ul>
        {cards.map((card, i) => {
          return (
            i === active && (
              <Li key={i}>
                {i === active}
                <Card card={card} />
              </Li>
            )
          );
        })}
      </Ul>
      <DivFlex>
        <Button onClick={onPrev} disabled={active === 0}>
          Prev
        </Button>
        <Button onClick={onNext} disabled={active === cards.length}>
          Next
        </Button>
      </DivFlex>
    </>
  );
};

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDogs().then((resp) => {
      setCards(resp);
    });
  });

  return <section>{cards.length > 0 && <Carousel cards={cards} />}</section>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
