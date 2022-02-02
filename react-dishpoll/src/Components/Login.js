import React, {useState} from 'react';
import "../Css/login.css";

export const Login = ({login}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(e) =>{
    e.preventDefault();

   login(email,password); //call to the login function
}

  return( 
 <div className="login" > 
    <form className="form" onSubmit={handleSubmit}>
      <div className="formFields">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' className='email' autoComplete='off'/>
        </div>
        <div className="formFields">
        <label htmlFor="password">Password</label>
        <input type="password"  name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='pwd' autoComplete='off'/>
      </div>
      <button type="submit" name="submit" className=" btn btn-primary">Submit</button>
    </form>
 </div>
  )    
};
