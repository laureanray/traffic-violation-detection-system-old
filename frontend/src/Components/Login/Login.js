import React, {Component} from 'react';
import "./Login.css"
class Login extends Component {
    render() {
        return (
            <form action="" className="Login">
                <label htmlFor="username"> Username </label>
                <input type="text" placeholder="Username" name="username"/>
                <label htmlFor="password"> Password </label>
                <input type="password" placeholder="Password" name="password"/>
            </form>
        );
    }
}

export default Login;

