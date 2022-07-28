import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function App() {

  const showCart = useSelector(state => state.ui.cartIsVisible);

  const cart = useSelector(state => state.cart)

  useEffect(() => {
      fetch('https://redux-cart-42c3e-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart)
      })
  }, [cart])

  return (
      <Layout>
          {showCart && <Cart/>}
        <Products />
      </Layout>
  );
}

export default App;
