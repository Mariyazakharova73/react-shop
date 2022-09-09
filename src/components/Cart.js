import { useContext } from 'react';
import { ShopContext } from '../context.js';

function Cart() {
  const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

  const quantity = order.length;
  return (
    <div className="cart teal black white-text" onClick={handleBasketShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
