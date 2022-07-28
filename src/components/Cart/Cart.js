import Card from '../UI/Card/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {

    const cartItems = useSelector(state => state.cart.items)

    const cartItemList = cartItems.map(item => (
        <CartItem
            key={item.id}
            item={{...item, title: item.name, total: item.totalPrice, id: item.id}}
        />
    ))

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItemList}
            </ul>
        </Card>
    );
};

export default Cart;
