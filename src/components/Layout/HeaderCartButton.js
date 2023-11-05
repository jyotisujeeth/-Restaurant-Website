import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
//mport CartContext from '../store/cart-context';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) =>{
  const CartContext = useContext(CartContext);

  const numberOfCartItem = CartContext.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
    return (
      <button className={classes.button} onclick={props.onclick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
        <span>{CartContext.message}</span>
      </button>
    );
};

export default HeaderCartButton; 