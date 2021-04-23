import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/userReducer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Nav extends Component {



    handleClick  = () => {
        axios.get('/auth/logout').then( (res ) => this.props.logout() )
             
    }
    render() {
        return (
            <div className = 'nav'>
                <Link to = '/home'><button>Projects</button><FontAwesomeIcon icon = {faCoffee} color = {'black'}/></Link>
                <Link to = '/home/create_project'> <button>Create Project</button> </Link>
                <Link to = '/home/subscription' ><button>Subscribe to a project</button></Link>
                <Link to = '/home/create_report'><button>Create Report</button></Link>
                <Link to = '/home/problem'><button>Report Problem</button></Link>
                <Link to = '/'><button onClick = { () => this.handleClick() } >Log Out</button></Link>
            </div>
        );
    }
}

export default  connect(null,{logout})  (Nav);