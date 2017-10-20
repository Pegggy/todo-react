import todoApp from './reducers/todo'
import user from './reducers/user'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  todoApp: todoApp,
  user: user
})
export default rootReducers