import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom"

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
             <nav className="navbar navbar-expand-lg navbar-light bg-ligh" >
            <Link className="navbar-brand" to={"/"}>
              LOGO
            </Link>
                <div className="container">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/">
                  Recipe
                </NavLink>
                {/* <NavLink className="nav-item nav-link" to="/users" >Profile</NavLink> */}
                <NavLink className="nav-item nav-link" to="/ingredients" >Ingredients</NavLink>
                <NavLink className="nav-item nav-link" to="/categories" >Categories</NavLink>
                <NavLink className="nav-item nav-link" to="/login" >Login</NavLink>
                <NavLink className="nav-item nav-link" to="/user" >Create User</NavLink>
              </div>
                </div>
            </div>
          </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;