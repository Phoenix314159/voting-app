import React, {Component} from 'react';
import '../App.css';
import * as actions from '../actions';

class App extends Component {
    constructor(props) {
        super(props)
        this.store = this.props.store;
    }
    handleVoteAngular = () => {
        this.store.dispatch(actions.voteAngular())
    }
    handleVoteReact = () => {
        this.store.dispatch(actions.voteReact())
    }
    handleVoteVuejs = () => {
        this.store.dispatch(actions.voteVuejs())
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;
