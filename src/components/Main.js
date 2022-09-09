import { useEffect, useContext } from 'react';
import { ShopContext } from '../context.js';
import BasketList from './BasketList';
import Cart from './Cart';
import Goods from './Goods';
import Preloader from './Preloader';
import Alert from './Alert';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v1/shop?lang=ru';

function Main() {
  const { setGoods, loading, order, isBasketShow, alertName } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((res) => res.featured && setGoods(res.featured))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <Goods />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Main;
