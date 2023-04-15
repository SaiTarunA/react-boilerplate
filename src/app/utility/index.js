/**
 * This is used in reducer to update one of the state value with new value
 *
 * Ex: state object key "mode" of value "light" to "dark"
 * @param {Object} state
 * @param {Object} other
 */
export const updateObject = (state, other) => {
  return {
    ...state,
    ...other,
  };
};
