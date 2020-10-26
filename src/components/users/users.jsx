import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserDetails from './userDetails';
import { getUsers } from './../../services/userServices';

class Users extends Component {
    state = { 
        users: []
    }

    async componentDidMount(){
        const {data: users} = await getUsers()
        console.log(users)
        this.setState({users})
    }

    render() { 
        const {users} = this.state

        if(users.length === 0) return <p>No users found</p>

        return ( 
            <React.Fragment>
                <div className="container-flex">
                    <h1>Users</h1>
                    <ul>
                    {users.map(user => (
                        <div>
                            <li>{user.name}</li>
                            <Link className="nav-item nav-link" to="/details" >Details</Link>
                        </div>
                        ))}
                    </ul>
                </div>

                <Switch>
                    <Route path="/users/details" component={UserDetails}></Route>
                </Switch>
            </React.Fragment>
         );
    }
}
 
export default Users;