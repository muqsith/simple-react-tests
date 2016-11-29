import React from 'react';
import ReactDOM from 'react-dom';


function BoilingVerdict(props){
    let verdict = <p>The water would not boil.</p>;
    if (props.celsius >= 100){
        verdict = <p>The water would boil.</p>;
    }
    return verdict;
};

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
};

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
};

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.props.onChange(e.target.value);
    };

    render() {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={value}
               onChange={this.handleChange} />
      </fieldset>
    );
  }

}

class Calculator extends React.Component {
    constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {value: '', scale: 'c'};
  }

  handleCelsiusChange(value) {
    this.setState({scale: 'c', value});
  }

  handleFahrenheitChange(value) {
    this.setState({scale: 'f', value});
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return (
      <div>
        <TemperatureInput
          scale="c"
          value={celsius}
          onChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          value={fahrenheit}
          onChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

function App(props) {
    return(
        <Calculator />
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
