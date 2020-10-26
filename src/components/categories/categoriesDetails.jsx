import React from 'react';
import Joi from 'joi-browser';
import Form from './../common/form';
import {getCategoryById, updateCategory} from "../../services/categoryService"

class CategoryDetails extends Form {
    state = { 
        data: {
            name: "",
        },
        errors: {}
     }

     schema = {
        _id: Joi.string(),
        name: Joi.string().required().min(3).max(255).label("Name"),
     }

    doSubmit = () => {
         console.log("Submitted!")
    }


    category = {id: 1, name: "Foody"}
    


    async componentDidMount() {
        const _id = this.props.match.params.id
        const {data} = await getCategoryById(_id)

        console.log(data)
        if(!data) return this.props.history.replace("/not-found")

        this.setState({data: this.mapToViewModel(data)})
    }

    mapToViewModel(category) {
        return {
            _id: category._id,
            name: category.name,
        }
    }

    doSubmit = async() => {
        console.log(this.state.data)
        const {_id, name} = this.state.data

        const newCategory = {
            name
        }

        const {data} = await updateCategory(_id, newCategory)

        if(!data) return this.props.history.replace(`/categories/${_id}`)

        this.props.history.replace("/categories")
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                <h1>Create Ingredient</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Update")}
                </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CategoryDetails;