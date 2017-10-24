import {SIGNUP,SIGNIN,SIGNOUT,FORGET_PASSWORD} from '../actions/user'
const initState = {
  data: [],
  username: '',
  password: '',
  email: ''
}
export default function user(state = initState,action){
  switch(action.type){
    case SIGNUP:
      return{
        username: action.username,
        password: action.password,
        email: action.email,
        data: action.data
      }
    case SIGNIN:
      return{
        username: action.username,
        password: action.password,
        data: action.data
      }
    case SIGNOUT:
      return initState
    case FORGET_PASSWORD:
      return{
        email: action.email,
        data: action.data
      }
    default:
      return state
  }
}