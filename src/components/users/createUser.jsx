import React from 'react';
import Form from './../common/form';
import  Joi  from 'joi-browser';
import {createUser} from "../../services/userServices"

class CreateUser extends Form {
    state = { 
        data: {
            username: "",
            email: "",
            password: "",
            isAdmin: "false"
        },
        errors: {}
     }

     schema = {
         _id: Joi.string(),
         username: Joi.string().required().label("Name"),
         email: Joi.string().required().email().label("Email"),
         password: Joi.string().required().label("Password"),
         isAdmin: Joi.string().default(false)
     }

   
     doSubmit = async () => {
        const {username, email, password, isAdmin} = this.state.data
        const newUser = {username, email, password, isAdmin}
        console.log(newUser)

        const {data} = await createUser(newUser)
        console.log(data)
        if(!data) return this.props.history.replace("/user")
        

        this.props.history.replace("/")
     }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container"></div>
                <div className="container" style={{marginTop: "20px"}}>
                    <h1>Create User</h1>
                    <form onSubmit={this.handleSubmit} style={{width: "50%"}}>
                        {this.renderInput("username", "Username")}
                        {this.renderInput("email", "Email")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderIsAdmin("isAdmin")}
                        {this.renderButton("Create User")}
                    </form>
                </div>
                
            </React.Fragment>
         );
    }
}
 
export default CreateUser;