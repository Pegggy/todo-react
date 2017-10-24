import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initTodo,addTodo,toggleTodo,editTodo,deleteTodo,clearAll,setVisibilityFilter,VisibilityFilters } from './redux/actions/todo'
import {signup,signin,signout,forget_password} from './redux/actions/user'
import AddTodo from './component/addtodo'
import TodoList from './component/todolist'
import UserDialog from './component/userDialog'
import {getCurrentUser,signOut,TodoModel,resetPasswordByEmail} from './component/leanCloud'
import 'normalize.css'
import './css/reset.css'
import './css/App.css'
// import SideBar from './sidebar'

class App extends Component {

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
    //     text: e.target.value,
    //     completed: false,
    //     deleted: false
    //   }
    //   TodoModel.create(todoitem,(id)=>{
    //     todoitem.id = id
    //     this.props.todos.push(todoitem)
    //     this.setState(
    //       this.props.todoList
    //     ,(error)=>{
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
    // onSign(user){
    //   TodoModel.getByUser(this.props.userInfo.data,(todos)=>{
    //     this.props.todos = todos
    //     this.setState(this.props.todos)
    //   },(error)=>{
    //     console.log(error)
    //   })
    // }

  render(){
    const { dispatch, visibleTodos, visibilityFilter,userInfo } = this.props
    return (
      <div className="App">
         <h1>{this.props.userInfo.username||'我'}的待办
          {this.props.userInfo.data.id ? <button className="signOut" 
          onClick={()=>this.props.signout()}>登出</button> : null}
        </h1> 
        <div className="inputWrapper">
          <AddTodo 
          onAddClick={(text) => {this.props.addTodo(text)}}/>
        </div>  
         <TodoList className="todolist"  todos={this.props.todoList} 
          onTodoClick={(todo) => {this.props.toggleTodo(todo)}}
          onTodoDeleted={(todo) =>{this.props.deleteTodo(todo)}}/>
       { this.props.userInfo.data.id ? null :  
       <UserDialog onSignUp={(username,password,email,user)=>this.props.signup(username,password,email,user)} 
       onSignIn={(username,password,user)=>this.props.signin(username,password,user)}
       userInfo={this.props.userInfo}
       onResetPassword={(email)=>{this.props.forget_password(email)}}/>}
       {/* <SideBar /> } */}
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
    todos: state.todoApp.todos,
    todoList: getVisibileTodos(state.todoApp.todos,state.todoApp.visibilityFilters),
    visibilityFilters: state.todoApp.visibilityFilters,
    userInfo: state.userInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) =>{
      let todoitem = {
        text: text,
        completed: false,
        deleted: false
      }
      TodoModel.create(todoitem,(id)=>{
        todoitem.id = id
        dispatch(addTodo(todoitem.id,todoitem.text));
        this.setState(this.props.todoList)}
        ,(error)=>{
          console.log(error)
      })
    },
    toggleTodo: (todo) =>{ 
      TodoModel.update({id: todo.id,completed: !todo.completed},()=>{
        dispatch(toggleTodo(todo.id))
        this.setState(this.props.todoList)
      },(error)=>{
        this.setState(this.props.todoList)
      })
    },
    editTodo: (id,text)=>{
      dispatch(editTodo(id,text))
    },
    deleteTodo: (todo)=>{
      TodoModel.destroy(todo.id,()=>{
        dispatch(deleteTodo(todo.id));
        this.setState(this.state)
      },(error)=>{
        console.log(error)
      })
    },
    setVisibilityFilter: (filter) =>{
      dispatch(setVisibilityFilter(filter))
    },
    signup: (username,password,email,data) =>{
      dispatch(signup(username,password,email,data))
      TodoModel.getByUser(data,(todos)=>{
        dispatch(initTodo(todos))
        this.setState(this.props.todoList)
      },(error)=>{
        console.log(error)
      })
    },
    signin: (username,password,user) =>{
      dispatch(signin(username,password,user))
      TodoModel.getByUser(user,(todos)=>{
        dispatch(initTodo(todos))
        this.setState(this.props.todoList)
      },(error)=>{
        console.log(error)
      })
    },
    signout: () =>{
      dispatch(signout())
      signOut()
      dispatch(clearAll())
    },
    forget_password: (email)=>{
      dispatch(forget_password(email))
      resetPasswordByEmail(email)
      dispatch(signout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

