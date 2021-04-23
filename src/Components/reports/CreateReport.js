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
            reportObservation:'',
            height: 0,
            diameter: 0,
            max_stress_allowed: 0,
            join_efficiency : 0,
            minimun_thickness_measured: 0,
            especific_gravity: 0,
            thank_name: 0,
            country: '',
            city: '',
            station: ''

        }
    }

    handleChangeName = (e) => {
        this.setState({reportName: e })
    } 

    handleChangeProjectId = (e) => {
        this.setState({projectId: +e})
    }

    handleChangeObservation = ( e ) => {
        this.setState({ reportObservation: e })
    }

    handleChangeHeigth = ( e ) => {
        this.setState({ height: +e  })
    }
    
    handleChangeDiameter = ( e ) => {
        this.setState({ diameter : +e  })
    }

    handleChangeMaxStress = ( e ) => {
        this.setState({ max_stress_allowed: +e  })
    }

    handleChangeJoin = ( e ) => {
        this.setState({ join_efficiency: +e  })
    }

    handleChangeMinimunThickness = ( e ) => {
        this.setState({ minimun_thickness_measured: +e  })
    }

    handleChangeGravity = ( e ) => {
        this.setState({ especific_gravity: +e  })
    }

    handleChangeTankName = ( e ) => {
        this.setState({ thank_name: e  })
    }

    handleChangeCountry = ( e ) => {
        this.setState({ country: e  })
    }

    handleChangeCity = ( e ) => {
        this.setState({ city: e  })
    }

    handleChangeStation = ( e ) => {
        this.setState({ station: e  })
    }

    createReport = () => {
        let today = new Date()
        axios.post('/report/create', { 
            reportType: this.state.reportType,
            reportName: this.state.reportName,
            reportDate: today,
            projectId: this.state.projectId,
            reportObservation: this.state.reportObservation 
        }).then ( res => {
                this.setState({ reportId : res.data[0].report_id }, () => {
                    axios.post('/thank/create',{
                        height: this.state.height,
                        diameter:this.state.diameter,
                        max_stress_allowed: this.state.max_stress_allowed,
                        join_efficiency: this.state.join_efficiency,
                        minimun_thickness_measured: this.state.minimun_thickness_measured,
                        especific_gravity: this.state.especific_gravity,
                        thank_name: this.state.thank_name,
                        report_id: this.state.reportId,
                        country: this.state.country,
                        city: this.state.city ,
                        station: this.state.station
                    })
                } )
                console.log(res.data[0].report_id)
                //here we will create our thank this will be necessaty to later update the thank or the report 
                // i am nesting it becousr i first need the report id to then create the thank connected with the report 
                
                
            } )
    }
    
    render() {
        // console.log(this.state.reportName)
        // console.log(this.state.projectId)
        // console.log(this.state.reportObservation)
        // console.log(this.state)
        let { height, diameter, especific_gravity, max_stress_allowed, join_efficiency, minimun_thickness_measured } = this.state

        let minimunThicknesRequire = ((2.6 * ( height ) * diameter * especific_gravity)/(max_stress_allowed * join_efficiency))*25.4;
        let maxThankHeight = ( ( minimun_thickness_measured * max_stress_allowed * join_efficiency ) / ( 25.4 * 2.6 * diameter * especific_gravity ) )
        // console.log(minimunThicknesRequire)
        // console.log(this.state)

        

        return (
            <div className = 'createReport' >
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
                    <input placeholder = 'Heigth (ft)' 
                     onChange = { e => this.handleChangeHeigth(e.target.value) }
                    ></input>
                    <input placeholder = 'Diameter (ft)' 
                     onChange = { e => this.handleChangeDiameter(e.target.value) }
                    ></input>
                    <input placeholder = 'Maximun Stress Allowed' 
                     onChange = { e => this.handleChangeMaxStress(e.target.value) }
                    ></input>
                    <input placeholder = 'Join Efficiency' 
                     onChange = { e => this.handleChangeJoin(e.target.value) }
                    ></input>
                    <input placeholder = 'Minimun Thickness Measured' 
                     onChange = { e => this.handleChangeMinimunThickness(e.target.value) }
                    ></input>
                    <input placeholder = 'Specific Gravity' 
                     onChange = { e => this.handleChangeGravity(e.target.value) }
                    ></input>
                    <input placeholder = 'Thank Name' 
                     onChange = { e => this.handleChangeTankName(e.target.value) }
                    ></input>
                    <input placeholder = 'Country' 
                     onChange = { e => this.handleChangeCountry(e.target.value) }
                    ></input>
                    <input placeholder = 'City' 
                     onChange = { e => this.handleChangeCity(e.target.value) }
                    ></input>
                    <input placeholder = 'Station' 
                     onChange = { e => this.handleChangeStation(e.target.value) }
                    ></input>
                    
                </form>
                
                <button onClick = { () => this.createReport() } >Create Report</button>
                <div className = 'results'>
                    <div>
                        <p>Minimun Thicness Require</p>
                        <p>{minimunThicknesRequire}</p>
                    </div>
                    <div>
                        <p>Max Heigth of liquid in the thank</p>
                        <p>{maxThankHeight}</p>
                    </div>
                    <div>
                        <p>Maximun Filling Percentage</p>
                        <p>{(maxThankHeight * 100)/(height)} % </p>
                    </div>
                </div>

               
            </div>
        );
    }
}

export default CreateReport;
