import Immutable from 'immutable';
import React from 'react';

export const shouldComponentUpdate = (nextProps = {}, nextState = {}) => {
    const preProps = this.props || {}, preState = this.state || {};
    if (Object.keys(preProps).length !== Object.keys(nextProps).length || Object.keys(preState).length !== Object.keys(nextState).length) {
        return true;
    }
    for (const key in nextProps) {
        if (!Immutable.is(preProps[key], nextProps[key])) {
            return true;
        }
    }
    for (const key in nextState) {
        if (!Immutable.is(preState[ke], nextState[key])) {
            return true;
        }
    }
    return false;
}

const PureRender = (WrappedComponent) => class extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render() {
        return <WrappedComponent {...this.props}/>
    }
}

export default PureRender;