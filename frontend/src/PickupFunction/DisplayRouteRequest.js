import React, {useState,useEffect} from "react";
import axios from 'axios';
import AddpicupReq from './AddpickupReq.css'


export default function DisplayRouteRequest() {
  

    const[routes,setRoute] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/routeReq/allRoute").then((res)=>{
                  setRoute(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,PackSize, vehicleType,destination,distance,deliveryTown,arrivalTime,date} = data;

        localStorage.setItem('rid', _id);
        localStorage.setItem('PackSize', PackSize);
        localStorage.setItem('vehicleType', vehicleType);
        localStorage.setItem('destination', destination);
        localStorage.setItem('distance', distance);
        localStorage.setItem('deliveryTown', deliveryTown);
        localStorage.setItem('arrivalTime', arrivalTime);
        localStorage.setItem('date', date);

        

}



    return (
        <div className = "container " style={{width:"100%"}}>

                 <div className="addform2"><h1>All Routes for Request </h1></div>
      
        <table className="table" >
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">PackSize</th>
                    <th scope="col">VehicleType</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Distance</th>
                    <th scope="col">DeliveryTown</th>
                    <th scope="col">Arrival Time</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                 
          </thead>
         <tbody>
             {routes.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.PackSize}</td>
                       <td>{data.vehicleType}</td>
                       <td style={{width:'250px'}}>{data.destination}</td>
                       <td>{data.distance}</td>
                       <td>{data.deliveryTown}</td>
                       <td>{data.arrivalTime}</td>
                       <td>{data.date}</td>
                      

                       <td>
  
                         <a className="btn btn-warning" href="/editReq/route"  onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Edit
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" href="/deeleteRe/route" onClick={() => setData(data)}>
                            <i className= "fas fa-trash-alt"></i>&nbsp;Delete
                         </a>
  
                       </td>
  
                    </tr>
                  
  
             ))}
             
           
           </tbody> 
  
        </table>

      <button className ="btn btn-success"><a href="/req" style={{textDecoration:'none', color :'white'}}>Back </a> </button>
     </div>
    )
}
