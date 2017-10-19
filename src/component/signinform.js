import React from 'react'

export default function(props){
  return(
    <form className="signIn" 
    onSubmit={props.onSubmit}>{/*登录*/}
      <div className="row">
        <input type="text" name="username"  
        placeholder="用户名"
        value={props.formData.username} 
        onChange={props.onChange.bind(null,"username")}/>
        <i className="iconfont">&#xe78c;</i>
      </div>
      <div className="row">
        <input type="password" name="password" 
        placeholder="密码"
        value={props.formData.password}
        onChange={props.onChange.bind(null,"password")}/>
        <i className="iconfont">&#xe6c0;</i>
      </div>
      <div className="row actions">
        <button type="submit">登录</button>
        <a href="#" onClick={props.onFogetPassword}>忘记密码</a>
      </div>
    </form>
  )
}