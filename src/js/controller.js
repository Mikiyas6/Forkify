import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import { START_PAGE } from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
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
    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    // 1) updating bookmarks view
    bookmarksView.update(model.state.bookmarks);
    // 2) Loading Recipe
    await model.loadRecipe(id);
    // 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
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
    resultsView.render(model.getSearchResultsPage(START_PAGE));

    // 4) Render Initial Pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    alert(err.message);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render New Results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // 2) Render New Pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);
  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else {
    model.deleteBookmark(model.state.recipe.id);
  }
  // 2) update recipe view
  recipeView.update(model.state.recipe);
  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
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
