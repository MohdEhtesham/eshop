import { SET_SELECTED_PRODUCT } from "../ActionType";


const initialState = {
    selectedProduct: {},

}

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload
            };

        default:
            return state;
    }
}
export default HomeReducer;