import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class Nav extends Component {



    handleClick  = () => {
        axios.get('/auth/logout')
             
    }
    render() {
        return (
            <div>
                <Link to = '/home'><div>Projects</div></Link>
                <Link to = '/home/create_report'><div>Create Report</div></Link>
                <Link to = '/'><div onClick = { () => this.handleClick() } >Log Out</div></Link>
                <Link to = '/home/create_project'> <div>New Project</div> </Link>
            </div>
        );
    }
}

export default Nav;