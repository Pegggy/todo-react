import { INIT_TODO,ADD_TODO, TOGGLE_TODO,DELETE_TODO,EDIT_TODO, CLEAR_ALL,SET_VISIBILITY_FILTER,VisibilityFilters } from '../actions/todo';
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

// state= {
//   visibilityFilters: SHOW_ALL,
//   todos:[
//     {
//       id: 1,
//       text: 'do something',
//       completed: false,
//       delete: false
//     }
//   ]
// }

function todos(state = [], actions){
  switch( actions.type){
    case INIT_TODO:
      return [
        ...state,
        ...actions.todos
      ]
    case ADD_TODO:
      return [
        ...state,
        {
          id: actions.id,
          text: actions.text,
          completed: false,
          deleted: false,
        }
      ]
    case TOGGLE_TODO:
      return state.map((item,id)=>{
        if( actions.id === item.id){
          return Object.assign({},item,{ completed: !item.completed})
        }
        return item
      })
    case DELETE_TODO:
      state = state.map((item,id)=>{
        if( actions.id === item.id){
          return Object.assign({},item,{ deleted: true })
        }
        return item
      })
      return state.filter(todos =>
        todos.id !== actions.id
    )
    case EDIT_TODO:
    return state.map(todos =>
      todos.id === actions.id ?
        { ...todo, text: action.text } :
        todo
    )
    case CLEAR_ALL:
      state = []
      return state;
    default: 
      return state
  }
}

function visibilityFilters(state = SHOW_ALL, actions){
  switch(actions.type){
    case SET_VISIBILITY_FILTER:
      return actions.filter
    default:
      return state
  }
}
const todoApp = combineReducers({
  visibilityFilters,
  todos
})
export default todoApp