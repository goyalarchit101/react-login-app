import React, { Component } from 'react'
import { Redirect, Link } from "react-router-dom";

export default class Register extends Component {

    constructor(props) {
        let isRegisterd = false
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            isRegisterd
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
        this.setState ({
            isRegisterd : true
        })
        // Put the object into storage
        localStorage.setItem('newUserObject', JSON.stringify(this.state));
      
    }

    render() {
        if(this.state.isRegisterd){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h2>Register</h2>
                <form name="form" onSubmit={this.submitFrom}>
                    <input type="text" className="form-control" placeholder="Firstname" name="firstname" value={this.state.firstname} onChange={this.onChange} />
                    <br />
                    <input type="text" className="form-control" placeholder="Lastname" name="lastname" value={this.state.lastname} onChange={this.onChange} />
                    <br />
                    <input type="text" className="form-control" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="submit" className="btn btn-primary" />
                    <br />
                </form>
            </div>
        )
    }
}
