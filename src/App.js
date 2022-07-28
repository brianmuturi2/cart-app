import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import {Fragment, useEffect} from 'react';
import Notification from './components/UI/Notification/Notification';
import {fetchCartData, sendCartData} from './store/cart-actions';

let isInitial = true

function App() {

    const dispatch = useDispatch();

    const showCart = useSelector(state => state.ui.cartIsVisible);

    const cart = useSelector(state => state.cart)

    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {
        dispatch(fetchCartData())
    }, [])

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }

        if (cart.changed) {
            dispatch(sendCartData(cart))
        }

    }, [cart])

    return (
        <Fragment>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
