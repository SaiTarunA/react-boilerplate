export const common = {
  THEME_MODE_TOGGLE: 1,
  THEME_MODE_CHANGE: 2,
  type: {
    1: "THEME_MODE_TOGGLE",
    2: "THEME_MODE_CHANGE",
  },
};

Object.freeze(common);

export const homePage = {
  FETCH_USER_PROFILE_LOADING: 1,
  FETCH_USER_PROFILE_SUCCESS: 2,
  FETCH_USER_PROFILE_FAILURE: 3,
  type: {
    1: "FETCH_USER_PROFILE_LOADING",
    2: "FETCH_USER_PROFILE_SUCCESS",
    3: "FETCH_USER_PROFILE_FAILURE",
  },
};

Object.freeze(homePage);
