import React from 'react';
import './App.css';
import Footer from './components/common/footer';
import NavBar from './components/common/navbar';
import { Route, Switch, Redirect } from "react-router-dom";
import Recipes from './components/recipes/recipes';
// import Users from './components/users/users';
import NotFound from './components/not-found';
import Ingredients from './components/ingredients/ingredients';
import Categories from './components/categories/categories';
import RecipeDetails from "./components/recipes/recipeDetails"
import CreateRecipe from './components/recipes/createRecipe';
import LoginForm from './components/users/loginForm';
import CreateUser from './components/users/createUser';
import CreateIngredient from './components/ingredients/createIngredients';
import CreateCategory from './components/categories/createCategories';
import CategoryDetails from './components/categories/categoriesDetails';
import IngredientDetails from './components/ingredients/ingedientDetails';


function App() {
  return (
    <React.Fragment>
      <div className="app-body"></div>
      <div className="nav-bar">
      <NavBar />
      </div>
      <div className="the-content">
      <Switch>
          <div className="container">
            <Route path="/user/" component={CreateUser} ></Route>
            {/* <Route path="/users/"  component={Users} ></Route> */}
            <Route path="/login" exact component={LoginForm}></Route>
            <Switch>
              <Route path="/ingredients/new"  component={CreateIngredient}></Route>
              <Route path="/ingredients/:id"  component={IngredientDetails}></Route>
              <Route path="/ingredients/" exact  component={Ingredients}></Route>
            </Switch>
            <Switch>
              <Route path="/categories/new" component={CreateCategory}></Route>
              <Route path="/categories/:id" component={CategoryDetails}></Route>
              <Route path="/categories/" exact component={Categories}></Route>
            </Switch>
            <Route path="/not-found/" component={NotFound}></Route>
            <Switch>
              <Route path="/recipes/new" component={CreateRecipe}></Route>
              <Route path="/recipes/:id" component={RecipeDetails}></Route>
              <Route path="/" exact component={Recipes} ></Route>
            </Switch>
            <Redirect to="/not-found"></Redirect>
            <Redirect from="/recipes" to="/"></Redirect>
          </div>
        </Switch>
      </div>
        <div className="footer">
        <Footer />
      </div>
    </React.Fragment>
      
  );
}

export default App;
