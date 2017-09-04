import React, {Component} from 'react';

export default class Results extends Component {
    constructor(props) {
        super(props)
        this.store = this.props.store;
    }
    a = this.store.getState().angular;
    r = this.store.getState().react;
    v = this.store.getState().angular;
    votesAngularInPercent = () => {
        if (this.a) {
            return (this.a / this.a + this.r + this.v) * 100
        }
        return 0;
    }
    votesReactInPercent = () => {
        if (this.a) {
            return (this.r / this.a + this.r + this.v) * 100
        }
        return 0;
    }
    votesVuejsInPercent = () => {
        if (this.v) {
            return (this.v / this.a + this.r + this.v) * 100
        }
        return 0;
    }

    render() {
        return (
            <div>
                <span className="label label-danger">
                    Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-danger"></div>
                </div>
                <span className="label label-danger">
                    Angular: {this.votesReactInPercent().toFixed(2) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-danger"></div>
                </div>
                <span className="label label-danger">
                    Angular: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-danger"></div>
                </div>
            </div>
        )
    }
}
