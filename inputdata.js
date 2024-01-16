import React, { useState } from 'react';
import axios from 'axios';
 function inputData(){
    const [first,setFirst] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
      const doit=()=>{
    const data = {"f": first, "e": email, "p": password}
      axios.post("http://localhost:3000/inputdata",{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body:JSON.stringify(data),
      })
      .then (response =>{console.log(response.data)})
      .catch (err =>{console.log(err)})
      }
    return(
        <div className='Registration Form'>
            <div className='formfild'>
                   <div className='FirstName'>
                     <input 
                     type='text' 
                     placeholder='Enter First Name'
                     onChange={(e)=>setFirst(e.target.value)}/>
                   </div>
                   <div className='Email'>
                     <input 
                     type='email' 
                     placeholder='Enter Email Address'
                     onChange={(e)=>setEmail(e.target.value)}/>
                   </div>
                   <div className='Password'>
                     <input 
                     type='password' 
                     placeholder='Enter password'
                     onChange={(e)=>setPassword(e.target.value)}/>
                   </div>
                     <div>
                     <button className='addrecord' onClick={doit}>Add Record</button>
                     </div>
            </div>
        </div>
    )
}
export default inputData;