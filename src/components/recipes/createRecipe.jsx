import React from 'react';
import  Joi from 'joi-browser';
import Form from './../common/form';

class CreateRecipe extends Form {
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
        instructions: Joi.string().required().min(10).max(255).label("Instructions"),
        nutritionalInfo: Joi.string().required().min(5).max(255).label("Nutritional Info"),
        recipeImage: Joi.string().required(),
        categoryId: Joi.string().required().label("Category"),
        ingredientsId: Joi.string().required().label("Main Ingredient"),
     }

     categories = [
         {id: 1, name: "Foody"},
         {id: 2, name: "Vegan"}
     ]

     ingredients = [
         {id: 1, name: "Onion", quantity: 3, comments: "Slice in 4 halfs"},
         {id: 2, name: "Tomatoes", quantity: 4, comments: "Smash into slimmy lumps"},
     ]

     componentDidMount() {
        
        this.setState({categories: this.categories, ingredients: this.ingredients})

    }

    doSubmit = () => {
        console.log(this.props)
        console.log("Submited!");
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Create Recipe</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name", )}
                    {this.renderTextArea("description", "Description" )}
                    {this.renderTextArea("instructions", "Instructions" )}
                    {this.renderInput("nutritionalInfo", "Nutritional Info" )}
                    {this.renderInput("recipeImage", "Recipe Image", "file" )}
                    {this.renderSelect("categoryId", "Category", this.state.categories )}
                    {this.renderSelect("ingredientsId", "Main Ingredient", this.state.ingredients )}
                    {this.renderButton("Save")}
                </form>    
            </React.Fragment>
         );
    }
}
 
export default CreateRecipe;