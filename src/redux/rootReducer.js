import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import donutReducer from "./donuts/donutReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  donut: donutReducer,
});

export default rootReducer;
