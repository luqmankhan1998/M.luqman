import React, { useState,useEffect} from "react";
 const Login = ()=>
 {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/login')
    .then (res=>res.json())
    .then (data=>setItems(data))

 },[]);
   
  return (
    <div className='loginForm'>
      <div className='formfield'>
        <div className='UserName'>
          <input
            type="text"
            placeholder='Username'
          />
        </div>
        
        <div className='Password'>
          <input
            type="password"
            placeholder='Password'
          />
        </div>
        <button>Login</button><br/>
        <a href="/Header">Back</a>
      </div>
    </div>
  );
};

export default Login;
