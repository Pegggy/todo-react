import React,{Component} from 'react'
import SignInForm from './signinform'
import SignUpForm from './signupform'
import '../css/signuporsignin.css'
export default class SignUpOrSignIn extends Component{
  constructor(props){
    super(props)
    this.state = {
      selected: 'signUp'
    }
  }

  switch(e){
    this.setState({
      selected: e.target.value
    })
  }
  render(){
    return(
      <div className="signUpOrSignIn">
        <nav>
          <label className={this.state.selected === 'signUp'? 'checked':''}>
            <input type="radio" value="signUp" 
            checked={this.state.selected === 'signUp'} 
            onChange={this.switch.bind(this)} />
            注册
          </label>
          <label className={this.state.selected === 'signIn'? 'checked':''}>
            <input type="radio" value="signIn" 
            checked={this.state.selected === 'signIn'} 
            onChange={this.switch.bind(this)} />
             登录
          </label>          
        </nav>
        <div className="panels" >
          {this.state.selected === "signUp" ? 
          <SignUpForm formData={this.props.formData} 
          info = {this.props.info}
          onSubmit={this.props.onSignUp}
          onChange={this.props.onChange} /> : null}
          {this.state.selected  === "signIn" ? 
          <SignInForm formData={this.props.formData} 
          onSubmit={this.props.onSignIn} 
          onChange={this.props.onChange} 
          onFogetPassword={this.props.onFogetPassword}/>: null}
        </div>
      </div>
    )
  }
}