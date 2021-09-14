import React, { Component } from 'react'
import { Redirect, Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super();
        const token = localStorage.getItem("token");
        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.submitFrom = this.submitFrom.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitFrom(e) {
        e.preventDefault();
        const { username, password } = this.state;
        console.log(username, password);
        const newUserObject = JSON.parse(localStorage.getItem("newUserObject"));
        // login magic
        if (newUserObject && username === newUserObject.username && password === newUserObject.password) {
            localStorage.setItem("token", "dnsdfskjfnsnfsojfsmkofafm")
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (
            <div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.submitFrom}>
                    <input type="text" className="form-control" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" className="form-control" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="submit" className="btn btn-primary" />
                    <Link to="/register" className="btn btn-link">Register </Link>
                    <br />
                </form>
            </div>
        )
    }
}
