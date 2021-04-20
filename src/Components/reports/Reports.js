import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Reports extends Component {
    constructor(props){
        super(props)
        this.state = {
            reports: [],
            loading: true
        }
    }

    componentDidMount = () => {
        axios.get(`/report/all/${this.props.match.params.project_id}`)
            .then( res => {
                this.setState({reports: res.data})
                this.setState({loading: false})
                console.log(res.data)
            })
    }
    render() {

        if (this.state.loading){
            return <div className = 'reports' >Waiting for your info</div>
        }

        const mappedReport = this.state.reports.map( ( e, i ) => {
            return (
                <Link to = {`/home/individual/${e.report_id}`} >
                    <div key = {i}>
                        <div>{e.report_date}</div>
                        <div>{e.report_name}</div>
                        <div>{e.report_observation}</div>
                    </div>
                </Link>
                
            )
        } )

        return (
            <div className = 'reports' >
                {mappedReport}
            </div>
        );
    }
}

export default Reports;


// /home/reports/:project_id   
//  /report/all/:projectId