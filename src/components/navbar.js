import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            <div className="bg-secondary">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-0 mt-5 navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/photos">Photos</Link>
                        <Link className="navbar-brand" to="/posts">Posts</Link>
                        <Link  className="navbar-brand"to="/logout">Logout</Link>
                    </div>
                </div>
            </div>
        )
    }
}
