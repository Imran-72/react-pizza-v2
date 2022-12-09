import React from 'react';

const MyFirstContext = React.createContext([]);

export const FilterAndSortPizzaContext = (children) => {
  console.log(children);
  <MyFirstContext.Provider value={'Day'}>{children}</MyFirstContext.Provider>;
};
