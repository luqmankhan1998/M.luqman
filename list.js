import React,{ useEffect, useState} from 'react';

const ItemList = () => {
  const [origionalData ,setOrigionalData] = useState([])
  const [items, setItems] = useState([]);
   const [colorpic ,setColor] = useState('')
   const [colorChange ,setColorChange] = useState('')

useEffect(()=>{
   fetch('http://localhost:3000/list')
   .then (res=>res.json())
   .then (data=>{setItems(data)
    setOrigionalData(data)})
},[]);
  
  const colorit=(argu)=>{
    const getColor=argu.target.value;
    setColor(getColor)
    if(getColor=== 'All'){
      setItems(origionalData)
    }else{
      const getValue = origionalData.filter(x=> x.brand === getColor)
      setItems(getValue)
    }
   
   }
  const ChangeColor = (argu) =>{
    const getColor = argu.target.value;
        setColorChange(getColor)
    if(getColor ==='All'){
      setItems(origionalData)
    }else{
       const getValue = origionalData.filter(x=>x.color === getColor)
       setItems(getValue)
    }
  }
  
  
  return (
    
    <>
        
    
      <div className='sidebar'>
        <div className='sidebarmenu'>
          <select value={colorpic} onChange={colorit}>
            <option value='All'>All Brand</option>
            <option value='Zellbury'>Zellbury</option>
            <option value='Alkaram Studio'>Alkaram Studio</option>
            <option value='Bareeze'>Bareeze</option>
            <option value='Daraz.pk'>Daraz.pk</option>
            <option value='Gul Ahmad'>Gul Ahmad</option>
          </select>
          <select value={colorChange} onChange={ChangeColor}>
          <option value='All'>All Color</option>
            <option value='Red'>Red</option>
            <option value='White'>White</option>
            <option value='Blue'>Blue</option>
          </select>
        </div>
      </div>
     
      <div className='main'>
        {items.map((el) => (
          <div className='card'>
            <img src={el.pic} alt='' />
            <h2>{el.title}</h2>
            <h3>{el.price}</h3>
            <p>{el.brand}</p>
            <p>{el.type}</p>
            <p>{el.color}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemList;
