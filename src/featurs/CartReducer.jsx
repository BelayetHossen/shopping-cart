
export const subTotal = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.selling_price, 0);
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, action.product];

        case "Remove":
            return state.filter(product => product.id !== action.id);

        case "Increase":
            return state.map(product =>
                product.id === action.id && product.quantity < 10
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );


        case "Decrease":
            return state.map(product =>
                product.id === action.id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );

        default:
            return state;
    }
};

export default CartReducer;
