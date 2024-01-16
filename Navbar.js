import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
// import { useEffect, useState, useContext } from 'react';
// import CounterContext from './Tasks/CounterContext';



function Navbar()
 
{
  // const {counter} = useContext(CounterContext);
  // const {uname} = useContext(CounterContext)
    return (
        <>
        <header id="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Clothes Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/Header">Home</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/data1">FormData</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/data2">GetData</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Register">SignUp</a>
      </li>
      
    </ul>
            </div> 

</nav>
</header>
        </>
    );
}
export default Navbar;