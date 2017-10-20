import React,{Component} from 'react';
import '../css/todoitem.css';

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