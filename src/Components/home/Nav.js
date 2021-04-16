import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to = '/home'><div>Projects</div></Link>
                <Link to = '/home/create_report'><div>Create Report</div></Link>
            </div>
        );
    }
}

export default Nav;