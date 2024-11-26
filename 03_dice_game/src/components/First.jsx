import React from 'react';

const First = () => {
  return (
    <>
      <div className="bg-gray-800 flex flex-col sm:flex-row justify-between p-10 sm:p-20 items-center text-white h-screen w-full">
        <img
          className="h-80 sm:h-full w-full sm:w-[50%] object-cover rounded-md mb-10 sm:mb-0"
          src="https://imgs.search.brave.com/TNZsNkDHO4NeIogIRLQdXo0-k_ca590OxcIVXNWmtGg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXNpbm8tZGlj/ZXMtYmxhY2stYmFj/a2dyb3VuZF8xMjc2/NTctMTE2MzYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA"
          alt="Dice Game"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-8xl font-medium mb-5 sm:mb-10">Dice Game</h1>
          <button className="bg-white text-black p-4 rounded-md text-2xl sm:text-3xl hover:bg-gray-300 transition">
            Play Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default First;
