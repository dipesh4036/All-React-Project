import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const data = [
    { name: "Pancakes", type: "Breakfast", description: "Fluffy pancakes served with maple syrup and a side of fresh berries.", price: 7.99, photo: "https://images.unsplash.com/photo-1497445702960-c21c96af4c68?w=800&auto=format&fit=crop&q=60" },
    { name: "Caesar Salad", type: "Lunch", description: "Crisp romaine lettuce with creamy Caesar dressing, croutons, and Parmesan cheese.", price: 9.49, photo: "https://plus.unsplash.com/premium_photo-1700089483464-4f76cc3d360b?w=800&auto=format&fit=crop&q=60" },
    { name: "Grilled Chicken Sandwich", type: "Lunch", description: "Tender grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.", price: 10.99, photo: "https://plus.unsplash.com/premium_photo-1700677185925-81d4d3edc860?w=800&auto=format&fit=crop&q=60" },
    { name: "Spaghetti Bolognese", type: "Dinner", description: "Classic Italian pasta with a rich meat sauce made from beef, tomatoes, and herbs.", price: 14.99, photo: "https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?w=800&auto=format&fit=crop&q=60" },
    { name: "Cheeseburger", type: "Dinner", description: "Juicy beef patty with melted cheddar cheese, pickles, onions, and ketchup, served with fries.", price: 12.99, photo: "https://plus.unsplash.com/premium_photo-1675864532183-8f37e8834db5?w=800&auto=format&fit=crop&q=60" },
    { name: "Avocado Toast", type: "Breakfast", description: "Smashed avocado with a hint of lemon, topped on toasted whole grain bread.", price: 8.49, photo: "https://plus.unsplash.com/premium_photo-1676106623114-e2edc4f04fe0?w=800&auto=format&fit=crop&q=60" },
    { name: "Chicken Caesar Wrap", type: "Lunch", description: "Grilled chicken with romaine lettuce, Caesar dressing, and Parmesan cheese wrapped in a soft flour tortilla.", price: 11.49, photo: "https://plus.unsplash.com/premium_photo-1664391666682-7e84a1736bd4?w=800&auto=format&fit=crop&q=60" },
    { name: "Margherita Pizza", type: "Dinner", description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.", price: 13.99, photo: "https://plus.unsplash.com/premium_photo-1682097540800-0bb59fa4b91e?w=800&auto=format&fit=crop&q=60" }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <UserContext.Provider value={{ filteredData, setSearchQuery, setSelectedType }}>
      {children}
    </UserContext.Provider>
  );
};


const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
