import React, { useCallback } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { setInputValue } from '../../redux-toolkit/Search/searchSlice';
import styles from './Search.module.scss';

export const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setInputValue(str));
    }, 250),
    [],
  );

  const handleOnChangeInput = ({ target }) => {
    setValue(target.value);
    updateSearchValue(target.value);
  };

  const hanbleInput = () => {
    dispatch(setInputValue(''));
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <input
        onChange={(e) => handleOnChangeInput(e)}
        className={styles.input}
        type="text"
        placeholder="Поиск..."
        value={value}
        ref={inputRef}
      />
      <button onClick={hanbleInput}>clear</button>
    </div>
  );
};
