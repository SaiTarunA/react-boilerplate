import { homePage as homePageActionTypes } from "../actions/actionTypes.js";
import { updateObject } from "../utility";

const initialState = {
  userProfile: {},
  loading: {
    userProfile: false,
  },
};

export const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case homePageActionTypes.type[
      homePageActionTypes.FETCH_USER_PROFILE_LOADING
    ]:
      return updateObject(state, {
        loading: { ...state.loading, userProfile: true },
      });
    case homePageActionTypes.type[
      homePageActionTypes.FETCH_USER_PROFILE_SUCCESS
    ]:
      return updateObject(state, {
        userProfile: action.userProfile,
        loading: { ...state.loading, userProfile: false },
      });
    case homePageActionTypes.type[
      homePageActionTypes.FETCH_USER_PROFILE_FAILURE
    ]:
      return updateObject(state, {
        userProfile: initialState.userProfile,
        loading: { ...state.loading, userProfile: false },
      });
    default:
      return state;
  }
};
