import React from "react";
import getDeclension from "@dubaua/get-declension";

export function ResultsPage({ results, current, stepsCount, onResetGame }) {
  const sortedResults = [
    ...results,
    { name: "Ваш результат", stepsCount: current },
  ].sort((a, b) => a.stepsCount - b.stepsCount);
  const resultsRows = sortedResults.map(({ name, stepsCount }, index) => (
    <tr
      key={name}
      className={`result-table-row ${stepsCount === current ? "active" : ""}`}
    >
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{stepsCount}</td>
    </tr>
  ));
  const wordsDeclension = getDeclension({
    count: stepsCount,
    one: "шаг",
    few: "шага",
    many: "шагов",
  });
  return (
    <section className="result container">
      <h2>Лучшие результаты:</h2>
      <p>
        Вы завершили игру за <b>{wordsDeclension}</b>, так держать!
      </p>
      <table className="result-table">
        <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Шаги</th>
          </tr>
        </thead>
        <tbody>{resultsRows}</tbody>
      </table>
      <p>Хотите попробовать ещё раз?</p>
      <button
        className="button result-button"
        onClick={onResetGame}
        type="button"
      >
        Новая игра
      </button>
    </section>
  );
}
