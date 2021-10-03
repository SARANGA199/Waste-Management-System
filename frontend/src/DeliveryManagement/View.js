import React, {useState,useEffect,useContext} from "react";
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

export default function View() {
  
   const {user} = useContext(AuthContext);
   const[request,setRequest] = useState([]);
  
    useEffect(()=>{
            
        axios.get(`http://localhost:8070/delivery/display/${user._id}`).then((res)=>{
              setRequest(res.data);
            
                }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { dId,deliveryLocation,createdAt} = data;

        localStorage.setItem('dId', dId);
        localStorage.setItem('deliveryLocation', deliveryLocation);
        localStorage.setItem('createdAt', createdAt);
       
}



    return (
        <div className = "container" style={{marginTop:"3%"}} >
      
      <h1><b> <center> Your Stats </center> </b> </h1>
            
      <br/>
            <div className = "container">
            
          <form onSubmit={setData}>  <table className="table">

                <thead>
                        <tr>
                        <th scope="col">Number</th>
                        
                        <th scope="col">Delivery Location</th>
                        <th scope="col">Date</th>
                        
                       
                        </tr>

                </thead>
            <tbody>

              {request.map((data,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td> <b> {data.deliveryLocation} </b></td> 
                            <td><b> {data.createdAt} </b> </td> 
                           
                           

                        </tr>
                        

                ))}
                
                
                </tbody> 

            </table> 
            

           
                            <a className="btn btn-warning" 
                            type="submit"
                            style={{textDecoration:'none'}}>
                            <i></i>&nbsp;Get Report
                            </a>
                            
            </form>
     </div> </div>
    )
}
