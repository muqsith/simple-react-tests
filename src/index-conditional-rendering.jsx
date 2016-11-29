import React from 'react';
import ReactDOM from 'react-dom';


function UserGreeting(props){
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>;
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let greeting = undefined;
        if (isLoggedIn) {
            greeting = <UserGreeting />;
        }else{
            greeting = <GuestGreeting />;
        }
        return greeting;
    }
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: props.isLoggedIn};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    };

    handleLogin() {
        this.setState({
            isLoggedIn: true
        });
    };

    handleLogout() {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = undefined;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogout} />
        }else{
            button = <LoginButton onClick={this.handleLogin} />
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }

}

ReactDOM.render(
    <LoginControl isLoggedIn={false} />,
    document.getElementById('root')
);
