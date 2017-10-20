export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'
export const SIGNOUT = 'SIGNOUT'
export const FORGET_PASSWORD = 'FORGET_PASSWORD'

export function signup(username,password,email){
  return{ type: SIGNUP,username,password,email}
}
export function signin(username,password){
  return{ type: SIGNIN,username,password}
}
export function signout(user){
  return{ type: SIGNOUT,user}
}
export function forget_password(email){
  return{ type: FORGET_PASSWORD,email}
}