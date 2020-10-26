import React from 'react';
import Form from './../common/form';
import Joi from "joi-browser"
import { getRecipesById } from '../../services/recipeService';
import { getIngredients } from './../../services/ingredientService';
import { getCategories } from './../../services/categoryService';
import { updateRecipe } from './../../services/recipeService';

class RecipeDetails extends Form {
    state = { 
        data: {
            name: "",
            description: "",
            instructions: "",
            nutritionalInfo: "",
            recipeImage: "",
            categoryId: "",
            ingredientsId: ""
        },

        categories: [],
        ingredients: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        name: Joi.string().required().min(3).max(255).label("Name"),
        description: Joi.string().required().min(10).max(255).label("Description"),
        instructions: Joi.string().required().min(10).max(255).label("Intructions"),
        nutritionalInfo: Joi.string().required().min(5).max(255).label("Nutritional Info"),
        recipeImage: Joi.string().required().label("Recipe Image"),
        categoryId: Joi.string().required().label("Category"),
        ingredientsId: Joi.string().required().label("Ingredient")
    }


    async componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)
        const {data: recipe} = await getRecipesById(id)
        const {data: ingredients} = await getIngredients()
        const {data: categories} = await getCategories()


        this.setState({data: this.mapToViewModel(recipe, ingredients, categories), categories, ingredients})
        console.log(this.state.data)
    }

    mapToViewModel(recipe, ingredient, category) {
        const {_id, name, description, instructions, nutritionalInfo, recipeImage} = recipe
        return {
            _id,
            name,
            description,
            instructions,
            nutritionalInfo, 
            recipeImage, 
            categoryId: category,
            ingredientsId: ingredient
        }
    }

    doSubmit = async () => {
        const {_id} = this.state.data
        const {name, description, instructions, nutritionalInfo, recipeImage, categoryId, ingredientsId} = this.state.data
        const newRecipe = {
            name,
            description,
            instructions,
            nutritionalInfo, 
            recipeImage, 
            categoryId,
            ingredientsId
        }

        // console.log(newRecipe);

        const {data} = await updateRecipe(_id, newRecipe)
        console.log(data);

        if(!data) return this.props.history.replace(`/recipes/${_id}`)

        this.props.history.replace("/")
    }



    render() { 

        const {recipeImage} = this.state.data
        return ( 
            <React.Fragment>
                <h1>{this.state.data.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name", )}
                    {this.renderTextArea("description", "Description" )}
                    {this.renderTextArea("instructions", "Instructions" )}
                    {this.renderInput("nutritionalInfo", "Nutritional Info" )}
                    {recipeImage ? 
                        <img style={{minHeight: "200px", maxHeight: "200px", width: "200px"}} className="card-img-top" src={`http://localhost:3000/${recipeImage}`} alt={"Saved In Quee"}/>
                         :
                        this.renderInput("recipeImage", "Recipe Image", "file" )
                    }
                    {this.renderSelect("categoryId", "Category", this.state.categories )}
                    {this.renderSelect("ingredientsId", "Main Ingredient", this.state.ingredients )}
                    {this.renderButton("Update")}
                </form>    
            </React.Fragment>
         );
    }
}
 
export default RecipeDetails;