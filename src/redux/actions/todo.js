export const INIT_TODO = 'INIT_TODO'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export function initTodo(todos){
  return {type: INIT_TODO,todos}
}
export function addTodo(id,text){
  return{ type: ADD_TODO,id,text}
}

export function toggleTodo(id){
  return{ type: TOGGLE_TODO,id}
}
export function editTodo(id, text) {
  return {type: EDIT_TODO,id,text}
}
export function setVisibilityFilter(filter){
  return{type: SET_VISIBILITY_FILTER,filter}
}
export function deleteTodo(id){
  return{type: DELETE_TODO,id}
}