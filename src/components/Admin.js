import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';

export default class Admin extends Component {
    constructor(props) {
        super();
        const token = localStorage.getItem("token");
        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if(!this.state.loggedIn){
            return <Redirect to="/" />
        }
        return (

            <div>
                <h1>this is the admin page only authorised people can access it.</h1>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
