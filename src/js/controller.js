import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
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
    recipeView.renderError(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2) Load search result
    await model.loadSearchResults(query);
    // 3) Render result
    resultsView.render(model.state.search.results);
  } catch (err) {
    alert(err.message);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();

// ########################################

// const input = document.querySelector('.search__field');
// const searchButton = document.querySelector('.search__btn');
// const results = document.querySelector('.results');

// const renderSpinner = function () {
//   const markup = `<div class="spinner">
//           <svg>
//             <use href="../img/icons.svg#icon-loader"></use>
//           </svg>
//         </div>`;
//   results.innerHTML = '';
//   results.insertAdjacentHTML('afterbegin', markup);
// };

// const loadResults = async function (query) {
//   try {
//     renderSpinner();
//     const res = await fetch(
//       `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
//     );
//     const data = await res.json();
//     const { recipes } = data.data;
//     if (!res.ok) {
//       throw new Error(`There's an error ${data.status}`);
//     }

//     recipes.forEach(recipe => {
//       console.log(recipe);
//       let markup = ` <li class="preview">
//             <a class="preview__link" href="#${recipe.id}">
//               <figure class="preview__fig">
//                 <img src="${recipe.image_url}" alt="Test" />
//               </figure>
//               <div class="preview__data">
//                 <h4 class="preview__title">${recipe.title}</h4>
//                 <p class="preview__publisher">${recipe.publisher}</p>
//               </div>
//             </a>
//           </li>`;
//       results.insertAdjacentHTML('afterBegin', markup);
//     });
//   } catch (err) {
//     alert(err.message);
//   }
// };
// searchButton.addEventListener('click', function (event) {
//   event.preventDefault();
//   const query = input.value;
//   if (!query) return;
//   loadResults(query);
// });
// ['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));
// #########################################
