function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart">
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
