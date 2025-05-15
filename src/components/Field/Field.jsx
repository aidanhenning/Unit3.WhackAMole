import { useState } from "react";
import "./Field.css";

export default function Field({ setScore, timeLeft }) {
  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [moleIndex, setMoleIndex] = useState(() =>
    Math.floor(Math.random() * holes.length)
  );

  const handleClick = (id) => {
    if (timeLeft <= 0) return; // No scoring if time is up

    if (id === moleIndex) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * holes.length);
      } while (newIndex === moleIndex);

      setMoleIndex(newIndex);
      setScore((prev) => prev + 1);
    }
  };

  return (
    <ul className="field">
      {holes.map((id) => (
        <li
          key={id}
          className={`hole ${id === moleIndex ? "mole" : ""}`}
          onClick={() => handleClick(id)}
        ></li>
      ))}
    </ul>
  );
}
