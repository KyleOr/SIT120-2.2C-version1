// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    recipes: [], // Initialize an empty array for recipes
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push(recipe); // Add the recipe to the state
    },
  },
  
});
