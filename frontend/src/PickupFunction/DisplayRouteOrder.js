import React, {useState,useEffect} from "react";
import axios from 'axios';
import AddpicupReq from './AddpickupReq.css'


export default function DisplayRouterOrder() {
  

    const[OrderRoute,setOrderRoute] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/routeOrder/routeOrders").then((res)=>{
                  setOrderRoute(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,orderType,routeDescription,quantity, vehicleType,destination,distance,arrivalTime,date} = data;

        localStorage.setItem('orderId', _id);
        localStorage.setItem('orderType', orderType);
        localStorage.setItem('routeDescription', routeDescription);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem('vehicleType', vehicleType);
        localStorage.setItem('destination', destination);
        localStorage.setItem('distance', distance);
        localStorage.setItem('arrivalTime', arrivalTime);
        localStorage.setItem('date', date);

        

}



    return (
        <div className = "container " style={{width:"100%"}}>

<div className="addform2"><h1>All Routes for Orders </h1></div>
      
        <table className="table" >
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col">Order Type</th>
                    <th scope="col">VehicleType</th>
                    <th scope="col">Delivery Address</th>
                    <th scope="col">Distance</th>  
                    <th scope="col">Arrival Time</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                 
          </thead>
         <tbody>
             {OrderRoute.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.quantity}</td>
                       <td>{data.routeDescription}</td>
                       <td>{data.orderType}</td>
                       <td>{data.vehicleType}</td>
                       <td style={{width:'250px'}}>{data.destination}</td>
                       <td>{data.distance}</td>
                       <td>{data.arrivalTime}</td>
                       <td>{data.date}</td>
                      

                       <td>
  
                         <a className="btn btn-warning" href="/editOrder/route"  onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Edit
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" href="/deleteOrder/route" onClick={() => setData(data)}>
                            <i className= "fas fa-trash-alt"></i>&nbsp;Delete
                         </a>
  
                       </td>
  
                    </tr>
                  
  
             ))}
             
           
           </tbody> 
  
        </table>

        <button className ="btn btn-success"><a href="/order" style={{textDecoration:'none', color :'white'}}>Back </a> </button>
     </div>
    )
}
