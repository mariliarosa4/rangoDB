import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from "react-dom";

class Login extends Component {

    constructor () {
        super()

        this.state = {
            email: "",
            password: ""
        }

        this.handleLogin = this.handleLogin.bind(this);
    }


    handleLogin(event)
    {
        event.preventDefault()

        console.log(event.target)
        const data = new FormData(event.target);

        data.append("email", event.target.email.value);
        data.append("password", event.target.password.value);

        console.log(data);

        axios.post('/api/login',  data, {headers: {'Accept': 'application/json'}})
            .then(response => {
                console.log(response)
                alert("logado");
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    validateForm()
    {
        return email.length > 0 && password.length > 0;
    }

    render () {
        return (
            <div className='container py-4'>
            <form onSubmit={this.handleLogin}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />


                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />

                <button disabled={!this.validateForm} type="submit">
                    Login
                </button>
            </form>
            </div>
    )
    }
}

export default Login

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}