import React,{Component} from 'react';
import './todoitem.css';

// export default function(props){
//   return(
//     <div className="todo-item"> 
//       <input type="checkbox" className="toggle"
//       checked={this.props.completed} 
//       onChange={this.props.toggle.bind()}/>
//       <span className={this.props.completed ? "completed" : "none" }>{this.props.text}</span>
//       <button className="del" 
//       onClick={this.props.deleted.bind(null,props)}>✕</button>
//     </div>
//   )
// }
// function toggle(props,e){
//   props.onToggle(e,props.todo)
// }
// function deleted(props,e){
//   props.onDelete(e,props.todo)
// }
export default class Todo extends Component {
  render() {
    return(
      <div className="todo-item"> 
        <input type="checkbox" className="toggle"
        checked={this.props.completed} 
        onChange={this.props.onClick}/>
        <span className={this.props.completed ? "completed" : "none" }>{this.props.text}</span>
        <button className="del" 
        onClick={this.props.onDeleted}>✕</button>
      </div>
    )
  }
}