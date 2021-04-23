import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ReportPdf from './ReportPdf'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { connect } from 'react-redux';
import NewComment from '../comments/NewComment'



class IndividualReport extends Component {

    constructor(props){
        super(props)
        this.state = {
            report_id :null,
            comments:[]
        }
    }

    // componentDidUpdate (){
    //     console.log(this.props)
        
    // }
    
    componentDidMount(){
        // console.log(this.props)
        if(this.props.match){
            this.setState({report_id: +this.props.match.params.report_id}, () => {
                axios.get(`/comment/get/${this.state.report_id}`)
                .then( res => this.setState({comments: res.data}))
                
            })
        };
        
    }

    updateFx = () => {
        window.location.reload(false)
    }

    deleteClick = (e) => {
        axios.delete(`/comment/delete/${e}`)
        .then( res => window.location.reload(false) )
    }
    

    
    
    render() {
        // console.log(this.state.comments)
        // console.log(this.props)
        // console.log(this.props)
        if (!this.state.comments){
            return (
                <div> Waiting for your Info </div>
            )
        }

      

        const mappedComment = this.state.comments.map( (e,i) => {
            return (
                <div key = {i} className =  {this.props.userReducer.name === e.name ? 'myComment': 'individualComment' }  >
                    <div className = 'rigthText'>Date: {e.comment_date}</div>
                    <div>Comment: {e.comment_text}</div>
                    <div className = 'rigthText' >Name: {e.name}</div>
                    
                    {this.props.userReducer.name === e.name ? <div>
                        <button onClick = { () => this.deleteClick(e.comment_id) } >Delete</button>
                        <Link to = {`/home/email/${e.comment_id}/${e.name}`} ><button>Send as an email</button></Link>
                        <Link to = {`/home/comment/update/${e.comment_id}/${e.comment_text}/${this.state.report_id}`}><button>update</button></Link>
                     </div> : null}

                   


                </div>
            )
        } )



        return (
            <div className = 'individualReport'  >

                {/* report part this must be in the left */}
               <div className = 'reportPdf' >
                    
                    <h2>Report</h2>
                    <p>Rith Click and Print</p>
                    <PDFViewer>
                        <ReportPdf report_id ={this.state.report_id} />
                    </PDFViewer> 
               </div>

                {/* this is the comment sectin this goest to the rigth  */}
                <div className = 'comments'>
              
                <NewComment report_id = {this.state.report_id} 
                updateFx = {this.updateFx} />
                    {mappedComment}
                </div>

            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default  connect(mapStateToProps)   (IndividualReport);

