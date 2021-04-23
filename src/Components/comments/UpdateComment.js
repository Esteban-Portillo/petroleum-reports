import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function UpdateComment(props) {

    const [newText, setNewText ] = useState('')

    function updateClick(){
        axios.put('/comment/update', {
            comment_text: newText, 
            comment_id: +props.match.params.comment_id
        }).then( res => {
            props.history.push(`/home/individual/${+props.match.params.report_id}`)
        } )
    }
    // console.log(props)

    return (
        <div className = "updateComment">
            <h2>Update your comment</h2>
            <input type = 'text' placeholder = {props.match.params.text}
            onChange = {(e)=> setNewText(e.target.value)}
            />
            <div>
                <button onClick = {() => updateClick()} >Update</button>
                <Link to = {`/home/individual/${+props.match.params.report_id}`}><button>Cancel</button></Link>
            </div>
        </div>
    );
}

export default UpdateComment;