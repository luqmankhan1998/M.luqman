import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import Axios from 'axios';

export default function FormData() 
{
  const {id} = useParams();
  const shifter = useNavigate();
  console.log(id);
  useEffect(()=>{

  })

    const [first,setFirst] = useState("")
    const [last,setLast] = useState("")
    const [email,setEmail] = useState("")
    const [oldimage,setOldImage] = useState("");
    const [image,setImage] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:3000/getone/"+id)
      .then(res=>{
          setFirst(res.data[0].first)
          setLast(res.data[0].last)
          setEmail(res.data[0].email)
          setOldImage(res.data[0].image)
      })
      .catch(err=> console.log(err));
  },[]);
    
    const toggle = (e) =>{

        e.preventDefault();
           console.log(first);
           console.log(last);
           console.log(email);

           console.log("Update is Working");

        const formData = new FormData();
        

        if(image[0]===undefined)
        {
            console.log("Image Not Found");

            formData.append("f",first);
            formData.append("l",last);
            formData.append("e",email);

            formData.append("token","false");
        }
        else
        {
            console.log("Image found");

            formData.append("f", first);
            formData.append("l",last);
            formData.append("e",email);
            formData.append("i",image[0]);

            formData.append("token","true");
        }
        //console.log(data.get("first"));

        axios.put("http://localhost:3000/update/"+id,formData)
        .then(res=> {
            if(res.data.status)
                shifter("/data2");
            else
                console.log("Not Done");
        });
        //.then(console.log("record has been send"));
    }



          //  const formData = {f:first, l:last, e:email}
          // const formData = new FormData();
          // formData.append("f", first);
          // formData.append("l", last);
          // formData.append("e", email);
          // formData.append("i", image[0]);

        // fetch("http://localhost:3000/dataInput",{
        //     method: "POST",
        //     headers:{'Content-Type':'application/json'},
        //     body: JSON.stringify(formData),
        //   })
        //   .then(response => {console.log(response.data)})
        //       .catch(err => {console.log(err)});
        // }
        
  //       Axios.post("http://localhost:3000/dataInput",formData, {
  //       headers:{'Content-Type':'multipart/form-data'},
  //       method: "POST",
  //       body: formData,
  //   })
  //   .then(response => {console.log(response.data)})
  //       .catch(err => {console.log(err)});
  // }

  return (
        <div className='RegisterForm'>
        <div className="formfild">
             <div className="FirstName">
                  <input type='text' placeholder='Enter FirstName'  onChange={(e)=>setFirst(e.target.value)}/>
             </div>
             <div className="LastName">
                  <input type='text' placeholder='Enter LastName'  onChange={(e)=>setLast(e.target.value)}/>
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
              <img style={{"height":"80px","width":"100px"}} src={"/images/"+oldimage} />
            </div> 
           <button onClick={toggle}>Add Record</button> 
     </div>
   </div>

  )
}
