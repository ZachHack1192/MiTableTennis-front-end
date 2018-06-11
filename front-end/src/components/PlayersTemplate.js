import React, { Component } from 'react'
import '../styles/home.css'
import '../styles/players-template.css'

class PlayersTemplate extends Component {
    render() {
        const player = this.props.data
        return(
            <div className="container-fluid">
                <div className="row center">
                    <div className="col-3">
                        <div><p className="text-fields">First Name: </p><p>{player.firstName}</p></div>
                    </div>
                    <div className="col-3">
                        <div><p className="text-fields">Last Name: </p><p>{player.lastName}</p></div>
                    </div>
                    <div className="col-3">
                        <div><p className="text-fields">Ranking: </p><p>{player.ranking}</p></div>
                    </div>
                    <div className="col-3">
                        <div><p className="text-fields">Id: </p><p>{player.id}</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayersTemplate