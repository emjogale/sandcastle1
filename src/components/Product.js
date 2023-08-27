const Product = ({ item, product, onAdd, onRemove }) => {
  return (
    <div className="card">
      <img className="small" src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <div>£{product.price}</div>
      <div>
        {item ? (
          <div>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>
        ) : (
          <button className="big-button" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
