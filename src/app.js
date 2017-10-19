import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo,toggleTodo,editTodo,deleteTodo,setVisibilityFilter,VisibilityFilters } from './redux/actions/todo'
// import './App.css'
import AddTodo from './component/addtodo'
// import TodoItem from './todoItem'
// import 'normalize.css'
// import './reset.css'
// import UserDialog from './userDialog'
// import {getCurrentUser,signOut,TodoModel} from './leanCloud'
// import SideBar from './sidebar'

class App extends Component {
  // constructor(props){
  //   super(props)
  // }
    // super(props)
    //   this.state = {
    //     newTodo: '',
    //     todoList:[],
    //     user: getCurrentUser()||{}
    //   }
    //   let user = getCurrentUser()
    //   if(user){
    //     TodoModel.getByUser(user,(todolist)=>{
    //       let stateCopy = JSON.parse(JSON.stringify(this.state))
    //       stateCopy.todoList = todolist
    //       this.setState(stateCopy)
    //     },(error)=>{
    //       console.log(error)
    //     })
    //   }
    // }
    // changTitle(e){
    //   this.setState({
    //     newTodo: e.target.value,
    //     todoList: this.state.todoList
    //   })
    // }
    // addTodo(e){
    //   let todoitem = {
    //     title: e.target.value,
    //     status: '',
    //     deleted: false
    //   }
    //   TodoModel.create(todoitem,(id)=>{
    //     todoitem.id = id
    //     this.state.todoList.push(todoitem)
    //     this.setState({
    //       newTodo:'',
    //       todoList: this.state.todoList
    //     },(error)=>{
    //       console.log(error)
    //     })
    //   })
    // }

    // toggle(e,todo){
    //   let oldStatus = todo.status
    //   todo.status = todo.status === 'completed' ? '':'completed'
    //   TodoModel.update(todo,()=>{
    //     this.setState(this.state)
    //   },(error)=>{
    //     todo.status = oldStatus
    //     this.setState(this.state)
    //   })
    // }
    // delete(e,todo){
    //   TodoModel.destroy(todo.id,()=>{
    //     todo.deleted = true
    //     this.setState(this.state)
    //   },(error)=>{
    //     console.log(error)
    //   })
    // }
    // onSign(user){
    //   let stateCopy = JSON.parse(JSON.stringify(this.state))
    //   stateCopy.user = user
    //   TodoModel.getByUser(user,(todos)=>{
    //     stateCopy.todoList = todos
    //     this.setState(stateCopy)
    //   },(error)=>{
    //     console.log(error)
    //   })
    // }

    // signOut(){
    //   signOut()
    //   let stateCopy = JSON.parse(JSON.stringify(this.state))
    //   stateCopy.user = {}
    //   stateCopy.todoList = []
    //   this.setState(stateCopy)
    // }

  render(){
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    // let todos = this.state.todoList
    //     .filter(item => item.deleted === false)
    //       .map((item,index) =>{
    //         return(
    //         <li key={index}>
    //           <TodoItem todo={item} 
    //           onToggle={this.toggle.bind(this)} 
    //           onDelete={this.delete.bind(this)}/>  
    //         </li>
    //         )
    //       })
    return (
      <div className="App">
        {/* <h1>{this.state.user.username||'我'}的待办
          {this.state.user.id ? <button className="signOut" 
          onClick={this.signOut.bind(this)}>登出</button> : null}
        </h1> */}
        <div className="inputWrapper">
          <AddTodo 
          onAddClick={(text) => {this.props.addTodo(text)}}/>
        </div>  
        {/* <TodoList className="todolist">
          {todos}
        </TodoList> */}
       {/* {this.state.user.id ? null : 
       <UserDialog onSignUp={this.onSign.bind(this)} 
       onSignIn={this.onSign.bind(this)}/>}
       <SideBar /> */}
      </div>
      
    )
  }
}

function getVisibileTodos(todos,filter){
  switch (filter){
    case 'SHOW_ALL' :
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
  }
}
const mapStateToProps = (state) =>{
  return{
    todos: getVisibileTodos(state.todoApp.todos,state.todoApp.visibilityFilters),
    visibilityFilters: state.todoApp.visibilityFilters
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) =>{
      dispatch(addTodo(text))
    },
    toggleTodo: (id) =>{
      dispatch(toggleTodo(id))
    },
    editTodo: (id,text)=>{
      dispatch:(editTodo(id,text))
    },
    deleteTodo: (id)=>{
      dispatch:(deleteTodo(id))
    },
    setVisibilityFilter: (filter) =>{
      dispatch(setVisibilityFilter(filter))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

