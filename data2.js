
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Dynamic() {
  const [info, setInfo] = useState([]);
  
  
  useEffect(() => {
    // fetch('http://localhost:3000/dynamic')
    axios.get('http://localhost:3000/dynamic')
      //  .then((response) => response.json())
      .then(response => setInfo(response.data));
      //  .then((data) => setInfo(data));

      
  }, []);
  
  const remit = (i) => {
    axios.delete("http://localhost:3000/delstd/"+i)
    .then(console.log("Record has been Deleted"));

  // console.log(id);
  
    const update = info.filter(item=> item.id!==i);
    setInfo(update) 

  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>STD ID</th>
            <th>STD F/NAME</th>
            <th>STD L/NAME</th>
            <th>STD EMAIL</th>
            <th>STD IMAGE</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>

        <tbody>
          {info.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              {/* <td><img style={{height: "100px",width:"100px"}} src={"images/"+item.image}/></td> */}
              <td><img style={{"height":"80px","width":"100px"}} src={"/images/"+item.image} /></td><td>{item.id}</td>
              <td>
                {/* <button onClick={() => remit(index)}>Remove</button> */}
                <button onClick={()=>{remit(item.id)}}>Delete</button>
              </td>
              <td><a href={"/data3/"+item.id}>Update</a></td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th colSpan="2">Total Records:</th>
            <th>{info.length}</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

