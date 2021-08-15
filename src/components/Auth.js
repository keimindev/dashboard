import React, {useState} from 'react';
import { authService } from "../firebase";


function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [newAccount, setNewAccount] = useState(true);



    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
          setEmail(value)
        }else if(name === "password"){
          setPassword(value);
        };
      };

      const onSubmit = async (event) => {
        event.preventDefault();
        try{  
        let data;
          if(newAccount){
            data =await authService.createUserWithEmailAndPassword(email, password)
          }else {
            data = await authService.signInWithEmailAndPassword(email,password)

          }
        } catch(error){
          setError(error.message)
        }
          
    };
     

     const toggleAccount = () =>  setNewAccount(prev => !prev)
        
    return (
        <>

<div className="contain">
        <form className="login-form" onSubmit={onSubmit}>
            <h5>Username</h5>
            <input 
            type="email"
            name="email"
            placeholder="123@example.com"
            required value={email}
            className="login-form--input" 
            onChange = {onChange}
            />
         
            <h5>Password</h5>
            <input 
            type="password" 
            name="password"
            placeholder="Put Your Password"
            required value={password}
            className="login-form--input"
            onChange ={onChange}
            />
            <div>
            <input type="submit"
             className="authInput authSubmit"
             value={newAccount ? "Create Account" : "Sign In"} />
            </div>
            <p className="error-msg">{error}</p>
             {newAccount ? (
               <>
               <div className="authSwitch">Have you account? <span onClick={toggleAccount}>Sign In</span></div>
               </>
               ) : (
                <>
                <div className="authSwitch">Don't you have account?  <span onClick={toggleAccount}>Create Account</span></div>
                </>
               )}
        </form>
        </div>  
        </>
    )
}

export default Auth
