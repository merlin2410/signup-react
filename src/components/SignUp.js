import React from "react";
import { useState } from "react";


const SignUp = ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [borderEmail, setBorderEmail] = useState("red");
    const [borderPassword, setBorderPassword] = useState("red");
    const [borderConfirmPassword,setBorderConfirmPassword] = useState("red");
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isConfirmPassword,setIsConfirmPassword] = useState(false);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    function validateEmail(e){
        
        setEmail(e.target.value);
        
        console.log(emailRegex.test(email));

        //Check whether valid email
        if(emailRegex.test(email)){
            setIsEmail(true);
            setBorderEmail("green");
        }
        else{
            setIsEmail(false);
            setBorderEmail("red");
        }
    }

    function validatePassword(e){

        setPassword(e.target.value);
        

        //Check whether valid password
        if(passwordRegex.test(password)){
            setIsPassword(true);
            setBorderPassword("green");
        }
        else{
            setIsPassword(false);
            setBorderPassword("red");
        }
    }

    function validateConfirmPassword(e){

        setConfirmPassword(e.target.value);
        
        console.log("Inside",password,confirmPassword)
        console.log(password===confirmPassword);
        //Check whether password and confirm password equal
        if(password===confirmPassword){
            setIsConfirmPassword(true);
            setBorderConfirmPassword("green");
        }
        else{
            setIsConfirmPassword(false);
            setBorderConfirmPassword("red");
        }
    }

    function handleClick(e){
        if(isPassword && isConfirmPassword && isEmail){
            alert("Account created Successfully")
        }
        else{
            alert("Signup Unsuccessful!")
        }
    }

   


    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    

    return (
        <div className="SignUp">
            <h5>Email:</h5>
            <input className={borderEmail} type="email" placeholder="Enter email" onChange={validateEmail}/>
            {
                !isEmail&&(
                    <p color="red">Enter correct email!</p>
                )
            }
            <h5>Password:</h5>
            <input className={borderPassword} type="password" placeholder="Enter password" onChange={validatePassword}/>
            {
                !isPassword&&(
                    <p color="red">Enter correct password!</p>
                )
            }
            <h5>Confirm Password:</h5>
            <input className={borderConfirmPassword} type="password" placeholder="Confirm Password" onChange={validateConfirmPassword}/>
            {
                !isConfirmPassword&&(
                    <p color="red">Password doesnot Match!</p>
                )
            }
            <button onClick={handleClick}>Signup</button>

        </div>
    )
}

export default SignUp;