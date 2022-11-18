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
import Reducers3 from "../reducers/Reducers3";
import HomeReducer from "../reducers/HomeReducer";


let root = { Reducers: Reducers, Reducers2: Reducers2, home: HomeReducer }

const routeReducer = combineReducers(root)
const store = createStore(routeReducer);

export default store;