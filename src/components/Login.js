import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        let loggedIn = false;
        super();
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
        // login magic 

    }
    render() {
        return (
            <div>
                <h1>login app</h1>
                <form onSubmit={this.submitFrom}>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="submit" />
                    <br />
                </form>
            </div>
        )
    }
}
