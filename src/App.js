import './App.css';
import React, { useState} from 'react';
import Users from './users';
import Header from './header';
import Individual from './individual';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Authentic from './authentic';

function App() {

  const [users, setusers] = useState(["user1", "user2", "user3", "user4"]);
  const [user, setuser] = useState("user1");
  const [userTask, setUserTask] = useState({
    "": {
      user: "",
      task: []
    },
    user1: {
      user: "user1",
      task: ["PPT", "Testing", "SRS verification"],
    },
    user2: {
      user: "user2",
      task: ["structring", "Framing", "Orientation"],
    },
    user3: {
      user: "user3",
      task: ["Dealing", "Ask requirements", "collect feedback"],
    },
    user4: {
      user: "user4",
      task: ["updating", "review", "adding featurs"],
    },
  });
  const[auth, setAuth] = useState({userAuth:false,managerAuth:false});

  const userHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    setuser(event.target.value);
  }
  const addUser = (prams) => {
    if (!users.includes(prams)) {
      let arr = users;
      arr.push(prams);
      setusers(arr);
      let obj = userTask;
      obj[prams] = {
        user: prams,
        task: []
      }
      setUserTask(obj);
    } else {
      console.log("user already exist")
    }
  }
  const removeUser = (event) => {
    event.preventDefault();
    let arr = users.filter((el) => {
      return el !== event.target.value;
    });
    setusers(arr);
  };
  const addTask = (prams) => {
    let arr = userTask[prams.user]["task"];
    arr.push(prams.task);
    // console.log(prams.user+" "+prams.task+" "+arr);
    let obj = userTask;
    obj[prams.user] = {
      task: arr
    }
    setUserTask(obj);
  }
  const checkAuth = (prams)=>{
    let obj = {};
    if(prams.deg === "manager"){
      obj.managerAuth  = true;
      obj.userAuth=false;
    }else{
      obj.userAuth = true;
      obj.managerAuth=false; 
      setuser(prams.user);
      // console.log(prams.user);
    }
  
    setAuth(obj);
  }
 
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Authentic users={users} auth={checkAuth}/>}/>
        <Route path="/manager" element={<Users users={users} adduser={addUser} userHandler={userHandler} removeUser={removeUser} isLogin={auth.managerAuth} userTask={userTask[user]} addTask={addTask} />} />
        <Route path="/user" element={<Individual isLogin={auth.userAuth} userTask={userTask[user]}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
