import './App.css';
import React, {useState } from "react";
import Signup from './signup';
import Login from "./login";
import {useNavigate} from "react-router-dom";



function Authentic(props){
  const navigate = useNavigate();
const[state,setState] = useState(
  {
    page: true, //1-signup 2-login
    msg: null,
    msgtype: 1,
    manager: "shivam",
    managerPass: "1234",
  }
);
  const pageSwitchHandler = (event) => {
    event.preventDefault();
    setState({manager: "shivam",managerPass: "1234", page: !state.page, msg: null });
  }

  const ragisterHandler = (event) => {
    event.preventDefault();
    // alert("submit");
    const user = event.target.userId.value;
    const pass = event.target.password.value;
    const cnfPass = event.target.cnfPassword.value;
    if (pass !== cnfPass) {
      setState({manager: "shivam",managerPass: "1234", msg: "Password misMatched" });
    }
    setState({ user: user, pass: pass });
    setState({ msg: "Registered Sucessfully", msgtype: 0 });
    event.target.userId.value = null;
    event.target.password.value = null;
    event.target.cnfPassword.value = null;
  }
  const loginHandler = (event) => {
    event.preventDefault();
    const user = event.target.userId.value;
    const pass = event.target.password.value;
    const type = event.target.logType.value;

    if (type === "Manager") {
      if (user === state.manager && pass === state.managerPass) {
        setState({ msg: "Login Sucessfully", msgtype: 0 });
        event.target.userId.value = null;
        event.target.password.value = null;
        props.auth({deg:"manager",status:true});

        setTimeout(()=>{
          navigate("/manager");
        },1000);

      } else {
        setState({manager: "shivam", managerPass: "1234", msg: "Invalid", msgtype: 1 });
      }
    } else {
      if(props.users.includes(user) && pass === user+"@1234"){
        setState({ msg: "Login Sucessfully", msgtype: 0 });
        event.target.userId.value = null;
        event.target.password.value = null;
        props.auth({deg:"user",status:true,user:user});
        
        setTimeout(()=>{
          navigate("/user");
        },1000);

      }else{
        setState({manager: "shivam",managerPass: "1234", msg: "Invalid", msgtype: 1 });
      }
    }
  }
  
    return (
      <div >
        {state.page ? <Signup switch={pageSwitchHandler} rtr={ragisterHandler} message={state.msg} messageType={state.msgtype} /> :
          <Login switch={pageSwitchHandler} login={loginHandler} message={state.msg} messageType={state.msgtype} />}
      </div>
    )

}

export default Authentic;
