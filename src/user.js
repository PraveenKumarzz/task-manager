import React,{useState} from 'react'
import './App.css';

function User(props) {
  const[inp,setInp] = useState("");
  const[flag,setFlag] = useState(true);

  const userTask = props.userTask.task.map((el,ind)=>{
    return <li key={ind}><input type="checkBox"/> {el}</li>
});
const changehandler = (event)=>{
    setInp(event.target.value);
}
const toggleHandler = ()=>{
    setFlag(!flag);
};
const add = (event)=>{
    event.preventDefault();
    props.addTask({user:props.userTask.user,task:inp});
    setInp("");
    setFlag(!flag);
}
  return (
    <div className="App">
        <h1>{props.userTask.user}</h1>
        <ul>
            {userTask}
        </ul>
        
        {flag ? <button className="btn" type="button" onClick={toggleHandler}>Add task</button>
        :<div><input type="text" value={inp} onChange={changehandler}/>
        <button className="btn" type="button" onClick={add}>Add</button></div>}
    </div>
  )
}

export default User;