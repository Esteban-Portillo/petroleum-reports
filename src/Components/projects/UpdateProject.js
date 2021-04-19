import React, { Component } from 'react';
import axios from 'axios'

class UpdateProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            projectInfo:[],
            loading: true,
            projectName: '',
            country: '',
            city: '',
            station:'',
            situation:''

        }
    }

    componentDidMount = () => {
        axios.get(`/project/get/byid/${this.props.match.params.project_id}`)
            .then ( res => {
                this.setState({projectInfo: res.data})
                this.setState({ loading: false })
            } )
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

    updateClick = () => {
        axios.put(`/project/update/${this.props.match.params.project_id}`,{
            projectAdmin: '', 
            projectName: this.state.projectName , 
            country: this.state.country, 
            city:this.state.city,
            station: this.state.station
        })
            .then( res => {
                this.setState({situation: 'This project was updated'})
            })
    }

    render() {
        // console.log(this.state.projectInfo[0])

        const { loading } = this.state

        if (loading){
            return <div className = 'update' >Waiting for your info </div>
        }
        return (
            <div className = 'update' >
                this is the update place 

                <div>
                    <input 
                    
                    onChange = {e => this.handleChangeProjectName(e.target.value)}
                    placeholder = {this.state.projectInfo[0].project_name}
                    />
                    <input 
                    onChange = {e => this.handleChangeCountry(e.target.value)}
                    placeholder = {this.state.projectInfo[0].country}
                    />
                    <input 
                    onChange = {e => this.handleChangeCity(e.target.value)}
                    placeholder = {this.state.projectInfo[0].city}
                    />
                    <input 
                    onChange = {e => this.handleChangeStation(e.target.value)}
                    placeholder = {this.state.projectInfo[0].station}
                    />
                </div>

                <div>
                    <button onClick= { () => this.updateClick() } >Update Project</button>
                </div>
                <div>
                    {this.state.situation}
                </div>
            </div>
        );
    }
}

export default UpdateProject;