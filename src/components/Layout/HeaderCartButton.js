import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../store/cart-context';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) =>{
  const CartContext = useContext(CartContext);

  const numberOfCartItem = CratCtx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
    return (
      <button className={classes.button} onclick={props.onclick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
        <span>{CartContextt.message}</span>
      </button>
    );
};

export default HeaderCartButton; 