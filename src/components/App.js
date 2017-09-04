import React, { Component } from 'react';
import '../styles/App.css';
import { voteAngular, voteReact, voteVuejs } from '../actions';

class App extends Component {
    constructor(props) {
        super(props)
        this.store = this.props.store;
    }

    handleVoteAngular = () => {
        this.store.dispatch(voteAngular())
    }
    handleVoteReact = () => {
        this.store.dispatch(voteReact())
    }
    handleVoteVuejs = () => {
        this.store.dispatch(voteVuejs())
    }

    render() {
        return (
            <div>
                <div className="jumbotron" style={{'textAlign': 'center'}}>
                    <img src="logos/download.jpg" alt=""/>
                    <h2>What is your favorite front-end framework in 2017?</h2>
                    <h4>Click on the logos below to vote!</h4>
                    <br/>
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-2">
                            <img className="votePicture" src="logos/download.png" onClick={this.handleVoteAngular}/>
                        </div>
                        <div className="col-xs-2">
                            <img className="votePicture" src="logos/react.svg" onClick={this.handleVoteReact}/>
                        </div>
                        <div className="col-xs-2">
                            <img className="votePicture" src="logos/logo.png" onClick={this.handleVoteVuejs}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
