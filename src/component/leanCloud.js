import AV from 'leancloud-storage'

const appId = 'lhnGAvlnkiAuvCfGApyI8vLn-gzGzoHsz'
const appKey = 'mcnNtPno10tnYn3GJhk7jipk'
AV.init({ 
  appId: appId, 
  appKey: appKey 
});

export default AV
export const TodoModel = {
  create({text,completed,deleted},successFn,errorFn){
    let Todo = AV.Object.extend('Todo')
    let todo = new Todo()
    todo.set('text',text)
    todo.set('completed',completed)
    todo.set('deleted',deleted)
    let acl = new AV.ACL()
    acl.setPublicReadAccess(false)
    acl.setReadAccess(AV.User.current(),true)
    acl.setWriteAccess(AV.User.current(),true) 
    // 将 ACL 实例赋予 Post 对象
    todo.setACL(acl);
    todo.save().then(function(response){
      successFn.call(null,response.id)
    },function(error){
      errorFn && errorFn.call(null,error)
    });
  },
  getByUser(user,successFn,errorFn){
    let query = new AV.Query('Todo');
    query.find().then(function (todos) {
      let arr = todos.map(function(todo) {
        if(!todo.attributes.deleted) return  {id:todo.id,...todo.attributes}
      });
      arr = arr.filter(todo => todo !== undefined)
      console.log(arr)
      successFn.call(null,arr)
    }, function (error) {
      errorFn && errorFn.call(null,error)
    });
  },
  destroy(todoId,successFn,errorFn){
    TodoModel.update({id:todoId,deleted: true},successFn,errorFn)
  },
  update({id,text,completed,deleted},successFn,errorFn){
    // 第一个参数是 className，第二个参数是 objectId
    var todo = AV.Object.createWithoutData('Todo', id)
    console.log(id,completed)
    // 修改属性
    text !== undefined && todo.set('text', text)
    completed !== undefined && todo.set('completed', completed)
    deleted !== undefined && todo.set('deleted', deleted)
    // 保存到云端
    todo.save().then(function(response){
      successFn && successFn.call(null,response)
    },(error)=>{
      errorFn && errorFn.call(null,error)
    })
  }
}
export function signUp(username,password,email,successFn,errorFn){
  var user = new AV.User()
  // 设置用户名
  user.setUsername(username)
  // 设置密码
  user.setPassword(password)
  user.setEmail(email)
  user.signUp().then(function(loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    console.log(user);
    successFn.call(null,user)
  }, function (error) {
    errorFn.call(null,error)
  });
  return undefined
}

function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
export function getCurrentUser(){
  let currentUser = AV.User.current();

  if (currentUser) {
     return getUserFromAVUser(currentUser)
  }
  else {
     return null
  }
}
export function signOut(){
  AV.User.logOut()
  return undefined
}
export function signIn(username,password,successFn,errorFn){
  AV.User.logIn(username, password).then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null,user)
  }, function (error) {
    errorFn.call(null,error)
  });
}
export function resetPasswordByEmail(email,successFn,errorFn){
  AV.User.requestPasswordReset(email).then(function (success) {
    successFn.call()
  }, function (error) {
    errorFn.call(null,error)
  });
}