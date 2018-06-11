import React, { Component } from 'react'
import '../styles/home.css'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom'

class Home extends Component {
    render () {
        return(
            <div>
                <h1 className="head">MiTableTennis</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <Card>
                                <CardImage className="img-fluid" src="http://www.chinadaily.com.cn/sports/images/attachement/jpg/site1/20160213/b083fe95d63018290dd21e.jpg" />
                                <CardBody>
                                    <CardTitle className="center title">Players</CardTitle>
                                    <CardText className="center title">Click below to access players or to add a player to your club</CardText>
                                    <div className="center">
                                        <Link to='/player-list'><Button className="title" color="indigo">Player List</Button></Link>
                                        <Link to='/add-player'><Button className="title" color="light-blue">Add Player</Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-6">
                            <Card>
                                <CardImage className="img-fluid" src="https://s3-ap-southeast-2.amazonaws.com/piano.revolutionise.com.au/cups/tta/files/66ckywaubfikbium.JPG" />
                                <CardBody>
                                    <CardTitle className="center title">Season Play</CardTitle>
                                    <CardText className="center title">View your club rankings or create a match</CardText>
                                    <div className="center">
                                        <Link to="rankings"><Button className="title" color="indigo">Rankings</Button></Link>
                                        <Link to="create-match"><Button className="title" color="light-blue">Create Match</Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

