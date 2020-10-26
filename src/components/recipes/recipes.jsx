import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {getRecipes} from "../../services/recipeService"

class Recipes extends Component {
    state = { 
        recipes: [],
        data: []
     }

    async componentDidMount(){
        const {data} = await getRecipes()
        this.setState({recipes: data})
    }
    render() { 
        
        const {recipes} = this.state

        return ( 
            <React.Fragment>
                <ToastContainer />
                <div className="container">
                    <span><Link to="/recipes/new" ><button className="btn btn-primary">Create new Recipe</button></Link></span>
                    <div className="container-flex" >
                        {recipes.map(recipe => (
                            <div key={recipe._id} className="card flex-item" style={{minHeight: "500px", border:"1px solid red"}}>
                                <img style={{height: "60%"}} className="card-img-top" src={`http://localhost:3000/${recipe.recipeImage}`} alt={recipe.name}/>
                                <div className="card-body">
                                    <div>{recipe.name}</div>
                                    <div>Category: {recipe.categories.map(m => (<span key={m._id}>{m.name}</span>))}</div>
                                    <div>Main Ingredient: {recipe.ingredients.map(m => (<span key={m._id}>{m.name}</span>))}</div>
                                    <Link to={`/recipes/${recipe._id}`} >Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Recipes;