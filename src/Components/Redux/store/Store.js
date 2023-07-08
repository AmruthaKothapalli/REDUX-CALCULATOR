import { createStore } from "redux";
import { commonReducer } from "../reducer/CommonReducer";

export const store = createStore(commonReducer, {});
