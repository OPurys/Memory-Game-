import React from "react";

export function Card({ item, isSelected, isFinished, onCardClick }) {
  const { id, url, description } = item;

  const className = `${isSelected ? "card-show" : ""} ${
    isFinished ? "card-finished" : ""
  }`;

  const handleClick = () => {
    onCardClick(id);
  };

  return (
    <li onClick={handleClick} className={`card ${className}`}>
      <img src={url} width="204" height="144" alt={description} />
    </li>
  );
}
