import { useState, useEffect } from 'react';
import Goods from './Goods';
import Preloader from './Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v1/shop?lang=ru';

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState();

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
    <main className="container content">{loading ? <Preloader /> : <Goods goods={goods} />}</main>
  );
}

export default Main;
