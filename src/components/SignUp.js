import React from "react";
import { useState } from "react";


const SignUp = ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");


    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    

    return (
        <div className="SignUp">
            <h5>Email:</h5>
            <input className="red" type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
            <h5>Password:</h5>
            <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
            <h5>Confirm Password:</h5>
            <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>

        </div>
    )
}

export default SignUp;