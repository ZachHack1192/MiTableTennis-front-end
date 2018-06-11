import React, { Component } from 'react'
import '../styles/home.css'
import { Button } from 'mdbreact'
import { Link } from 'react-router-dom'

class DeletePlayer extends Component {
    render() {
        return(
            <div>
                <h1 className="head">DELETE PLAYER</h1>
                <br/>
                <div className="center">
                    <Link to="/"><Button className="title" color="blue">HOME</Button></Link>
                </div>
            </div>
        )
    }
}

export default DeletePlayer