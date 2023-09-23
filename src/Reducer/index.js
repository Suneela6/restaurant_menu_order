import {combineReducers} from "redux";
import tablereducer from "./tablereducer";
import filterreducer from './Filterreducer'
import orderreducer from "./orderreducer";
const reducer = combineReducers({
    tablereducer : tablereducer,
    filterreducer : filterreducer,
    orderreducer: orderreducer
})

export default reducer;