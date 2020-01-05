import React from 'react';
export default function (Component, name) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {val: ''};
        }
        componentDidMount() {
            this.setState({
                val: localStorage.getItem(name)
            });
        }
        render() {
            return <Component {...this.props} val={this.state.val}/>
        }
    }
}