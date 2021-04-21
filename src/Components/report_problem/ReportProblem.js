import React from 'react';
import {useState} from 'react'
import axios from 'axios'

function ReportProblem(props) {

    const [text, setText ] = useState ('')
    const [confirmation, setConfirmation] = useState('')

    function problemClick (){
        axios.post('/api/sendSMS',{message: text})
            .then( res => {
                setConfirmation('This problem was sended to the creator')
            } )
    }

    return (
        <div>
            <label>Write the problem</label>
            <input onChange = {(e)=> setText (e.target.value)} />
            <button onClick = { () => problemClick() } >Send Problem </button>
            <div>{confirmation}</div>
        </div>
    );
}

export default ReportProblem;