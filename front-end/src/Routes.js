import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './prisma/Apollo-Client'
import Home from './components/Home'
import PlayerList from './components/PlayerList'
import AddPlayer from './components/AddPlayer'
import Rankings from './components/Rankings'
import CreateMatch from './components/CreateMatch'
import DeletePlayer from './components/DeletePlayer'

export default () => (
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/player-list" component={PlayerList} />
                <Route path="/add-player" component={AddPlayer} />
                <Route path="/rankings" component={Rankings} />
                <Route path="/create-match" component={CreateMatch} />
                <Route path="/delete-player" component={DeletePlayer} />
            </Switch>
        </Router>
    </ApolloProvider>
);

