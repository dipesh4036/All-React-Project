import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import { useUserContext } from './context/Usercontext';

const App = () => {
  const { filteredData } = useUserContext(); 

  return (
    <>
      <Navbar />
      <div className="h-full flex gap-5 flex-wrap w-full bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1663850685051-ef8c3a8524ad?w=800&auto=format&fit=crop&q=60')]">
        {filteredData.map((elem) => (
          <Herosection
            key={elem.name}
            name={elem.name}
            type={elem.type}
            description={elem.description}
            price={elem.price}
            photo={elem.photo}
          />
        ))}
      </div>
    </>
  );
};

export default App;
