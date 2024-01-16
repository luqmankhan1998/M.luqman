import React,{ useEffect, useState} from 'react';
import ItemList from "./list";


 const Header = () =>{
  const [items, setItems] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/header")
    .then(response=>response.json())
    .then(data=>setItems(data));
  },[]);
    return(
      
          <>
          
            <ItemList/>
            
          </>
    )
 }
 export default Header;