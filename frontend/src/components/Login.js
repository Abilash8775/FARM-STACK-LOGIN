import React, {useState} from 'react';
import Axios from "axios";
import {Link, useNavigate} from "react-router-dom";
function Login(props) {
    const[name,setname]=useState("");
    const[password,setpassword]=useState("");
    const navigate=useNavigate();
    const login=()=>{
        if(name.length===0){
            alert("Please enter UserName")
        } else if(password.length===0){
            alert("Please enter Password")
        }else{
            Axios.post("http://127.0.0.1:8000/login",{
                name:name,
                password:password
            })
                .then((response)=>{
                    if(response.data==="LOGIN SUCCESSFUL"){
                        console.log("good")
                        navigate("/Ls")
                    }else if(response.data==="User Not Found/Invalid credentials"){
                        console.log("bad")
                        navigate("/Lf")
                    }
                })
                .catch((error)=>{
                    alert("error", error)
                })
        }
    }
    return (
        <div>
            <h1>LOGINPAGE</h1>
            <div className="col-4">
                <form>
                    <label>USERNAME:</label>
                    <input type='text' onChange={(e)=>{setname(e.target.value)}} className="form-control"/><br/>
                    <label>PASSWORD:</label>
                    <input type='password' onChange={(e)=>{setpassword(e.target.value)}} className="form-control"/><br/>
                    <button onClick={login} className="btn btn-success">SUBMIT</button>  <Link className="btn btn-outline-success" to="/Signup">NEW USER SIGNUP</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;