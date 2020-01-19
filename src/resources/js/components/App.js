// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import RestaurantList from './RestaurantList'
import Example from "./Example";

class App extends Component {
    render () {
        return (
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={RestaurantList} />
                    </Switch>
                </div>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
