import CartContext from "./cart-context";


const Cartprovider = props => {
const addItemToCartHandler = item => {};

const removeItemFromCartHandler = id => {};

    const cartContext = {
      items: [],
      totalAmount: 0,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      message: "i am acessable cart"
    };


return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
};

export default Cartprovider;