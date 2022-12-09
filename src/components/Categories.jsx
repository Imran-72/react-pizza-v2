import React from 'react';

export const Categories = ({ value, getCategoryPizza }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => getCategoryPizza(index)}
              key={index}
              className={value === index ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
