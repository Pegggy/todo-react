import React,{Component} from 'react'
import '../css/userDialog.css'
import {signUp,signIn,resetPasswordByEmail} from './leanCloud'
import SignUpOrSignIn from './signuporsignin'
import ForgetPassword from './forgetpassword'

export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'signUpOrSignIn',
      info:{
        username: '',
        password: '',
        email: ''
      }
    }
  }

  changeFormData(key,e){
    this.props.userInfo[key] = e.target.value
    this.setState(this.props.userInfo)
  }  
  signUp(e){
    e.preventDefault()
    let {username,password,email} = this.props.userInfo
    let success = (data) =>{
      this.props.onSignUp.call(null,username,password,email,data)
    }
    let error = (error) =>{
      switch(error.code){
        case 200:
          alert('用户名为空')
          break
        case 202:
          alert('用户名被占用')
          break
        default:
          alert(error)
      }
    }
    let showInfo = (type,info)=>{
        console.log(type,info)
        this.state.info[type] = info
        this.setState(this.state)
    }
    let hideInfo = (type)=>{
        this.state.info[type] = ''
        this.setState(this.state)
    }
     if(checkUserName(username,hideInfo,showInfo) && checkPassword(password,hideInfo,showInfo) && checkEmail(email,hideInfo,showInfo)){
       signUp(username,password,email,success,error)
     }  
  }
  signIn(e){
    e.preventDefault()
    let {username,password} = this.props.userInfo
    let success = (data) => {
      this.props.onSignIn.call(null,username,password,data)
    }
    let error = (error) =>{
      switch(error.code){
        case 210:
        alert('用户名与密码不匹配')
        break
        case 211:
        alert('找不到用户')
        break
        default:
        alert(error)
      }
    }
    signIn(username,password,success,error)
  }
  resetPassword(e){
    e.preventDefault()
    this.props.onResetPassword.call(null,this.props.userInfo.email)
    this.returnToSignIn();
  }
  showFogetPassword(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = 'forgetPassword'
    this.setState(stateCopy)
  }
  returnToSignIn(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = "signUpOrSignIn"
    // stateCopy.formData.email = ''
    this.setState(stateCopy)
  }
  render(){
    return(
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">{
           this.state.selectedTab === 'signUpOrSignIn'?  
          <SignUpOrSignIn formData={this.props.userInfo} 
          info={this.state.info}   
          onSignUp={this.signUp.bind(this)} 
          onSignIn={this.signIn.bind(this)} 
          onChange={this.changeFormData.bind(this)} 
          onFogetPassword={this.showFogetPassword.bind(this)}
          /> : <ForgetPassword 
          onSubmit={this.resetPassword.bind(this)} 
          formData={this.props.userInfo} 
          onChange={this.changeFormData.bind(this)}
          onReturnToSignIn={this.returnToSignIn.bind(this)}/>
          }
        </div>
      </div>
    )
  }
}
function checkUserName(username,successFn,errorFn){
    let info = ''
		let arr_name = username.split('')
		let num = 0
		let len = arr_name.length
		if(username == ""){
      info = '姓名不能为空'
      errorFn('username',info)
			return false;
		}else{		
			for(var i = 0;i < len;i++){
				if(/^[a-zA-Z0-9]$/g.test(arr_name[i])){
					num += 1
				}else{
					num += 2
				}
			}
			if(num < 4 || num > 16){
        info = '请输入为4~16个字符'
        errorFn('username',info)
				return false
			}else {
        successFn('username')
				return true
      }
		}
}
function checkPassword(password,successFn,errorFn){
  let info = ''
    if(/\w{8,16}/.test(password)){
      successFn('password')
      return true;	
    }else{
      info = '请输入8~16位密码'
      errorFn('password',info)
      return false
    }
}
function checkEmail(email,successFn,errorFn){
  var info = ''
  var reg = /^[a-zA-Z0-9_]+@\w+\.[a-zA-Z0-9]+$/g;
  if(reg.test(email)){
    successFn('email')
    return true
  }else{
    info = '邮箱输入错误'
    errorFn('email',info)
    return false
  }
}