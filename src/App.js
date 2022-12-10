import { Route, Routes } from 'react-router-dom';

import './scss/app.scss';

import { Header } from './components/Header';
import { Basket } from './components/Basket';
import { PizzaBlockContainer } from './components/PizzaBlockContainer';
import { NotFound } from './pages/NotFound';
import { createContext, useState } from 'react';

export const SearchContext = createContext();

function App() {
  const [inputValue, SetInputValue] = useState('');

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ inputValue, SetInputValue }}>
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<PizzaBlockContainer inputValue={inputValue} />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
