import React from "react";
import { Card } from "./card.jsx";
import { TIMEOUT } from "/public/settings.js";

export function Grid({ images = [], checkItems, finishedItems, gameType }) {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleCardClick = (id) => {
    if (finishedItems.includes(id) || selectedItems.includes(id)) {
      return;
    }

    switch (selectedItems.length) {
      case 0:
        setSelectedItems([id]);
        break;
      case 1:
        setSelectedItems((items) => [...items, id]);
        checkItems(selectedItems[0], id);
        setTimeout(() => setSelectedItems([]), TIMEOUT);
        break;
      default:
        setSelectedItems([]);
    }
  };

  return (
    <ul className={`cards cards-theme-${gameType}`}>
      {images.map((item, index) => (
        <Card
          key={item.id}
          item={item}
          isSelected={selectedItems.includes(item.id)}
          isFinished={finishedItems.includes(item.id)}
          onCardClick={handleCardClick}
        />
      ))}
    </ul>
  );
}
