import React, { Component } from 'react';
import axios from 'axios'

class CreateReport extends Component {
    constructor (props){
        super()
        this.state ={
            reportType : 1,
            reportId: null,
            reportName:'',
            projectId:'',
            reportObservation:''

        }
    }

    handleChangeName = (e) => {
        this.setState({reportName: e })
    } 

    handleChangeProjectId = (e) => {
        this.setState({projectId: e})
    }
    handleChangeObservation = ( e ) => {
        this.setState({ reportObservation: e })
    }

    createReport = () => {
        let today = new Date()
        axios.post('/report/create', { 
            reportType: this.state.reportType,
            reportName: this.state.reportName,
            reportDate: today,
            projectId: this.state.projectId,
            reportObservation: this.state.reportObservation 
        })
            .then ( res => {
                console.log(res.data)
            } )
    }
    
    render() {
        console.log(this.state.reportName)
        console.log(this.state.projectId)
        console.log(this.state.reportObservation)
        return (
            <div>
                <form>
                    <input placeholder = 'Report Name' 
                    onChange = { e => this.handleChangeName(e.target.value) }
                    ></input>
                    <input placeholder = 'Project Id' 
                    onChange = { e => this.handleChangeProjectId(e.target.value) }
                    ></input>
                    <input placeholder = 'Report Observation' 
                    onChange = { e => this.handleChangeObservation(e.target.value) }
                    ></input>
                    <button onClick = { () => this.createReport() } >Create Report</button>
                    
                </form>
                <form>
                    <input placeholder = 'Country' ></input>
                    <input placeholder = 'City' ></input>
                    <input placeholder = 'Station' ></input>
                    
                </form>
                <form>
                    <input placeholder = 'Heigth (ft)' ></input>
                    <input placeholder = 'Diameter (ft)' ></input>
                    <input placeholder = 'Maximun Stress Allowed' ></input>
                    <input placeholder = 'Join Efficiency' ></input>
                    <input placeholder = 'Minimun Thickness Measured' ></input>
                    <input placeholder = 'Specific Gravity' ></input>
                </form>
            </div>
        );
    }
}

export default CreateReport;