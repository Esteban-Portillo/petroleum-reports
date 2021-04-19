import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

class NewProject extends Component {

    constructor(props){
        super(props)
        this.state = {
            projectName : '',
            country : '',
            city: '',
            station: '',
            projectStatus: ''
        }
    }

    handleChangeProjectName = (e) => {
        this.setState({projectName: e})
    }

    handleChangeCountry = (e) => {
        this.setState({country: e})
    }

    handleChangeCity = (e) => {
        this.setState({ city: e })
    }

    handleChangeStation = (e) => {
        this.setState({ station: e })
    }

    createProjectClick = () => {
        axios.post('/project/create', {
            projectAdmin : this.props.userReducer.name , 
            projectName: this.state.projectName, 
            country: this.state.country  , 
            city: this.state.city , 
            station: this.state.station 
        })
        .then ( res => {
            // console.log(res.data[0].projectId)
            console.log(res.data[0])
            axios.post('/sub/create', {projectId: res.data[0].project_id , userId : this.props.userReducer.user_id})
            .then(response => {
                this.setState({projectStatus: 'This project is created'})
                
            })
        })
        .catch(err => console.log (err))
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <input placeholder = 'Project Name' 
                    onChange = {e => this.handleChangeProjectName(e.target.value)}
                    />
                    <input placeholder = 'Country' 
                    onChange = {e => this.handleChangeCountry(e.target.value)}
                    />
                    <input placeholder = 'City' 
                    onChange = {e => this.handleChangeCity(e.target.value)}
                    />
                    <input placeholder = 'Station' 
                    onChange = {e => this.handleChangeStation(e.target.value)}
                    />
                </div>

                <div>
                    <button onClick= { () => this.createProjectClick() } >Cretate New Project</button>
                </div>
                <div>
                    {this.state.projectStatus}
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default   connect(mapStateToProps)(NewProject);