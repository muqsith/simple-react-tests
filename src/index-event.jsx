import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        this.setState((prevState, props) => ({
            isToggleOn : !prevState.isToggleOn
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
