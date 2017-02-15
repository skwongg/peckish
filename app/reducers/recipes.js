import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
export const searchedRecipes = createReducer({}, {

});

//default value of zero to increment up.
export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state, action) {
    return state+1
  }
});
