import React from 'react';

const Herosection = ({ name, type, description, price, photo }) => {
  return (
    <div className="w-full sm:w-[40vw] md:w-[30vw] lg:w-[23vw] h-[52vh] backdrop-blur-md rounded overflow-hidden shadow-lg bg-white/50 sm:h-[60vh] md:h-[50vh]">
      <img
        src={photo}
        alt={name}
        className="w-full h-36 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{type}</p>
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
