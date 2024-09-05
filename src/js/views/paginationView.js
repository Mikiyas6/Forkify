import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton({ type: 'next', num: 2 });
    }
    // Page 1, and there are No other pages
    if (curPage === 1 && curPage == numPages) {
      return '';
    }
    // Last Page
    if (curPage === numPages) {
      return this._generateMarkupButton({ type: 'prev', num: numPages - 1 });
    }
    // Other Page
    if (curPage > 1 && curPage < numPages) {
      return this._generateMarkupButton({ type: 'both', num: curPage });
    }
  }

  _generateMarkupButton(buttonInfo) {
    if (buttonInfo.type === 'prev') {
      return `<button data-goto="${buttonInfo.num}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${buttonInfo.num}</span>
          </button>`;
    } else if (buttonInfo.type === 'next') {
      return `<button data-goto="${buttonInfo.num}" class="btn--inline pagination__btn--next">
      <span>Page ${buttonInfo.num}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    return `<button data-goto="${
      buttonInfo.num - 1
    }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${buttonInfo.num - 1}</span>
          </button>
          <button data-goto="${
            buttonInfo.num + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${buttonInfo.num + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
