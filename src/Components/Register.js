import React, { Component } from 'react';
import axios from 'axios'


class Register extends Component {
    constructor(props){
        super(props)
        this.state = { 
            admin:false,
            name: '',
            lastName: '',
            title: '',
            company: '',
            email: '',
            password: ''

        }
    }

    handlechangeName = (e) => {
        this.setState({name: e})
    }

    handlechangeLastName = (e) => {
        this.setState({lastName: e})
    }

    handlechangeTitle = (e) => {
        this.setState({title: e})
    }

    handlechangeCompany = (e) => {
        this.setState({company: e})
    }

    handlechangeEmail = (e) => {
        this.setState({email: e})
    }

    handlechangePassword = (e) => {
        this.setState({password: e})
    }

    onClickRegister = () => {
        axios.post('/auth/register',{
            admin: this.state.admin,
            name: this.state.name,
            lastName: this.state.lastName,
            title: this.state.title,
            company: this.state.company,
            email: this.state.email,
            password: this.state.password
        })
            .then( res  => {
                this.props.history.push('/home')
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <form>
                    <button> Admin? </button>
                    <input placeholder = 'Name' onChange = {e => this.handlechangeName(e.target.value)}/>   
                    <input placeholder = 'Last Name' 
                    onChange = {e => this.handlechangeLastName(e.target.value)}
                    />   
                    <input placeholder = 'Title' 
                    onChange = {e => this.handlechangeTitle(e.target.value)}
                    />   
                    <input placeholder = 'Company' 
                    onChange = {e => this.handlechangeCompany(e.target.value)}
                    />   
                    <input placeholder = 'Email' 
                    onChange = {e => this.handlechangeEmail(e.target.value)}
                    />   
                    <input placeholder = 'Password' type = 'password' 
                    onChange = {e => this.handlechangePassword(e.target.value)}
                    />   
                    
                </form> 

                <button onClick = {() => this.onClickRegister()} >Register</button>
            </div>
        );
    }
}

export default Register;