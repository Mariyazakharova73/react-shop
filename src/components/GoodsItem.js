import { useContext } from 'react';
import { ShopContext } from '../context.js';

function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={`${name}.`} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn black hover" onClick={() => addToBasket({ id, name, price })}>
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
