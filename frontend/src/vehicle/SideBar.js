import React, { Component,useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function SideBar() {
  const {user} = useContext(AuthContext);
  

        return (
           
            
  <div className="wrapper " style ={{zIndex: 5}}>
    <input type="checkbox" id="btn" hidden />
    <label htmlFor="btn" className="menu-btn" style={{marginLeft:'-15vh'}}>
      <i className="fas fa-bars" />
      <i className="fas fa-times" />
    </label>
    <nav id="sidebar">
      
      <ul className="list-items mt-5">
        <li><a href="/"><i className="fas fa-home" />Home</a></li>
      
        {
                user.role === "admin" ? 


        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" style={{marginTop:"10%" , marginLeft:"10%" , width:"80%"}} type="button" 
   id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
   Pickup Manager
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
  
    <li><a  href={"/req"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diplay Request </a> </li>
    <li><a  href={"/order"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diplay Orders </a> </li>
    <li><a  href={"/routeReq"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Request Routes </a> </li>
    <li><a  href={"/routeOrder"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Orders Routes </a> </li>
    <li><a  href={"/collect/dis"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Received Items </a> </li>
                
  </ul>
</div>  : null}


                {user.role === "admin" ? 
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" style={{marginTop:"10%" , marginLeft:"10%" , width:"80%"}} type="button" 
   id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Delivery Manager
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <li><a  href={"/routeReq/allRouteReq"} style={{width:"122%",marginTop:"-4%", marginBottom:"-4%",marginLeft:"-20.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Delivery Orders </a> </li> 
  </ul>
</div>:null}



{user.role === "admin" ? 
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" style={{marginTop:"10%" , marginLeft:"10%" , width:"80%"}} type="button" 
   id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    RecycleFacility Manager
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <li><a  href={"/itemdisp"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item List </a> </li>
  <li><a  href={"/discompanies"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Company List </a> </li>
  <li><a  href={"/addcompanyitems"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Item Capacity </a> </li>
  <li><a  href={"/disitemscapacity"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Item Capacity </a> </li>
  </ul>
</div>:null}

{user.role === "admin" ? 
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" style={{marginTop:"10%" , marginLeft:"10%" , width:"80%"}} type="button" 
   id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Vehicle Manager
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <li><a  href={"/addvehicle"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Vehicles </a> </li>
  <li><a  href={"/all"} style={{width:"124.7%", marginLeft:"-24.8%"}} className="btn-secondary "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vehicle Details </a> </li>
  </ul>
</div>:null}



{user.role === "admin" ? 
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" style={{marginTop:"10%" , marginLeft:"10%" , width:"80%"}} type="button" 
   id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Payment Management
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>:null}




{user.role === "admin" ? 
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" style={{marginTop:"10%" , marginLeft:"10%" , width:"80%"}} type="button" 
   id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
   Staff Management
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>:null}



















        
      </ul>
  
    </nav>
  </div>
 

        
        )
    }
  
export default SideBar;