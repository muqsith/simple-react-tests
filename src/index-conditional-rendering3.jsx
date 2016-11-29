import React from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return(
        <div className="warning">
            Warning!
        </div>
    );
};

ReactDOM.render(
    <WarningBanner warn={true} />,
    document.getElementById('root')
);
