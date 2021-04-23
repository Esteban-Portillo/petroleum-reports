import axios from 'axios';
import React, { Component } from 'react';
import Gear from '../animation/Gear'
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
                // console.log(res.data)
            })
    }
    render() {

        if (this.state.loading){
            return <div className = 'reports' ><Gear/></div>
        }

        const mappedReport = this.state.reports.map( ( e, i ) => {
            return (
                <div className = 'card'>
                    <Link to = {`/home/individual/${e.report_id}`} >
                    <div className = 'press'>
                            R
                        </div>
                    </Link>
                    <div key = {i} className = 'info' >
                        <div>Report Date: {e.report_date}</div>
                        <div>Report Name{e.report_name}</div>
                        <div>Report Observations: {e.report_observation}</div>
                    </div>
                </div>
                
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