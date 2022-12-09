import React from 'react';
import styles from './Search.module.scss';

export const Search = ({ value, inputChange }) => {
  const handleInputChange = (inputValue) => {
    inputChange(inputValue);
  };

  return (
    <div className={styles.root}>
      <input
        onChange={(e) => handleInputChange(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск..."
        value={value}
      />
    </div>
  );
};
