import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Logout extends Component {
    constructor(props) {
        super();
        const token = localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>you have been logged out!!!</h1>
                <Link to ="/">Login</Link>
            </div>
        )
    }
}
