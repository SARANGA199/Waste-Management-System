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
      
          <h4>You Don't have Delivery Records Yet... </h4>
     </div>
    )
}
