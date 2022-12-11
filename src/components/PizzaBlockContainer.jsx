import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Categories } from './Categories';
import { Pagination } from './Pagination';
import { PizzaBlock } from './PizzaBlock';
import Skeleton from './Skeleton';
import { SortPizzas } from './SortPizzas';

export const PizzaBlockContainer = () => {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortedId, setSortedId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { value } = useSelector((state) => state.search);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://636f63c8bb9cf402c8169079.mockapi.io/items?p=${page}&l=3&search=${value}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false));
    // авто скролл вверех при переходе на страцину, при первой отрисовке
    window.scrollTo(0, 0);
  }, [categoryId, value, page]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} getCategoryPizza={(id) => setCategoryId(id)} />
        <SortPizzas value={sortedId} getSortPizza={(id) => setSortedId(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, idx) => <Skeleton key={idx} />)
          : items.map(({ id, ...rest }) => <PizzaBlock key={id} {...rest} />)}
      </div>
      <Pagination page={page} pagerList={[1, 2, 3, 4, 5]} setPage={setPage} />
    </>
  );
};
