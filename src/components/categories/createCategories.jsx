import React from 'react';
import Joi from 'joi-browser';
import Form from './../common/form';
import {createCategory} from  "../../services/categoryService"

class CreateCategory extends Form {
    state = { 
        data: {
            name: "",
        },
        errors: {}
     }

     schema = {
         name: Joi.string().required().min(3).max(255).label("Name"),
     }

    doSubmit = async() => {
        const newCategory = {
            name: this.state.data.name
        }
        // console.log(this.props.history)

        const {data} = await createCategory(newCategory)
        if(!data) return this.props.history.replace("/categories/new")

        this.props.history.replace("/categories")
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                <h1>Create Ingredient</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Save")}
                </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CreateCategory;