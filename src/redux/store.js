import rootReducers from './reducer'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 

let store = createStore(rootReducers,
  composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)
export default store