import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Field from "./components/Field/Field";
import Welcome from "./components/Welcome/Welcome";
import Highscores from "./components/Highscores/Highscores";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(15);
  };

  const restartGame = () => {
    setGameStarted(false);
  };

  useEffect(() => {
    if (!gameStarted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  return (
    <>
      <h1>Whack a Mole</h1>

      {!gameStarted && <Welcome startGame={startGame} />}
      {!gameStarted && <Highscores />}

      {gameStarted && (
        <Scoreboard
          score={score}
          timeLeft={timeLeft}
          restartGame={restartGame}
        />
      )}
      {gameStarted && <Field setScore={setScore} timeLeft={timeLeft} />}
    </>
  );
}
