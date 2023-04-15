import { common as commonActionTypes } from "./actionTypes.js";

export const changeThemeMode = (type, mode) => {
  return (dispatch) => {
    switch (type) {
      case "toggle":
        dispatch(themeModeToggle());
        break;
      default:
        dispatch(themeModeChange(mode));
    }
  };
};

const themeModeToggle = () => {
  return {
    type: commonActionTypes.type[commonActionTypes.THEME_MODE_TOGGLE],
  };
};
const themeModeChange = (mode) => {
  return {
    type: commonActionTypes.type[commonActionTypes.THEME_MODE_CHANGE],
    mode: mode,
  };
};
