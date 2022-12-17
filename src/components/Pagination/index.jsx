import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Pagination.module.scss';

export const Pagination = ({ page, pagerList, setPage }) => {
  const dispatch = useDispatch();

  return (
    <>
      {pagerList.map((p, index) => {
        return (
          <span
            className={p === page ? styles.active_span : styles.span}
            key={index}
            onClick={() => dispatch(setPage(p))}>
            {p}
          </span>
        );
      })}
    </>
  );
};
