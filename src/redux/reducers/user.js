import {SIGNUP,SIGNIN,SIGNOUT,FORGET_PASSWORD} from '../actions/user'
const initState = {
  data: []
}
export default function user(state,action){
  if(!state){
    state = initState
  }
  switch(action.type){
    case SIGNUP:
      return{
        ...state,
        username: action.username,
        password: action.password,
        email: action.email
      }
    case SIGNIN:
      return{
        ...state,
        username: action.username,
        password: action.password
      }
    case SIGNOUT:
      return{
        ...state,
        user: action.user
      }
    case FORGET_PASSWORD:
      return{
        ...state,
        email: action.email
      }
    default:
      return state
  }
}