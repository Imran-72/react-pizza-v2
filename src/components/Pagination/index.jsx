import React from 'react';
import styles from './Pagination.module.scss';

export const Pagination = ({ page, pagerList, setPage }) => {
  return (
    <>
      {pagerList.map((p, index) => {
        return (
          <span
            className={p === page ? styles.active_span : styles.span}
            key={index}
            onClick={() => setPage(p)}>
            {p}
          </span>
        );
      })}
    </>
  );
};
