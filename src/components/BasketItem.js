import { useContext } from 'react';
import { ShopContext } from '../context.js';

function BasketItem(props) {
  const { id, name, quantity, price } = props;

  const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li href="#!" className="collection-item">
      {name}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => {
          decQuantity(id);
        }}
      >
        remove
      </i>
      x {quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => {
          incQuantity(id);
        }}
      >
        add
      </i>{' '}
      = {price * quantity} руб.
      <span href="#!" className="secondary-content">
        <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>
          clear
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
