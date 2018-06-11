import React, { Component } from 'react'
import '../styles/home.css'
import gql from 'graphql-tag'
import { client } from '../prisma/Apollo-Client';
import RankingTemplate from '../components/RankingTemplate'
import { Link } from 'react-router-dom'
import { Button, Input } from 'mdbreact'

class Rankings extends Component {
    state = {
        rankingsArray: [],
        currentRank: '',
        playerID: ''
    }

    // RANKINGS QUERY
    rankingsQuery = async () => {
    let ranker = await client.query({
        query: gql`
            query{
                users(orderBy: ranking_DESC){
                    id
                    firstName
                    lastName
                    ranking
                    wins
                    losses
                }
            }
        `}).then((res) => { return res.data.users })
    await console.log(ranker)
    await this.setState({ rankingsArray: ranker })
}

    componentDidMount() {
        this.rankingsQuery();
    }

    render() {

        //UPDATE RANKING BY FIRST AND LAST NAME
        const updateRanking = async () => {
            let newRank = await client.mutate({
                mutation: gql`
                    mutation{
                        updateUser(
                            data: { ranking: "${this.state.currentRank}" }
                            where: { id: "${this.state.playerID}" }
                        ){
                            ranking
                            id
                        }
                    }
                `}).then((res) => { return res.data.createUser })
            await console.log(newRank)
            await this.setState({ currentRank: '', playerID: '' })
            window.location.reload()
        }

        return(
            <div>
                <h1 className="head">RANKINGS</h1>
                <br/>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 center font-weight-bold title">First Name</div>
                        <div className="col-3 center font-weight-bold title">Last Name</div>
                        <div className="col-3 center font-weight-bold title">Ranking</div>
                        <div className="col-3 center font-weight-bold title">ID</div>
                    </div>
                </div>
                {this.state.rankingsArray.map((x) => { return <RankingTemplate key={x.id} data={x} /> })}
                <br/>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 center"></div>
                        <div className="col-4">
                            <h2 className="mb-5 center title">Update Player Ranking</h2>
                            <form>
                                <p className="h5 text-center mb-4">**Provide Player ID and New Ranking**</p>
                                <Input icon="user" label="Player ID" value={this.state.playerID} onChange={ (e) => {this.setState({ playerID: e.target.value })} }/>
                                <Input icon="bar-chart" label="New Ranking" value={this.state.currentRank} onChange={ (e) => {this.setState({ currentRank: e.target.value })} }/>
                                <div className="text-center center">
                                    <Button className="title" color="light-blue" onClick={ updateRanking }>UPDATE</Button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 center"></div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 center"></div>
                        <div className="col-4 center">
                            <Link to="/"><Button className="title" color="blue">HOME</Button></Link>
                        </div>
                        <div className="col-4 center"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rankings

