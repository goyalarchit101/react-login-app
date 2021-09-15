import React, { Component } from 'react'

export default class Posts extends Component {

    constructor(props) {
        super();
        this.state = {
            data: false
        }
    }

    componentDidMount() {
        const url = "http://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': "application/json",
            }
        }).then((result) => {
            result.json().then((res) => {
                this.setState({
                    data: res
                })
            })
        })
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                {
                    data ?
                        <div>
                            <ul>
                                {data.map(data => {
                                    return  <li key={data.id} className="boldweight">{data.title}</li>;
                                })}
                            </ul>
                        </div> :
                        <p>
                            plz wait.....
                        </p>
                }
            </div>
        )
    }
}
