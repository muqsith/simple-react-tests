import React from 'react';
import ReactDOM from 'react-dom';


class UncontrolledTextInput extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { text: '' };
    };

    handleChange(e) {
        this.setState({text : this.input.value});
    };

    render() {
        return(
            <div>
                <input
                    defaultValue="Muqsith"
                    type="text" ref={ (input) => {
                    this.input = input;
                }} onChange={this.handleChange}/>

                <br/>

                <span>
                    {this.state.text}
                </span>
            </div>
        );
    };

}

class App extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
            <UncontrolledTextInput />
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
