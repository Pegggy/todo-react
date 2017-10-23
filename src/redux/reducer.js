import todoApp from './reducers/todo'
import userInfo from './reducers/user'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  todoApp: todoApp,
  userInfo: userInfo
})
export default rootReducers