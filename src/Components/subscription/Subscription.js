import React from 'react';
import { useSelector }from 'react-redux'
import axios from 'axios'
import { useState } from 'react'

function Subscription(props) {

    const userState = useSelector (state => state.userReducer)

    const [ project_id, setProject_id ] = useState(null)

    function subscriptionClick(){
        axios.post('/sub/create',{
            projectId: project_id  , 
            userId: userState.user_id
        })
            .then( res => {
                props.history.push('/home')
            } )
    }
    console.log(userState)
    return (
        <div>
            <label>Intruduce the Project Id</label>
            <input onChange = { (e) => setProject_id(e.target.value) }/>
            <button onClick = {()=> subscriptionClick()} >Subscribe</button>
        </div>
    );
}

export default Subscription;