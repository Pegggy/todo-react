import todoApp from './reducers/todo'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  todoApp: todoApp
})
export default rootReducers