import React from 'react';
import { useUserContext } from '../context/Usercontext';

const Navbar = () => {
  const { setSearchQuery, setSelectedType } = useUserContext();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (type) => {
    setSelectedType(type);
  };

  return (
    <nav className="h-28 flex justify-between p-4 md:p-10 items-center w-full bg-gray-300">
      <h1 className="text-3xl">
        F<span className="text-red-500">oo</span>dy Z
        <span className="text-red-500">o</span>ne
      </h1>
      <div className="relative w-1/2 sm:w-1/4 md:w-1/4">
        <input
          className="w-full p-2 rounded-md text-gray-800"
          type="text"
          placeholder="Search Food..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="hidden md:flex space-x-2">
        <button className='p-2 rounded-md bg-red-400 text-white hover:bg-red-500 active:bg-red-600' onClick={() => handleFilterChange('All')}>All</button>
        <button className='p-2 rounded-md bg-red-400 text-white hover:bg-red-500 active:bg-red-600' onClick={() => handleFilterChange('Breakfast')}>Breakfast</button>
        <button className='p-2 rounded-md bg-red-400 text-white hover:bg-red-500 active:bg-red-600' onClick={() => handleFilterChange('Lunch')}>Lunch</button>
        <button className='p-2 rounded-md bg-red-400 text-white hover:bg-red-500 active:bg-red-600' onClick={() => handleFilterChange('Dinner')}>Dinner</button>
      </div>
    </nav>
  );
};

export default Navbar;
