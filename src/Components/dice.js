import React from "react";
import { useState } from "react";

function Dice() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;

    if (newValue === 1 || newValue === 6) {
      setDiceValue(newValue);
      rollDice();
    } else {
      setDiceValue(newValue);

      if (activePlayer === 1) {
        setPlayer1Score(player1Score + newValue);
        setActivePlayer(2);
      } else {
        setPlayer2Score(player2Score + newValue);
        setActivePlayer(1);
      }
    }
  };

  return (
    <div>
      <h2>Player 1: {player1Score}</h2>
      <h2>Player 2: {player2Score}</h2>
      <h2>Dice Value: {diceValue}</h2>
      <button onClick={rollDice}>Roll Dice</button>
      <h2>Active Player: {activePlayer}</h2>
    </div>
  );
}

export default Dice;
