import React, { Component } from 'react'
import '../styles/home.css'
import { client } from "../prisma/Apollo-Client";
import PlayersTemplate from '../components/PlayersTemplate'
import gql from 'graphql-tag'
import { Button, Input } from 'mdbreact'
import { Link } from 'react-router-dom'

class PlayerList extends Component {

    state = {
        playerArray: [],
        playerID: ''
    }

    render() {

        // GET ALL USERS QUERY
        const playerList = async () => {
            let players = await client.query({
                query: gql`
                    query{
                        users{
                            firstName
                            lastName
                            ranking
                            id
                        }
                    }
                `}).then((res) => { return res.data.users })

            await console.log(players)
            await this.setState({ playerArray: players })
        };

        // DELETE PLAYER MUTATION/FUNC
        const deletingUser = async () => {
            const deletePlayer = await client.mutate({
                mutation: gql`
                    mutation{
                        deleteUser(where: { id: "${this.state.playerID}" }){
                            id
                            firstName
                            lastName
                            ranking
                            wins
                            losses
                        }
                    }
                `}).then((res) => {return res.data.createUser});

            await console.log(deletePlayer);
            await this.setState({ playerID: '' });
            window.location.reload()
        };

        return(
            <div>
                <h1 className="head">PLAYER LIST</h1>
                <br/>
                <div className="center">
                    <Button className="title" color="light-blue" onClick={ playerList }>Players</Button>
                </div>
                { this.state.playerArray[0] ? this.state.playerArray.map((x) => { return <PlayersTemplate key={x.id} data={x} /> }) : <div className="center title">Click to Load Player List</div> }
                <br/>
                <br/>
                <br/>
                <br/>

                {/*DELETE PLAYER MUTATION/FORM*/}
                <div className=" container-fluid center">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 center">
                            <form className="title">
                                <p className="h5 text-center mb-4">**Copy ID From Above to Delete a Player**</p>
                                <Input label="ID of Player to be Deleted" type="text" value={ this.state.playerID } onChange={ (e) => { this.setState({ playerID: e.target.value }) }} />
                                <div className="text-center">
                                    <Button color="red" onClick={ deletingUser }>Delete</Button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <br/>
                    <br/>
                    <div className="center">
                        <Link to="/"><Button className="title" color="blue">HOME</Button></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default PlayerList