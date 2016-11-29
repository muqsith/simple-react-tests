import React from 'react';
import ReactDOM from 'react-dom';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nameValue: '',
            essayValue: 'About you ...',
            juice: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        let state = undefined;
        if (e.target.name === 'name'){
            state = {nameValue: e.target.value}
        }else if (e.target.name === 'essay'){
            state = {essayValue: e.target.value}
        }else if (e.target.name === 'juice'){
            state = {juice: e.target.value}
        }
        this.setState(state);
    };

    handleSubmit(e) {
        console.log(this.state.nameValue, this.state.essayValue,
            this.state.juice);
        e.preventDefault();
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" name="name"
                        value={this.state.nameValue}
                     onChange={this.handleChange} />
                </label>
                <br/><br/>
                <label style={ {verticalAlign : "top"} }>
                    Essay: &nbsp;
                </label>
                <textarea style={ {verticalAlign : "bottom"} }
                    value={this.state.essayValue}
                        name="essay"
                        onChange={this.handleChange} />
                <br/><br/>
                <label>
                    Favourite Juice: &nbsp;
                </label>
                <select value={this.state.juice}
                    name="juice"
                    onChange={this.handleChange}>
                    <option value="grapefruit">Grape Fruit</option>
                    <option value="orange">Orange</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <br/><br/>
                <input type="submit" value="Submit" />

                <br/><br/>
                <label>
                    Name: {this.state.nameValue}
                </label>
                <br/>
                <label>
                    Essay: {this.state.essayValue}
                </label>
                <br/>
                <label>
                    Favourite Juice: {this.state.juice}
                </label>
            </form>
        );
    };

}


ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);
