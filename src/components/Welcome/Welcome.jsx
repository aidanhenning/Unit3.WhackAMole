import "./Welcome.css";

export default function Welcome({ startGame }) {
  return (
    <section className="welcome">
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={startGame}>Play</button>
    </section>
  );
}
