import "./Scoreboard.css";

export default function Scoreboard({ score, timeLeft, restartGame }) {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Time: {timeLeft}s</p>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
