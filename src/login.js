import React from 'react'

function login(props) {
  return (
    <div className="container border border-info rounded-2 sdiv">
        <h1><b>Login</b></h1>
        <p style={{color:props.messageType?"red":"green"}}>{props.message}</p>
        <form onSubmit={props.login}>
    
            <br/><hr/>
            <div className="m3-6">
                Login as :{" "}
                <select name="logType">
                  <option>User</option>
                  <option>Manager</option>
                </select>
            </div>
            <div className="m3-6">
                user-id :{" "}
                <input type="text" name="userId"/>
            </div>
            <div className="my-3">
                Password :{" "}
                <input type="password" name="password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-3"> Login</button>
            <br/>
            <p className="mt-3"><a href="#" onClick={props.switch}>Create </a> an account</p>
        </form>
    </div>
  )
}
export default login;
