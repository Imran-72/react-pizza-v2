import { Route, Routes } from 'react-router-dom';

import './scss/app.scss';

import { Header } from './components/Header';
import { Basket } from './components/Basket';
import { PizzaBlockContainer } from './components/PizzaBlockContainer';
import { NotFound } from './pages/NotFound';
import { useState } from 'react';

function App() {
  const [inputValue, SetInputValue] = useState('');

  console.log(inputValue);
  return (
    <>
      <div className="wrapper">
        <Header value={inputValue} inputChange={SetInputValue} />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<PizzaBlockContainer inputValue={inputValue} />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
