import React, {useState} from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Signup(props) {
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[mobile,setmobile]=useState("")
    const[password,setpassword]=useState("")
    const[conf,setconf]=useState("")
    const navigate=useNavigate();
    const submit=()=>{
        if(name.length===0){
            alert("Please enter Name")
        }else if(email.length===0){
            alert("Please enter Email")
        }else if(mobile.length===0){
            alert("Please enter Mobile Number")
        }else if(password.length===0){
            alert("Please enter Password")
        }else if(conf.length===0){
            alert("Please enter Confirm Password")
        }else if(password!==conf){
            alert("Password not matching")
        }else{
            Axios.post('http://127.0.0.1:8000/post', {
                name:name,
                email:email,
                password:password,
                mobile:mobile,
            })
            .then(function(response){
                // alert(response.data['message'])
                if(response.data === "Username Created Successfully"){
                    setname('')
                    setemail('')
                    setpassword('')
                    setmobile('')
                    alert(response.data)
                    navigate("/Login")
                } else if(response.data === "Username not created"){
                    alert(response.data)
                }
            })
            .catch(function(error) {
                console.log(error, 'error');
            });
        }
    }

    return (
        <div>
                <div className="col-4">
                    <form>
                        <label>NAME:</label>
                        <input type="text" name={name} id={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" placeholder="ENTER YOUR NAME"/></form><br/>
                    <label>EMAIL:</label>
                    <input type="email" name={email} id={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" placeholder="ENTER YOUR EMAIL"/><br/>
                    <label>MOBILE:</label>
                    <input type="number" name={mobile} id={mobile} onChange={(e)=>{setmobile(e.target.value)}} className="form-control" placeholder="ENTER YOUR MOBILE NO"/><br/>
                    <label>PASSWORD:</label>
                    <input type="password" name={password} id={password} onChange={(e)=>{setpassword(e.target.value)}} className="form-control" placeholder="ENTER YOUR PASSWORD"/><br/>
                    <lablel>CONFIRM PASSWORD:</lablel>
                    <input type="password" name={password} id={password} onChange={(e)=>{setconf(e.target.value)}} className="form-control" placeholder="CONFIRM YOUR PASSWORD"/><br/>
                    <button onClick={submit} className="btn btn-success">SUBMIT</button> <Link className="btn btn-outline-success" to="/Login">LOGIN PAGE</Link>
                    <form/>
                </div>
        </div>
    );
}

export default Signup;