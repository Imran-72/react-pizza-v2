import React from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../App';
import styles from './Search.module.scss';

export const Search = () => {
  const { inputValue, SetInputValue } = useContext(SearchContext);

  return (
    <div className={styles.root}>
      <input
        onChange={(e) => SetInputValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск..."
        value={inputValue}
      />
    </div>
  );
};
