// import {
//     ADD_TO_CART,
//     ADD_TO_WISHLIST,
//     REMOVE_FROM_CART,
//     REMOVE_FROM_WISHLIST
// } from "../ActionType";

// const initialState = {
//     cartList:[],
//     wishlistData:[],
// }

// export default function (state = initialState, action) {
//     switch (action.type) {

//         case ADD_TO_CART:
//             let tempCartList = state.cartList;
//             tempCartList.push(action.payload);
//             // console.log("temp====>", tempCartList)
//             return {
//                 ...state,
//                 cartList: tempCartList
//             };
//         case REMOVE_FROM_CART:
//             const deletedArray1 = state.cartList.filter((item, index) => {
//                 return index !== action.payload
//             })
//             return { ...state, cartList: deletedArray1 };

//         case ADD_TO_WISHLIST:
//             let tempWishList = state.wishlistData;
//             tempWishList.push(action.payload);
//             console.log("temp====>", tempWishList)
//             return {
//                 ...state,
//                 wishlistData: action.payload
//             };

//         case REMOVE_FROM_WISHLIST:
//             const deletedArray2 = state.wishlistData.filter((item, index) => {
//                 return index !== action.payload
//             })
//             return { ...state, wishlistData: deletedArray2 };

//         default:
//             return state;
//     }
// }
// import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionType";

// const Reducers = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return [...state, action.payload];
//         case REMOVE_FROM_CART:
//             const deletedArray1 = state.filter((item, index) => {
//                 return index !== action.payload.id
//             })

//             return deletedArray1;
      
//         default:
//             return state;
//     }
// }
// export default Reducers;

import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionType";

const Reducers = (state = [], action) => {
    switch (action.type) {
       
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            const deletedArray = state.filter((item, index) => {
                return index !== action.payload
            })

            return deletedArray;
        default:
            return state;
    }
}
export default Reducers;