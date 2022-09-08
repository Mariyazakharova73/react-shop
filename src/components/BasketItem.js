function BasketItem(props) {
  const { id, name, quantity, price, totalPrice } = props;

  return (
    <li href="#!" className="collection-item">
      {name} x {quantity}={price}
      <span href="#!" className="secondary-content">
        <i className="material-icons basket-delete">clear</i>
      </span>
    </li>
  );
}

export default BasketItem;
