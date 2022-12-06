import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST,
    SET_SELECTED_PRODUCT,
    SHOW_THE_PRODUCT
} from "../ActionType";

export const addItemToCart = data => ({
    type: ADD_TO_CART,  
    payload: data,

});
export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,

});
export const addToWishList = data => ({
    type: ADD_TO_WISHLIST,
    payload: data,

});
export const removeFromWhislist = index => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index,

});

export const showtheproduct = (data, dispatch) => {
    dispatch({
        type: SET_SELECTED_PRODUCT,
        payload: data,
    })
};