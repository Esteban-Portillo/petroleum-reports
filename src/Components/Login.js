import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/userReducer'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    handleChangeEmail = (e) => {
        this.setState({email: e})
    }
    handleChangePassword = (e) => {
        this.setState({password: e})
    }

    loginClick = () => {
        axios.post('/auth/login', {email: this.state.email, password: this.state.password})
        .then( res => {
            this.props.history.push('/home')
            // console.log(res.data)
            this.props.login(this.state.email, res.data.user_id, res.data.admin, res.data.name, res.data.last_name,res.data.title )
            console.log(this.props)


        } )
        .catch(err => {
            console.log(err)
            this.setState({errorMsg: 'Incorrect username or password!'})
          })
    }


    render() {
        // console.log(this.state.email)
        // console.log(this.state.password)
        // console.log(this.props)

        return (
            <div>
                <form>
                    <input placeholder = 'E-mail' onChange = {e => this.handleChangeEmail(e.target.value)} />
                    <input placeholder = 'Password' type = 'password' 
                    onChange = { e => this.handleChangePassword(e.target.value)}
                    />
                </form>
                <div>
                    <button onClick = { () => this.loginClick() } >Log In</button>
                    <Link to = '/register'><button>Register</button></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps,{login})  (Login);