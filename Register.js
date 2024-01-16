import React, { useState, useEffect} from "react";
import Axios from 'axios';
const Register = ()=>
{
  const [first,setFirst] = useState("")
  const [last,setLast] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [contact,setContact] = useState("")
  const [dob,setDob] = useState("")
  const [image,setImage] = useState([])

  const [items, setItems] = useState([]);
//   useEffect(()=>{
//     fetch('http://localhost:3000/adduser')
//     .then (res=>res.json())
//     .then (data=>setItems(data))

//  },[]);

 const addrecord = (e) =>{
  e.preventDefault();
  // const mydata ={f:first,l:last,e:email,p:password,c:contact,d:dob} 
  // console.log(mydata)
      console.log(first);
      console.log(last);
      console.log(email);
      console.log(password);
      console.log(contact);
      console.log(dob);
      console.log(image);
      //console.log(description)
  
  const formData = new FormData();
  formData.append("f", first);
  formData.append("l", last);
  formData.append("e", email);
  formData.append("p", password);
  formData.append("c", contact);
  formData.append("d", dob);
  formData.append("i", image[0]);
  //.append("de",description);
  Axios.post("http://localhost:3000/adduser",formData, {
      headers:{'Content-Type':'multipart/form-data'},
      method: "POST",
      body: formData,
    })
    .then(response => {console.log(response.data)})
        .catch(err => {console.log(err)});
  }
  return (
    <div className='RegisterForm'>
          <div className='formfild'>
            <div className='FirstName'>
              <input
                type="text"
                placeholder='Enter First Name'
              onChange={(e)=>setFirst(e.target.value)}/>
            </div>
            <div className='LastName'>
              <input
                type="text"
                placeholder='Enter Last Name'
              
                onChange={(e)=>setLast(e.target.value)}/>
            </div>
            <div className='Email'>
              <input
                type="email"
                placeholder='Enter Email Address'
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className='Password'>
              <input
                type="password"
                placeholder='Enter Password' 
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className='contact'>
              <input
                type="number"
                placeholder='Enter Contact No'
                onChange={(e)=>setContact(e.target.value)}
              />
            </div>
            <div className='Dob'>
              <input
                type="Date"
                placeholder=''
                onChange={(e)=>setDob(e.target.value)}
              />
            </div>
            <div className="file">
            <input
                type="file"
                placeholder=''
                onChange={(e)=>setImage(e.target.files)}
              />
            </div>
            {/* <div className="Description">
            <input
                type="description"
                placeholder=''
                onChange={(e)=>setDescription(e.target.Description)}
              />
            </div> */}
            <div>
              <button onClick={addrecord}>SignUp</button><br/>
              <a href="/Header">Back</a>
            </div>
          </div>
          </div>
         
      
  );

  }

export default Register;