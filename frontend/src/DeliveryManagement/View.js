import React, {useState,useEffect} from "react";
import axios from 'axios';


export default function View() {
  

   const[stats,setStats] = useState([]);
  
    useEffect(()=>{
            
        axios.get(`http://localhost:8070/delivery/display`).then((res)=>{
                  setStats(res.data);
            
                }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,tripId, vehicleNo,deliveryLocation,date} = data;

        localStorage.setItem('did', _id);
        localStorage.setItem('tripId', tripId);
        localStorage.setItem('vehicleNo', vehicleNo);
        localStorage.setItem('deliveryLocation', deliveryLocation);
        localStorage.setItem('date', date);
       
}



    return (
        <div className = "container" style={{marginTop:"3%"}} >
      
        <table className="table" >
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Trip Id</th>
                    <th scope="col">Vehicle Number</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                   
                  </tr>
                 
          </thead>
         <tbody>
             {stats.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.tripId}</td>
                       <td>{data.vehicleNo}</td>
                       <td>{data.deliveryLocation}</td>
                       <td>{data.date}</td>
                       
                    </tr>
                  
  
             ))}
             
           
           </tbody> 
  
        </table>
     </div>
    )
}
