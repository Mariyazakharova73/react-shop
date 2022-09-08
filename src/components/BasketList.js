import BasketItem from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype
  } = props;

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>

      {order.length ? (
        order.map((item) => (
          <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incQuantity={incQuantity}
          decQuantity={decQuantity}/>
        ))
      ) : (
        <li href="#!" className="collection-item">
          Корзина пуста
        </li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice} руб.
      </li>
      <div className="btn-container"><button className="secondary-content btn-small">Оформить</button>
      </div>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        clear
      </i>
    </ul>
  );
}

export default BasketList;
