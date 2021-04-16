import React, { Component } from 'react';
import axios from 'axios'


class homeProjects extends Component {
    constructor(props){
        super()
        this.state = {
            projects: []
        }
    }
    componentDidMount(){
        axios.get('/project/get/individual/projects')
        .then( res => {
            // console.log(res.data)
            this.setState({projects: res.data})
        } )
    }

    render() {
        console.log(this.state.projects[0])
        const projectMapped = this.state.projects.map(e => {
            return (
                <div>
                    <div>{e.city}</div>
                    <div>{e.country}</div>
                    <div>{e.project_admin}</div>
                    <div>{e.project_id}</div>
                    <div>{e.project_name}</div>
                    <div>{e.station}</div>
                </div>
            )
        })

        return (
            <div>
                this are the ptohects 
                {projectMapped}
            </div>
        );
    }
}

export default homeProjects;