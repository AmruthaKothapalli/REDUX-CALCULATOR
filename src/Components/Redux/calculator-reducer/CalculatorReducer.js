import { ACTION_TYPES } from "../Action-types/ActionType";

const initialState = {
  value: "",
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.Numbers:
      return { ...state, value: state.value + action.payload };
    case ACTION_TYPES.AllClear:
      return { ...state, value: action.payload };
    case ACTION_TYPES.Operations:
      return {
        ...state,
        value:
          state.value.slice(-1) === action.payload
            ? state.value
            : state.value + action.payload,
      };

    case ACTION_TYPES.Delete:
      return {
        ...state,
        value: state.value.substring(0, state.value.length - 1),
      };
    case ACTION_TYPES.Eval:
      return { ...state, value: eval(state.value) };
    default:
      return state;
  }
};
