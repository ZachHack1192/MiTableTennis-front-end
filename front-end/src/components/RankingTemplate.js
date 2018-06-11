import React, { Component } from 'react'
import '../styles/home.css'


class RankingTemplate extends Component {
    render() {
        const user = this.props.data
        return(
            <div className="container-fluid">
               <div className="row">
                   <div className="col-3 center"><p>{user.firstName}</p></div>
                   <div className="col-3 center"><p>{user.lastName}</p></div>
                   <div className="col-3 center"><p>{user.ranking}</p></div>
                   <div className="col-3 center"><p>{user.id}</p></div>
               </div>
            </div>
        )
    }
}

export default RankingTemplate