import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class homeProjects extends Component {
    constructor(props){
        super(props)
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

    deleteClick = (e) => {
        axios.delete(`/project/delete/${e}`)
            .catch(err => console.log(err))

        window.location.reload(false)
    }


    render() {
        // console.log(this.state.projects[0])
        const projectMapped = this.state.projects.map( ( e, i ) => {
            return (
                <div key = {i} >
                    <Link to = {`/home/reports/${e.project_id}`}>
                        <div>
                            <div>{e.city}</div>
                            <div>{e.country}</div>
                            <div>{e.project_admin}</div>
                            <div>{e.project_id}</div>
                            <div>{e.project_name}</div>
                            <div>{e.station}</div>
                        </div>
                    </Link>
                    <button onClick =  {()=> this.deleteClick (e.project_id)} >Delete</button>
                    <Link to = {`/home/update_project/${e.project_id}`} ><button>Update</button></Link>
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