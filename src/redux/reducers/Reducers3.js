import {  SHOW_THE_PRODUCT } from "../ActionType";

const Reducers3 = (state = {}, action) => {
    switch (action.type) {
        case SHOW_THE_PRODUCT:
            return [...state, action.payload];

        default:
            return state;
    }
}
export default Reducers3;