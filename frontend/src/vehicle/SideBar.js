import React, { Component } from 'react';



function SideBar() {
   
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
        <li><a href="/addvehicle"><i className="fas fa-truck" />Add Vehicle</a></li>
        <li><a href="/all"><i className="fas fa-file-alt" />Vehicle Details</a></li>
        <li><a href="/addrepair"><i className="fa fa-check-square-o" />Report</a></li>
        <li><a href="/profile/:id"><i className="fas fa-user-circle" />My Profile</a></li>
        <li><a href="#"><i className="fa fa-sign-out" />Log Out</a></li>

        
      </ul>
    </nav>
  </div>
 

        
        )
    }
  
export default SideBar;