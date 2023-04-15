import { combineReducers } from "@reduxjs/toolkit";
import { homePageReducer } from "./homePageReducer";
import { commonReducer } from "./commonReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  homePage: homePageReducer,
});

export default rootReducer;
