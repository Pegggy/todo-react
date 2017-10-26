## 待办事项 TodoList
基于 React、Redux 的待办事项管理应用，支持登录、注册、找回密码以及云同步。
[点击此处](https://pegggy.github.io/todo-react/dist/index.html)进入应用

## 已完成功能

* 注册、登录和找回密码
* 云端同步待办事项
* 添加待办事项、删除待办事项
* 标记为已完成，点击待办事项左侧` √ `即可

## 待完成功能
* 将待办事项按日期进行分类，已加入 rc-calendar 组件

## 技术栈

React + Redux + ES6 + Webpack 

云端数据部署采用 Leancloud

## 本地运行
1. 克隆项目到本地
```
git clone git@github.com:Pegggy/todo-react.git
```

2. 安装依赖
```
npm install
```

3. 启动
```
npm start
```
在浏览器窗口打开 [http://0.0.0.0:8080](http://0.0.0.0:8080)即可使用

4. 其他命令
```
## 将 src 文件夹下文件编译到 dist 文件夹下
npm run build
```