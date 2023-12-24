import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from '../Constant/CartConstants';



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

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
}

// SAVE PAYMENT METHOD
export const savePaymentMethod = (data) => async (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    });
    localStorage.setItem("paymentMethod", JSON.stringify(data));
}