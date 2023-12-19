import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Constant/CartConstants';



// ADD TO CART
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty: qty,
        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

// REMOVE PRODUCT FROM CART
export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });
    localStorage.removeItem("cartItems", JSON.stringify(getState().cart.cartItems));
}