import { INIT_TODO,ADD_TODO, TOGGLE_TODO,DELETE_TODO,EDIT_TODO, SET_VISIBILITY_FILTER,VisibilityFilters } from '../actions/todo';
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

// state= {
//   visibilityFilters: SHOW_ALL,
//   todos:[
//     {
//       id: 1,
//       text: 'do something',
//       completed: false
//     },
//     {
//       id: 2,
//       text: 'working',
//       completed: false
//     }
//   ]
// }

// let id = 0
// function idmaker(){
//   return id+=1 
// }
function todos(state = [], actions){
  switch( actions.type){
    case INIT_TODO:
    console.log([
        ...state,
        ...actions.todos
      ])
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
        if( actions.id === id){
          return Object.assign({},item,{ completed: !item.completed})
        }
        return item
      })
    case DELETE_TODO:
      return state.filter(todos =>
        todos.id !== actions.id
    )
    case EDIT_TODO:
    return state.map(todos =>
      todos.id === actions.id ?
        { ...todo, text: action.text } :
        todo
    )
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