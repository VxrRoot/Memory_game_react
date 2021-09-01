import "./App.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";

function App() {
  const card = [
    {
      id: 1,
      name: "photo1",
      src: "images/img1.png",
    },
    {
      id: 2,
      name: "photo2",
      src: "images/img2.jpg",
    },
    {
      id: 3,
      name: "photo3",
      src: "images/img3.jpg",
    },
    {
      id: 4,
      name: "photo4",
      src: "images/img4.png",
    },
  ];

  const pairCards = [...card, ...card];

  const [openedCard, setOpenCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleClick = (id) => {
    setOpenCard((opened) => [...opened, id]);
  };

  useEffect(() => {
    if (openedCard < 2) return;

    const firstCard = pairCards[openedCard[0]];
    const secondCard = pairCards[openedCard[1]];

    if (secondCard && firstCard.id === secondCard.id) {
      setMatched((matched) => [...matched, firstCard.id]);
    }
    console.log(matched);

    if (openedCard.length === 2) setTimeout(() => setOpenCard([]), 1000);
  }, [openedCard]);

  const handleResetButton = () => {
    setMatched([]);
    setOpenCard([]);
  };
  const memores = pairCards.map((oneCard, index) => {
    let cardFlip = false;

    if (openedCard.includes(index)) cardFlip = true;
    if (matched.includes(oneCard.id)) cardFlip = true;

    return (
      <Card
        key={index}
        {...oneCard}
        click={() => handleClick(index)}
        flip={cardFlip}
      />
    );
  });

  return (
    <div className="App">
      <div className="table">{memores}</div>
      {matched.includes(1) &&
      matched.includes(2) &&
      matched.includes(3) &&
      matched.includes(4) ? (
        <button className="resetButton" onClick={handleResetButton}>
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default App;
