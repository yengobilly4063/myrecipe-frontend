import React from 'react';
import Joi from 'joi-browser';
import Form from './../common/form';
import { createIngredient } from '../../services/ingredientService';

class CreateIngredient extends Form {
    state = { 
        data: {
            name: "",
            quantity: "",
            comments: ""
        },
        errors: {}
     }

    schema = {
        _id: Joi.string(),
        name: Joi.string().required().min(3).max(255).label("Name"),
        quantity: Joi.number().min(1).max(50).default(1).label("Quantity"),
        comments: Joi.string().required().min(5).max(255).label("Comments")
    }

    doSubmit = async() => {
        const {name, quantity, comments} = this.state.data
        const newIngredient = {
            name,
            quantity,
            comments
        }

        const {data} = await createIngredient(newIngredient)
        if(!data) return this.props.history.replace("/ingredients/new")

        this.props.history.replace("/ingredients")
    } 

    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                <h1>Create Ingredient</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("quantity", "Quantity")}
                    {this.renderInput("comments", "Comments")}
                    {this.renderButton("Save")}
                </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CreateIngredient;