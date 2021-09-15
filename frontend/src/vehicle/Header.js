import React from "react";
import {Link} from 'react-router-dom';


function Header()
{
    return(
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 pb-4 pt-4 " style={{marginRight:'-25.5vh',marginLeft:'-15.5vh'}}>
        <div className="container-fluid" id="nav">
   
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
       <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="nav justify-content-end ">
        <li className="nav-item">
        <a href="#" class=" text-white" ><i class=""></i>&nbsp;Home</a>
          &nbsp;
          &nbsp;
          &nbsp;
      
      </li >  <div className="align-right ">
        <li ><a href="#" class="text-white "><i class="fas fa-user text-white " ></i>&nbsp; 
        
        
        About us</a></li>
        &nbsp;
        &nbsp;
      
        <li ><a href="#" class="text-white "><i className="fas fa-envelope text-white" />&nbsp;Contact us</a></li> 
        </div>
      </ul> 
     
    </div>
  </div>
</nav>



    )
}

export default Header;