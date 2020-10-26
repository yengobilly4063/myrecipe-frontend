import React from 'react';
import Joi from 'joi-browser';
import Form from './../common/form';
import {getIngredientsById, updateIngredient} from "../../services/ingredientService"

class IngredientDetails extends Form {
    state = { 
        data: {
            _id: "",
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
        comments: Joi.string().required().min(5).max(255).label("Comment")
     }


    async componentDidMount() {
        const id = this.props.match.params.id
        const {data} = await getIngredientsById(id)
        console.log(data)

        if(!data) return this.props.history.replace("/not-found")

        this.setState({data: this.mapToViewModel(data)})
    }

    mapToViewModel(data) {
        const {_id, name, quantity, comments} = data
        return {
            _id,
            name,
            quantity,
            comments
        }
    }

    doSubmit = async() => {
        const {_id, name, quantity, comments} = this.state.data

        const newIngredient = {
            name, quantity, comments
        }

        const {data} = await updateIngredient(_id, newIngredient)

        if(!data) return this.props.history.replace(`/ingredients/${_id}`)

        this.props.history.replace("/ingredients")
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                <h1>Edit Ingredient</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("quantity", "Quantity")}
                    {this.renderInput("comments", "Comment")}
                    {this.renderButton("Update")}
                </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default IngredientDetails;