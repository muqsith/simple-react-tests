import React from 'react';
import ReactDOM from 'react-dom';

function FancyBorder(props){
    return (
        <div style= {
                {
                    'border':'5px dotted',
                    'padding':'15px',
                    'border-color':props.color,
                    'float':'left'
                }
        }>
            {props.children}
        </div>
    );
};

ReactDOM.render(
    <FancyBorder color="red">
        <h1>Welcome</h1>
        <p>Welcome to the fancy bordered div!</p>
    </FancyBorder>,
    document.getElementById('root')
);
