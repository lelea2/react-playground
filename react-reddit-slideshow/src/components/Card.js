import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <img width={300} height={300} src={card.url} alt={card.title} />
      <p>{card.title}</p>
    </>
  );
};

export default Card;
