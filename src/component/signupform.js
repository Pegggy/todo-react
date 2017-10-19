import React from 'react'

export default function (props) {
  return(
    <form className="signUp" 
    onSubmit={props.onSubmit}>{/*注册*/}
      <div className="row">
        <input type="text" name="username" 
        placeholder="用户名"
        value={props.formData.username}
        onChange={props.onChange.bind(null,"username")}/>
        <i className="iconfont">&#xe78c;</i>
        <lable className={props.info.username !== "" ? "visiable info":"info"}>{props.info.username}</lable>
      </div>
      <div className="row">
        <input type="password" name="password" 
        placeholder="密码"
        value={props.formData.password}  
        onChange={props.onChange.bind(null,"password")}/>
        <i className="iconfont">&#xe6c0;</i>
        <lable className={props.info.password !== "" ? "visiable info":"info"}>{props.info.password}</lable>
      </div>
      <div className="row">
        <input type="text" name="email" 
        placeholder="邮箱"
        value={props.formData.email}
        onChange={props.onChange.bind(null,"email")}/>
        <i className="iconfont">&#xe7bd;</i>
        <lable className={props.info.email !== "" ? "visiable info":"info"}>{props.info.email}</lable>
      </div>
      <div className="row actions">
        <button type="submit">注册</button>
      </div>
    </form>
  )
}