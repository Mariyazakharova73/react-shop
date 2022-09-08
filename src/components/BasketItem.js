function BasketItem(props) {
  const {
    id,
    name,
    quantity,
    price,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  return (
    <li href="#!" className="collection-item">
      {name} <i className="material-icons basket-quantity"  onClick={()=>{decQuantity(id)}}>remove</i>x {quantity}
      <i className="material-icons basket-quantity" onClick={()=>{incQuantity(id)}}>add</i> = {price * quantity} руб.
      <span href="#!" className="secondary-content">
        <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>
          clear
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
