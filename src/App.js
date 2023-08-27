import { useEffect, useState, useTransition } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const inCart = cartItems.find((x) => x.id === product.id);
    if (inCart) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...inCart, qty: inCart.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const inCart = cartItems.find((x) => x.id === product.id);
    if (inCart.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...inCart, qty: inCart.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setCartItems(
        localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : []
      );
    });
  }, []);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header
        countCartItems={cartItems
          .map((x) => x.qty)
          .reduce((total, x) => (total += x), 0)}
        cartItems={cartItems}
      />
      <div className="row">
        <Main
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
};

export default App;
