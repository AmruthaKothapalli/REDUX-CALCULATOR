import { ACTION_TYPES } from "../Action-types/ActionType";
export const Numbers = (value) => {
  return {
    type: ACTION_TYPES.Numbers,
    payload: value,
  };
};

export const Operations = (value) => {
  return {
    type: ACTION_TYPES.Operations,
    payload: value,
  };
};
export const AllClear = (value) => {
  return {
    type: ACTION_TYPES.AllClear,
    payload: value,
  };
};
export const Delete = (value) => {
  return {
    type: ACTION_TYPES.Delete,
    payload: value,
  };
};
export const Eval = (value) => {
  return {
    type: ACTION_TYPES.Eval,
    payload: value,
  };
};
