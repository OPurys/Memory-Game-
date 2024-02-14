import React from "react";
import { InitialPage } from "./initialpage.jsx";
import { GamePage } from "./gamepage.jsx";
import { ResultsPage } from "./resultpage.jsx";
import { AppRoute } from "/public/settings.js";

export function App({ getImages, results = [] }) {
  const [page, setPage] = React.useState(AppRoute.Initial);
  const [result, setResult] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [gameType, setGameType] = React.useState(null);

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  };

  const handleReset = () => {
    setPage(AppRoute.Initial);
  };

  const handleStart = (type) => {
    const images = getImages(type);
    setImages(images);
    setGameType(type);
    setPage(AppRoute.Game);
  };

  const getPage = (route) => {
    switch (route) {
      case AppRoute.Initial:
        return <InitialPage onStart={handleStart} />;
      case AppRoute.Game:
        return (
          <GamePage
            onShowResults={showResults}
            gameType={gameType}
            images={images}
          />
        );
      case AppRoute.Results:
        return (
          <ResultsPage
            stepsCount={result}
            current={result}
            results={results}
            onResetGame={handleReset}
          />
        );
      default:
        return null;
    }
  };
  return getPage(page);
}
