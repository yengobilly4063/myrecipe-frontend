import React from 'react';
import Input from './../common/input';
import Joi from "joi-browser"
import Form from './../common/form';
import {loginAuthUser} from "../../services/userServices"

class LoginForm extends Form {

    state = {
        data: {email: "", password: ""},
        errors: {}
    }

    schema = {
        email: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }


    doSubmit = async() => {
        const {email, password} = this.state.data
        const newUser = {email, password}
        console.log(newUser)

        const {data} = await loginAuthUser(newUser)
        console.log(data)
        if(!data) return this.props.history.replace("/login")
        

        this.props.history.replace("/")
        //call server
        console.log("Submitted")
    }

    render() { 
        const {data, errors} = this.state
        return ( 
            <React.Fragment>
                <div className="container"><h1>Login</h1></div>
               <div className="container" style={{marginTop: "20px"}}> 
               <form onSubmit={this.handleSubmit} style={{width: "50%"}}>
                   <Input name="email" label="Username" value={data.email} onChange={this.handleChange} errors={errors} />
                   <Input name="password" type="password" label="Password" value={data.password} onChange={this.handleChange} errors={errors} />
                   {this.renderButton("Login")}
               </form>
               </div>
            </React.Fragment>
         );
    }
}
 
export default LoginForm;