import React from 'react';
import ReactDOM from 'react-dom';


class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    };

    focus() {
        this.textInput.focus();
    };

    render() {
        return (
            <div>
                <input type="text"
                    ref={ (input) => {
                        this.textInput = input;
                    } } />
                <input type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                    />
            </div>
        );
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.textInput.focus();
    }

    render() {
        return(
            <CustomTextInput
                ref={(input) => { this.textInput = input; }} />
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
