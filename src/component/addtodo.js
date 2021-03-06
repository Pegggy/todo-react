import React,{Component} from 'react';
import '../css/todoInput.css';

export default class AddTodo extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  handleChange(e){
      this.setState({
        text: e.target.value
      })
  }
  handleClick(text,e){
    this.props.onAddClick(text)
    this.setState({
      text: ''
    })
  }
  submit(text,e){
    if(e.key === 'Enter'){
      if(e.target.value.trim() !== ''){
        this.props.onAddClick(text)
        this.setState({
          text: ''
        })
      }
    }
  }
  render(){
    let  text = this.state.text
    return (
      <div>
          <input type="text" placeholder="What needs to be done?" 
              className="TodoInput" 
              value={text} 
              onChange={this.handleChange.bind(this)} 
              onKeyPress={this.submit.bind(this,text)}/>
      <button className="btn addBtn"onClick={this.handleClick.bind(this,text)}>Add</button>
      </div>
    )
  }

}