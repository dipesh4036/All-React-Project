import React, { useState } from "react";

const Second = () => {
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState(0);
  const [diceScore, setDiceScore] = useState(null);
  const [error, setError] = useState(false);

  const random = () => {
    if (select === 0) {
      setError(true);
      return;
    }

    setError(false);
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceScore(randomNumber);

    if (select === randomNumber) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const reset = () => {
    setScore(0);
    setSelect(0);
    setDiceScore(null);
    setError(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 sm:p-10">
      <div className="mb-5 text-center">
        <h1 className="text-4xl font-semibold text-gray-700">Score: {score}</h1>
        {error && (
          <p className="text-red-500 text-lg mt-2">Please select a dice value before rolling!</p>
        )}
      </div>

      <div className="flex space-x-4 mb-5 flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => setSelect(num)}
            className={`h-14 w-14 flex items-center justify-center text-xl font-semibold border-2 rounded-full ${
              select === num ? "bg-blue-300 text-white" : "bg-white text-gray-800"
            } hover:bg-blue-500 hover:text-white transition mb-2 sm:mb-0`}
          >
            {num}
          </button>
        ))}
      </div>

      <p className="text-lg text-gray-600">You selected: {select || "None"}</p>

      <button
        onClick={random}
        className="mt-5 py-2 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Roll Dice
      </button>

      {diceScore && (
        <div className="mt-5">
          <h2 className="text-2xl text-gray-800">Dice Rolled: {diceScore}</h2>
          <div className="h-24 w-24 m-auto mt-3">
            <img
              className="h-full w-full"
              src={`https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-${diceScore}.svg`}
              alt={`Dice ${diceScore}`}
            />
          </div>
        </div>
      )}

      <button
        className="mt-5 py-2 px-6 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Second;
