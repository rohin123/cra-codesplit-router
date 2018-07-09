import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import { setMessage } from './store/appReducer';
import RoutesWithSubRoutes from './helpers/routeswithsubroutes'
import { Link } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';


const AsyncComponent = Loadable({
    loader: () => import(/* webpackChunkName: "myNamedChunk" */ './SomeComponent'),
    loading: () => <div>loading...</div>,
    modules: ['myNamedChunk'],
});

class App extends Component {
    componentDidMount() {
      console.log('componentDidMount')
        if(!this.props.message) {
            this.props.updateMessage("Hi, I'm from client!");
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="/logo.svg" className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <AsyncComponent />
                    <p>
                        Redux: { this.props.message }
                    </p>
                </div>
                <div>
                  <Link to='/home'>Home</Link>
                  <Link to='/profile'>Profile</Link>
                  <Link to='/career'>Career</Link>
                </div>
                {(this.props.routes||[]).map((route)=><RoutesWithSubRoutes {...route}/>)}
            </div>
        );
    }
}

export default connect(
    ({ app }) => ({
        message: app.message,
    }),
    dispatch => ({
        updateMessage: (messageText) => dispatch(setMessage(messageText)),
    })
)(App);
