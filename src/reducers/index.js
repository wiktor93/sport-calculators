import {combineReducers} from "redux";

import chosenCalculatorReducer from "./chosenCalculatorReducer";

export default combineReducers({
  chosenCalculator: chosenCalculatorReducer
});
