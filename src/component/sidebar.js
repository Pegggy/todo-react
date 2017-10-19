import React, { Component } from 'react'
import './sidebar.css'
export default class SideBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      tags: []
    }
  }
  render(){
    return(
      <div className="sidebar">
        <header>
          <h2>hello,{/*this.props.user.username*/}</h2>
        </header>
        <nav className="navbar">
          <ul>
            <li className="work selected" onClick={}>工作</li>
            <li className="study">学习</li>
          </ul>
        </nav>
      </div>
    )}
}
  let num = 0
  function tagMaker(){
    ++num
    return 'tags'+num
  }