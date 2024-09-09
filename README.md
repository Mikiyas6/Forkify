# **Forkify Web-App**

![Forkify Web-App](./src/img/logo.png)

## **Welcome! 👋**

Thanks for checking out my project that uses the Model-View-Controller (MVC) architecture

- Github Repo: [Github-link](https://github.com/Mikiyas6/Forkify)
- Live Site URL: [Page-link](https://mineforkify.netlify.app/)

## **Table of Contents**

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Reference](#api-reference)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## **Features**

- **Search Recipes**: Find recipes from a vast database by searching for ingredients or dish names.
- **View Detailed Recipes**: Access detailed information including cooking time, servings, ingredients, and instructions.
- **Adjust Servings**: Dynamically update ingredient quantities based on the number of servings.
- **Bookmark Recipes**: Save your favorite recipes for quick access later.
- **Add Your Own Recipes**: Upload your personal recipes and have them automatically bookmarked.
- **Pagination**: Navigate through search results with ease using pagination controls.
- **Local Storage**: All bookmarks are stored locally, so your saved recipes persist across sessions.

## **Getting Started**

### **Prerequisites**

To run this project locally, you'll need:

- Node.js (v12.0.0 or later)
- npm (v6.0.0 or later)

### **Installation**

**Clone the Repository**:
bash
git clone https://github.com/Mikiyas6/Forkify.git

**Navigate to the Project Directory**:

```bash
cd forkify
```

**Install Dependencies**:

```bash
npm install
```

**Start the Development Server**:

```bash
npm start
```

This will open the application in your default browser.

## **Usage**

Once the application is running, you can:

- Use the search bar to find recipes.
- Click on any search result to view the full recipe details.
- Adjust the servings to see the ingredients update automatically.
- Bookmark recipes by clicking the bookmark icon in the recipe details.
- View your saved bookmarks by clicking the "Bookmarks" button.
- Add your own recipes by clicking the "Add Recipe" button and filling out the form.

## **Project Structure**

```
forkify/
│
├── src/
│   ├── img/                # Images used in the project
│   ├── js/
│   │   ├── config.js       # API configuration and constants
│   │   ├── controller.js   # Main controller file managing the MVC architecture
│   │   ├── model.js        # Model handling application data and state
│   │   ├── views/          # Views for rendering the UI
│   │   │   ├── RecipeView.js
│   │   │   ├── SearchView.js
│   │   │   ├── ResultsView.js
│   │   │   ├── BookmarksView.js
│   │   │   ├── PaginationView.js
│   │   │   └── AddRecipeView.js
│   │   ├── helpers.js      # Utility functions
│   │   └── view.js         # Base view class
│   └── sass/               # SCSS files for styling
│
├── index.html              # Main HTML file
├── package.json            # NPM package configuration
└── README.md               # Documentation (you are here)
```

## **Technologies Used**

- **JavaScript (ES6+)**: Core language used for application logic.
- **HTML5 & SCSS**: Markup and styling.
- **Forkify API**: Used for fetching recipe data.
- **Webpack**: Module bundler for compiling and bundling the project.
- **Babel**: JavaScript compiler to ensure compatibility with older browsers.
- **Local Storage**: For persisting bookmarks across sessions.

## **API Reference**

The project uses the Forkify API to fetch recipe data. You can find more details about the API [here](https://forkify-api.herokuapp.com/v2).

- **Base URL**: `https://forkify-api.herokuapp.com/api/v2/recipes`
- **Endpoints**:
  - `GET /?search=<query>`: Search for recipes by query.
  - `GET /:id`: Get detailed information about a recipe by its ID.
  - `POST /`: Add a new recipe.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## **Acknowledgments**

- This project was inspired by the "JavaScript: The Complete Guide 2023" course by Jonas Schmedtmann.
- Thanks to the creators of the Forkify API for providing such a rich dataset of recipes.
