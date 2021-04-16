import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <Link><div>Home</div></Link>
                <Link><div>Projects</div></Link>
                <Link><div>Create Report</div></Link>
            </div>
        );
    }
}

export default Nav;