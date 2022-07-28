import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';

function App() {

  const showCart = useSelector(state => state.ui.cartIsVisible);

  return (
      <Layout>
          {showCart && <Cart/>}
        <Products />
      </Layout>
  );
}

export default App;
