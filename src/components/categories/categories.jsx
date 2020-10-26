import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getCategories, deleteCategory} from "../../services/categoryService"


class Ingredients extends Component {
    state = { 
        categories: []
     }

    async componentDidMount(){
        const {data} = await getCategories()
        this.setState({categories: data})
    }

    handleDelete = async(id) => {
        const categories = this.state.categories.filter(m => m._id !== id)
        this.setState({categories})

        const result = await deleteCategory(id)
        console.log(result)
    }

    render() { 

        const {categories} = this.state

        return ( 
            <React.Fragment>
                <div className="container">
                    <Link className="btn btn-primary" to="/categories/new" style={{marginBottom: "10px"}} >New</Link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(category => (
                                <tr key={category._id}>
                                    <th>{categories.indexOf(category)  +1}</th>
                                    <td>{category.name}</td>
                                    <td></td>
                                    <td>
                                        <Link className="btn btn-secondary" to={`/categories/${category._id}`} >Edit</Link> &nbsp;
                                        <button className="btn btn-danger" onClick={() => this.handleDelete(category._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Ingredients;