function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={`${name}.`} />
        
        <a className="btn-floating halfway-fab waves-effect waves-light red"></a>
      </div>
      <div className="card-content">
      <span className="card-title">{name}</span>
        <p>
          {description}
        </p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="right" style={{fontSize: '1.8rem'}}>{price}</span>
      </div>
    </div>
  );
}

export default GoodsItem;
