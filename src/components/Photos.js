import React, { Component } from 'react'
export default class Photos extends Component {

    constructor(props) {
        super();
        this.state = {
            data: false
        }
    }

    componentDidMount() {
        const url = "http://jsonplaceholder.typicode.com/photos";
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
        if (data) {
            console.log(data[0].url)
        }
        return (
            <div>
                {
                    data ?
                        <div>
                            {data.map(data => {
                                return <img src="{data.url}" alt="image"></img>;
                            })}
                        </div> :
                        <p>
                            plz wait.....
                        </p>
                }
            </div>
        )
    }
}
