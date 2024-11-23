import React from 'react';

const Herosection = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row w-full">
      {/* Image Section */}
      <img
        className="rounded-md w-full md:w-[50%] object-cover"
        src="https://images.unsplash.com/photo-1703319952169-4a3ed572ba0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpY2UlMjBnYW1lfGVufDB8fDB8fHww"
        alt="Dice Game"
      />

      {/* Text and Button Section */}
      <div className="flex flex-col w-full gap-10 items-center justify-center px-6 py-10 md:px-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white text-center">
          DICE GAME
        </h1>
        <button className="bg-white text-black h-16 w-48 rounded-md p-2 text-lg md:text-xl">
          PLAY NOW!
        </button>
      </div>
    </div>
  );
};

export default Herosection;
