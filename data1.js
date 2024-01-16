import React,{ useState } from "react";
import axios from 'axios';


export default function DataInput()
{

    const [first,setFirst] = useState("");
    const [last,setLast] = useState("");
    const [email,setEmail] = useState("");
    const [image,setImage] = useState([])


    //const [items, setItems] = useState([]);

    // useEffect(()=>{
    //         fetch('http://localhost:3000/InputData')
    //         .then (res=>res.json())
    //         .then (data=>setItems(data))
        
    //      },[]);
        

    const toggle = (e) => {
        e.preventDefault();
        console.log(first);
        console.log(email);
       //const formData = {"f": first, "l": last, "e": email}
        const formData = new FormData();
  
  formData.append("f", first);
  formData.append("l", last);
  formData.append("e", email);
  formData.append("i", image[0]);

 
      axios.post("http://localhost:3000/InputData",formData,
      {
       headers:{"Content-Type":"multipart/form-data"},
       method: "POST",
       body:formData,
     })
      .then(response => {console.log(response.data)})
      .catch(err => {console.log(err)});
    }
       
  
        return(

                <div className='RegisterForm'>
                <div className="formfild">
                     <div className="FirstName">
                          <input type='text' placeholder='Enter FirstName' onChange={(e)=>setFirst(e.target.value)}/>
                     </div>
                     <div className="LastName">
                          <input type='text' placeholder='Enter LastName' onChange={(e)=>setLast(e.target.value)}/>
                     </div>
                    <div className='Email'>
                        <input type='Email' placeholder='Enter Email Address' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="file">
            <input
                type="file"
                placeholder=''
                onChange={(e)=>setImage(e.target.files)}
              />
              </div>
               <button onClick={toggle}>Add Record</button> 
         </div>
       </div>
    );
  }