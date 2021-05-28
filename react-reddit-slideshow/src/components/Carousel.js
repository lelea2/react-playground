import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <img src={card.url} alt={card.title} />
      <p>{card.title}</p>
    </>
  );
};

const MyCarousel = ({ cards }) => {
  return (
    <>
      <ul>
        {cards.map((card, i) => {
          return <Card key={i} card={card} />;
        })}
      </ul>
      <button>Prev</button>
      <button>Next</button>
    </>
  );
};

export default MyCarousel;
