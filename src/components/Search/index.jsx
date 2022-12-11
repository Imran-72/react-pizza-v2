import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../../redux-toolkit/Search/searchSlice';
import styles from './Search.module.scss';

export const Search = () => {
  const { value } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <input
        onChange={(e) => dispatch(setInputValue(e.target.value))}
        className={styles.input}
        type="text"
        placeholder="Поиск..."
        value={value}
      />
    </div>
  );
};
