import React from 'react'

function Signup(props) {
  return (
    <div className="container border border-info rounded-2 sdiv">
        <h1><b>Create Account</b></h1>
        <p>Get start with your free account</p>
        <p style={{color:props.messageType?"red":"green"}}>{props.message}</p>

        <form onSubmit={props.rtr}>

            <br/><hr/>
            <div className="my-6">
                user-id :{" "}
                <input type="text" name = "userId"/>
            </div>
            <div className="my-3">
                Password :{" "}
                <input type="password" name="password"/>
            </div>
            <div className="my-3">
                Confirm Password :{" "}
                <input type="password" name="cnfPassword"/>
            </div>
            <button type="submit" className="btn btn-primary mt-3" > Sign up</button>
            <br/>
            <p className="mt-3">Have an account ? <a  onClick={props.switch}>Login</a></p>
        </form>

    </div>
  )
}
export default Signup;
