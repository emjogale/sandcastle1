import React from 'react';

const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const deliveryPrice = itemsPrice > 50 ? 0 : 4;
  const totalPrice = itemsPrice + deliveryPrice;

  return (
    <div className="block col-1">
      <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is Empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-1">{item.title}</div>
              <div className="col-1">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>
              <div className="col-1">
                {item.qty} x £{item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Total</div>
              <div className="col-1 text-right">£{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Delivery cost</div>
              <div className="col-1 text-right">
                £{deliveryPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong> Total price</strong>
              </div>
              <div className="col-2 text-right">
                <strong>£{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button
                className="margin-left big-button"
                onClick={() => alert('Checkout now?')}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Basket;
