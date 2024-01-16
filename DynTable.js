import { useEffect, useState } from 'react';

const DynTable=()=>

{
const [info,setInfo] = useState([]);

useEffect(()=>{
    fetch("http://localhost:3000/allusers")
    .then(response=>response.json())
    .then(data=>setInfo(data));
},[]);


// const remit = (i) => {
//     console.log(i);

//     setInfo((oldItems)=>{
//         return info.filter((items,index)=>{
//             return index != i;
//         })
//     })
// }

    return (
        <>
        
            <table>
                <thead>
                    <tr>
                        <th>STD ID</th><th>STD F/NAME</th><th>STD L/NAME</th><th>STD EMAIL</th><th>STD PASSWORD</th><th>STD DOB</th><th>STD CONTACT</th><th>STD IMAGE</th><th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((item)=>{
                        return(
                            <tr>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.dob}</td>
                                <td>{item.contact}</td>
                                <td><img style={{height: "100px",width:"100px"}} src={"images/"+item.image}/></td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="4">Total Records: </th><th>{info.length}</th>
                    </tr>
                </tfoot>
            </table>    
        </>
    );
}
export default DynTable;