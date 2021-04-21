import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'

function SendEmail(props) {

    const [names, setName] = useState([])
    const [emaill, setEmail] = useState([])
    const [commentInfo, setCommentInfo] = useState([])
    const [newComment, setNewComment] = useState('')
    const [subject, setSubject] = useState('')

    useEffect ( () => {
        axios.get(`/email/names/${+props.match.params.comment_id}`)
            .then( res => {
                // console.log(res.data)
                setName(res.data.map( e => e.name ))
                setEmail(res.data.map( e => e.email ))
            } );

        axios.get(`/comment/${+props.match.params.comment_id}`)
        .then( res => {
            setCommentInfo(res.data)
        } )
    },[] )
    // console.log(props)

    // console.log(names)
    // console.log(emaill)
    // console.log(commentInfo)

    function sendClick(){
        emaill.forEach( (e,i) => {
            axios.post('/send-email',{
                from: props.match.params.name ,
                to: e ,
                subject: subject  , 
                text: commentInfo[0].comment_text + '' + newComment 
            }).then( res => console.log(res) )
        } )
    }


    if(!commentInfo[0]){
        return <div>waiting for your info</div>
    }

    return (
        <div>
            this is where we send emails 

            <div>From : {props.match.params.name}</div>
            <div>Comment: {commentInfo[0].comment_text}</div>
            <label>Write sometinh new </label>
            <input onChange = {(e) => setNewComment(e.target.value)  }/>
            <label>Subject of the email</label>
            <input onChange = { (e) => setSubject(e.target.value) } />
            <button onClick = { () => sendClick() } >Send email</button>
        </div>
    );
}

export default SendEmail;