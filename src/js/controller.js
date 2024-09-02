import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function (event) {
  try {
    // const id = event.newURL.split('#')[1];
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // 1) Loading Recipe
    await model.loadRecipe(id);
    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
