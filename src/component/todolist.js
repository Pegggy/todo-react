import React,{Component} from 'react';
import TodoItem from './todoItem'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <TodoItem {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)} 
                onDeleted={()=>{this.props.onTodoDeleted(index)}}/>
        )}
      </ul>
    )
  }
}
