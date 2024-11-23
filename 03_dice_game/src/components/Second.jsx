import React, { useState } from "react";

const Second = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [select, setSelect] = useState(0);
  const [diceImage, setDiceImage] = useState(
    "https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-1.svg"
  );
  const [showRule, setShowRule] = useState(false); // State to toggle rule visibility

  const diceImages = [
    "https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-1.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-2.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-3.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-4.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-5.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-6.svg",
  ];

  const dicepoint = () => {
    setScore(0);
    setSelect(0);
    setResult(null);
    setDiceImage(diceImages[0]);
  };

  const random = () => {

    const rolledNumber = Math.floor(Math.random() * 6);
    setResult(rolledNumber + 1);
    setDiceImage(diceImages[rolledNumber]);

    if (rolledNumber + 1 === select) {
      setScore((prev) => prev + (rolledNumber + 1));
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const toggleRule = () => {
    setShowRule((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center w-full py-10 sm:py-20">
      <div className="flex p-5 w-full justify-between items-center">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold">{score}</h1>
          <h1 className="text-2xl font-semibold">Total Score</h1>
        </div>

        <nav>
          {select === 0 && (
            <h1 className="text-2xl text-red-400 sm:ml-10 mt-5 sm:mt-0">
              You Have Not Selected Any Number
            </h1>
          )}
          <ul className="space-x-5 cursor-pointer flex flex-wrap justify-center sm:p-5">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setSelect(num)}
                className={`border-2 border-black w-16 h-16 px-5 py-2 text-4xl sm:text-5xl ${
                  select === num ? "bg-green-400" : ""
                }`}
              >
                {num}
              </button>
            ))}
          </ul>
          <h2 className="text-3xl font-semibold sm:ml-16">You selected : {select}</h2>
        </nav>
      </div>

      <div className="flex flex-col items-center ">
        <img
          className="cursor-pointer w-32 h-32 sm:w-48 sm:h-48 mt-5"
          onClick={random}
          src={diceImage}
          alt="Dice"
        />
        <h1 className="text-2xl mt-4">Dice rolled: {result}</h1>
        <h1 className="text-3xl font-semibold">Click on dice to roll</h1>

        <button
          onClick={dicepoint}
          className="bg-black text-white p-2 w-28 h-10 mt-5 rounded-md"
        >
          Reset Score
        </button>

        <button
          onClick={toggleRule}
          className="bg-white border-2 border-black p-2 w-28 h-10 mt-5 rounded-md"
        >
          {showRule ? "Hide Rule" : "Show Rule"}
        </button>

        {showRule && (
          <p className="bg-red-200 p-5 mt-10 rounded-md">
            <h1>How to play the dice game</h1>
            <p>Select any number</p>
            <p>Click on the dice image</p>
            <p>
              After clicking on the dice, if the selected number matches the
              dice number, you will get the same points as the dice number.
            </p>
            <p>If you get the wrong guess, 2 points will be deducted.</p>
          </p>
        )}
      </div>
    </div>
  );
};

export default Second;
