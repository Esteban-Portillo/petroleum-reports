const initialState = {
    email:'',
    user_id : null,
    admin: false,
    name: '',
    last_name: '',
    title: '',
    isLogged : false
}
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export function login (email, user_id, admin, name, last_name, title){
    return {
        type: LOGIN,
        payload: {
            email,user_id, admin, name, last_name, title
        }
    }
}

export function logout (){
    return {
        type: LOGOUT
    }
}

export default function reducer ( state = initialState, action ){
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                ...action.payload,
                isLogged: true
            }
        
        case LOGOUT:
            return initialState;
        
        default: return state 
    }
}