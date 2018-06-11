import React, { Component } from 'react'
import { client } from '../prisma/Apollo-Client';
import gql from 'graphql-tag'
import { Button, Input } from 'mdbreact'
import '../styles/home.css'
import { Link } from 'react-router-dom'

class AddPlayer extends Component {

    state = {
        firstName: '',
        lastName: '',
        initialRanking: '',
    }

    render() {

        // ADD USER MUTATION/FUNC
        const addingUser = async () => {
            const player = await client.mutate({
                mutation: gql`
                    mutation{
                        createUser(data: { firstName: "${this.state.firstName}", lastName: "${this.state.lastName}", ranking: "${this.state.initialRanking}"}){
                            id
                            firstName
                            lastName
                            ranking
                        }
                    }
                `}).then((res) => { return res.data.createUser })
            await console.log(player)
            await this.setState({ firstName: '', lastName: '', initialRanking: '' })
            window.location.reload()
        };

        return(
            <div>
                <h1 className="head">ADD PLAYER</h1>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <form>
                                <p className="mb-4 text-center text-dark title"><h2>Sign up</h2></p>
                                <Input label="Player First Name" icon="user" value={ this.state.firstName } onChange={ (e) => {this.setState({ firstName: e.target.value })} } />
                                <br/>
                                <Input label="Player Last Name" icon="user" value={ this.state.lastName } onChange={ (e) => {this.setState({ lastName: e.target.value })} }/>
                                <br/>
                                <Input label="Initial Ranking" icon="bar-chart" value={ this.state.initialRanking } onChange={ (e) => {this.setState({ initialRanking: e.target.value })} }/>
                                <br/>
                                <div className="text-center">
                                    <Button className="title" color="blue" onClick={ addingUser }>Sign up</Button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <br/>
                    <div className="row center">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Link to="/"><Button className="title" color="blue">HOME</Button></Link>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPlayer