import { combineReducers } from "redux";
import { calculatorReducer } from "../calculator-reducer/CalculatorReducer";

export const commonReducer = combineReducers({
  calculatorData: calculatorReducer,
});
