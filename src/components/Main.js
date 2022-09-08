import { useState, useEffect } from 'react';
import BasketList from './BasketList';
import Cart from './Cart';
import Goods from './Goods';
import Preloader from './Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v1/shop?lang=ru';

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState();
  //список заказов
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);

  //item-объект
  const addToBasket = (item) => {
    //обходим список заказов и возвращаем либо индекс, либо -1
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      //добавили newItem в массив объектов
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((res) => setGoods(res.featured))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <Goods goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow}/>}
    </main>
  );
}

export default Main;
