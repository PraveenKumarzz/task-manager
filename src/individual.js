import './App.css';
import {useNavigate} from "react-router-dom";

function Individual(props) {

  const navigate = useNavigate();
  const userTask = props.userTask.task.map((el,ind)=>{
    return <li key={ind}><input type="checkBox"/> {el}</li>
});

const GoLogin =(event)=>{
    event.preventDefault();
    navigate("/");
 }

  return (
    <div className="App">
        {props.isLogin ? <div>
            <h1>{props.userTask.user}</h1>
        <ul>
            {userTask}
        </ul></div>:
        <div>
        <h2>User section</h2>
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

export default Individual;