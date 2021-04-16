import React, { Component } from 'react';
import Nav from './Nav'
import projectsRoutes from '../../projectsRoutes'

class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {projectsRoutes}
            </div>
        );
    }
}

export default Home;