export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'
export const SIGNOUT = 'SIGNOUT'
export const FORGET_PASSWORD = 'FORGET_PASSWORD'

export function signup(username,password,email,data){
  return{ type: SIGNUP,username,password,email,data}
}
export function signin(username,password,data){
  return{ type: SIGNIN,username,password,data}
}
export function signout(){
  return{ type: SIGNOUT}
}
export function forget_password(email,data){
  return{ type: FORGET_PASSWORD,email,data}
}
