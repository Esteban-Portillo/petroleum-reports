import React from 'react';
import axios from 'axios'
import { useSelector }from 'react-redux'
import {useState} from 'react'

function NewComment(props) {
    
    
    const userState = useSelector (state => state.userReducer)
    // console.log(userState)


    const [text, setText ] = useState('')
    
    function postClick  () {
        if (props.report_id){
            axios.post('/comment/create',{
                report_id: props.report_id, 
                user_id: userState.user_id, 
                comment_text: text , 
                comment_date: new Date()
            }).then( res => {
                props.updateFx()
            })
        }
    }

    // console.log(text)
    

    return (
        <div className = 'newComment'>
            <input onChange = {(e) => setText (e.target.value)} placeholder = 'Write your comment'></input>
            <button onClick = { postClick} >Post</button>
            {/* {console.log(text)} */}
        </div>
    );
}

export default NewComment;