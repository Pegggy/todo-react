import React,{Component} from 'react';
import './todoitem.css';

export default function(props){
  return(
    <div className="todo-item"> 
      <input type="checkbox" className="toggle"
      checked={props.todo.status==='completed'} 
      onChange={toggle.bind(null,props)}/>
      <span className={props.todo.status==='completed'?"completed":""}>{props.todo.title}</span>
      <button className="del" 
      onClick={deleted.bind(null,props)}>✕</button>
    </div>
  )
}
function toggle(props,e){
  props.onToggle(e,props.todo)
}
function deleted(props,e){
  props.onDelete(e,props.todo)
}