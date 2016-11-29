import React from 'react';
import ReactDOM from 'react-dom';


function Numbers(props) {
    const n = props.numbers;
    const numbers = n.map( (item) => <li key={item.toString()}>{item}</li> );
    return (
        <ul>{numbers}</ul>
    );
}


ReactDOM.render(
    <Numbers numbers={[1,2,3,4,5]} />,
    document.getElementById('root')
);
