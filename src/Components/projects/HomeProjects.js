import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Gear from '../animation/Gear'
import { connect } from 'react-redux'

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
        console.log(this.props)
        // console.log(this.state.projects[0])
        const projectMapped = this.state.projects.map( ( e, i ) => {
            return (
                <div key = {i} className = 'card'>
                    <Link to = {`/home/reports/${e.project_id}`}>
                        <div className = 'press'>
                            P
                        </div>
                        
                    </Link>
                   
                        
                    <div className = 'info'>
                        <div>City: {e.city}</div>
                        <div>Country: {e.country}</div>
                        <div>Project Admin: {e.project_admin}</div>
                        <div>Project Id: {e.project_id}</div>
                        <div>Project Name: {e.project_name}</div>
                        <div>Station: {e.station}</div>
                    </div>
                        
                    {this.props.userReducer.name === e.project_admin ? <div className = 'buttons'> 
                        <button onClick =  {()=> this.deleteClick (e.project_id)} >Delete</button> 
                        <Link to = {`/home/update_project/${e.project_id}`} ><button>Update</button></Link>
                    </div> :<div></div>}

                    
                </div>
                
            )
        })
        console.log(this.state.projects[0])

        if(!this.state.projects[0]) {
            return (<Gear/>)
        }

        return (
            <div className= 'homeProject' >
                Projects
                <div className = 'projects'>{projectMapped}</div>
                
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}


export default connect(mapStateToProps)(homeProjects);