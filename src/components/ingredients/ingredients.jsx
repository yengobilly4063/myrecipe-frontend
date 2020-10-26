import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getIngredients, deleteIngredient} from "../../services/ingredientService"

class Ingredients extends Component {
    state = { 
        ingredients: [ ]
     }

    async componentDidMount(){
         const {data} = await getIngredients()
         this.setState({ingredients: data})
         
    }

    handleDelete = async(id) => {
        const ingredients = this.state.ingredients.filter(m => m._id !== id)
        this.setState({ingredients})

        const result = await deleteIngredient(id)
        console.log(result)
    }

    render() { 

        const {ingredients} = this.state

        return ( 
            <React.Fragment>
                <div className="container">
                    <Link className="btn btn-primary" to="/ingredients/new" style={{marginBottom: "10px"}} >New</Link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Comments</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredients.map(m => (
                                <tr key={m._id}>
                                    <th>{ingredients.indexOf(m)  +1}</th>
                                    <td>{m.name}</td>
                                    <td>{m.quantity}</td>
                                    <td>{m.comments}</td>
                                    <td>
                                        <Link className="btn btn-secondary" to={`/ingredients/${m._id}`} >Edit</Link> &nbsp;
                                        <button className="btn btn-danger" onClick={() => this.handleDelete(m._id)}>Delete</button>
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