import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "../Constant/UserConstants";
import { toast } from 'react-toastify';



//LOGIN
export const login = (email, password) => async (dispatch) => {
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    }
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`/api/users/login`, { email, password }, config);
        if (!data.isAdmin === true) {
            toast.error("You are not allowed to login", Toastobjects);
            dispatch({
                type: USER_LOGIN_FAIL
            })
        } else {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
        }

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


//LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({ type: USER_LOGOUT });

    // OPTIONAL
    document.location.href = "/login";
}


