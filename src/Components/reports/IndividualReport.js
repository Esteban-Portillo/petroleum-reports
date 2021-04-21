import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ReportPdf from './ReportPdf'
import { Link } from 'react-router-dom'
import ReactPDF from '@react-pdf/renderer';
import axios from 'axios'
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
    
    donwloadClick =() => {
        // ReactPDF.render(<ReportPdf />, `${__dirname}/example.pdf`);
    }
    
    
    render() {
        // console.log(this.state.comments)
        // console.log(this.props)

        if (!this.state.comments){
            return (
                <div> Waiting for your Info </div>
            )
        }

        const mappedComment = this.state.comments.map( (e,i) => {
            return (
                <div key = {i} >
                    <div>Date: {e.comment_date}</div>
                    <div>Comment: {e.comment_text}</div>
                    <div>Name: {e.name}</div>
                    <Link to = {`/home/comment/update/${e.comment_id}/${e.comment_text}/${this.state.report_id}`}><div>update</div></Link>
                    <button onClick = { () => this.deleteClick(e.comment_id) } >Delete</button>
                    <Link to = {`/home/email/${e.comment_id}/${e.name}`} ><div>Send as an email</div></Link>


                </div>
            )
        } )



        return (
            <div>
               this is the individual report 
               <PDFViewer>
                    <ReportPdf report_id ={this.state.report_id} />
                </PDFViewer> 
                <button onClick = {()=> this.donwloadClick()} >Download Pdf</button>
                <NewComment report_id = {this.state.report_id} 
                updateFx = {this.updateFx} />
                {mappedComment}
                

                


            </div>
        );
    }
}

export default IndividualReport;

