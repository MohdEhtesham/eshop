// import {createStore} from "redux";
// import { combineReducers } from "redux";
// import Reducers from "../reducers/Reducers";
// import Reducers2 from "../reducers/Reducers2";


// const routeReducer=combineReducers({Reducers})
// const store=createStore(routeReducer);

// export default store;

import { createStore } from "redux";
import { combineReducers } from "redux";
import Reducers from "../reducers/Reducers";
import Reducers2 from "../reducers/Reducers2";


const routeReducer = combineReducers({  Reducers,  Reducers2 })
const store = createStore(routeReducer);

export default store;