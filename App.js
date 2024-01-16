//import logo fro  m './logo.svg';
import './App.css';
  import Register from './Register';
  import Login from './Login';
   import Header from './Header';
  import ItemList from './list';

  import Navbar from './Navbar';

import DataInput from './data1';
import Dynamic from './data2';
//import FormData from './data3';
//import {BrowserRouter as Link, Router, Route, Routes, Navigate} from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
     
       
      <Router>
        <Navbar/>
      <Routes>

       <Route path='/register' element={<Register />} />
        <Route path='/logIn' element  = {<Login />} />
        <Route path='/header' element={<Header />} /> 
        <Route path='/ItemList' element  = {<ItemList />} />
       <Route path='/data1' element = {<DataInput/>} />
       <Route path='/data2' element = {<Dynamic/>} />
       {/* <Route path='/data3/:id?' element = {<FormData/>} /> */}
       

        </Routes>
        </Router>
        
      
    </>
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
