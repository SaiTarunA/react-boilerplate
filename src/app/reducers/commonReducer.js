import { common as commonActionTypes } from "../actions/actionTypes.js";
import { updateObject } from "../utility";

const initialState = {
  mode: "light",
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonActionTypes.type[commonActionTypes.THEME_MODE_CHANGE]:
      return updateObject(state, {
        mode: action.mode,
      });
    case commonActionTypes.type[commonActionTypes.THEME_MODE_TOGGLE]:
      const newMode = state.mode === "light" ? "dark" : "light";
      return updateObject(state, {
        mode: newMode,
      });
    default:
      return state;
  }
};
