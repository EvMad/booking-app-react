import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {

    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput"></input>
                <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput"></input>
                <button className="lButton">Login</button>
            </div>
        </div>
    )
};

export default Login 