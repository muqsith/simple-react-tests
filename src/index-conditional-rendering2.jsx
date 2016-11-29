import React from 'react';
import ReactDOM from 'react-dom';

function MailBox(props){
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>Hello !</h1>
            {
                unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
};


ReactDOM.render(
    <MailBox unreadMessages={['Hello', 'How','are', 'you']}/>,
    document.getElementById('root')
);
