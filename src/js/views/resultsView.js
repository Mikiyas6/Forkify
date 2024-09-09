// resultsView.js
import View from './View.js';
import previewView from './previewView.js';
class ResultsView extends View {
  //  Represents the DOM element where the view will render its content
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipes Found For Your Query! Please try again';
  _generateMarkup() {
    return this._data.map(recipe => previewView.render(recipe, false)).join('');
  }
}

export default new ResultsView();
