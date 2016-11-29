import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: props.zone.date, name:props.zone.name};
    };

    tick() {
        this.setState({
            date: moment().utcOffset(this.state.date.utcOffset())
        });
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    };

    render() {
        return(
            <div>
                <h2>{this.state.name}: &nbsp;
                    {this.state.date.format('HH:mm:ss')} </h2>
            </div>
        );
    };
};

function App(props){
    return (
        <div>
            <Clock zone={ { date: moment().utcOffset('+05:30'),
                name:'India  '} }/>
            <Clock zone={ { date: moment().utcOffset('+01:00'),
                name:'Germany '} }/>
            <Clock zone={ { date: moment().utcOffset('+04:00'),
                 name:'Dubai  '} }/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
