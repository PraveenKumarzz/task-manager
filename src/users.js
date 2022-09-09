import React,{useState} from 'react'
import './App.css';
import {useNavigate} from "react-router-dom";
import User from './user';

function Users(props) {
  const[inp,setInp] = useState("");
  const[flag,setFlag] = useState(true);
  
  const navigate = useNavigate();

  const userList = props.users.map((el,ind)=>{
    return <li key={ind}>
        <button type="button" value={el} onClick={props.userHandler}>{el}</button>
        <button type="button" value={el} onClick={props.removeUser}>Remove user</button>
        </li>
    });  
  const changehandler = (event)=>{
      setInp(event.target.value);
  };
  const add = (event)=>{
    event.preventDefault();
    props.adduser(inp);
    setInp("");
    setFlag(!flag);
  };
  const toggleHandler = (event)=>{
    setFlag(!flag);
  }
 const GoLogin =(event)=>{
    event.preventDefault();
    navigate("/");
 }
  return (
    <div className="App">
      {props.isLogin ?
      <div>
        <ul>
            {userList}
        </ul>
        {flag ? <button className="btn" type="button" onClick={toggleHandler}>Add new User</button>
        :<div><input type="text" value={inp} onChange={changehandler}/>
        <button className="btn" type="button" onClick={add}>Add</button></div>}
        <User userTask={props.userTask} addTask={props.addTask}/>
        </div>:
        <div>
          <h2>Manager section</h2>
        <h4>Please first go for login and login as manager</h4>
        <h6>I am providing few login details</h6>
        <p>Manager :[<br/>
            user = admin1,<br/>
            pass = 1234<br/>
        ],<br/>
            users: [<br/>
                user : user1,<br/>
                pass : user1@1234,<br/>

                user : user2,<br/>
                pass : user2@1234,<br/>

                user : user3,<br/>
                pass : user3@1234,<br/>

                user : user4,<br/>
                pass : user4@1234,<br/>
            ]<br/>
        </p>
        <p>please ignore create account section.</p>
        <p>go directly for login</p>
        <button className="btn" type="button" onClick={GoLogin}>Go for Login</button>
        </div>}
    </div>
  )
}

export default Users;