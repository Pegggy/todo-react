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
        email: '',
        data: action.data
      }
    case SIGNOUT:
      state = initState
      return state
    case FORGET_PASSWORD:
      return{
        email: action.email,
      }
    default:
      return state
  }
}