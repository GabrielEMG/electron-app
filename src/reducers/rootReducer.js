import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import clientsReducer from "./clientsReducer";
import buysReducer from "./buysReducer";

const rootReducer = combineReducers({
  orders: ordersReducer,
  clients: clientsReducer,
  buys: buysReducer,
});

export default rootReducer;
