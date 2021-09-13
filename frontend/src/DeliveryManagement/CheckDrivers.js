import React, {useState,useEffect} from "react";
import axios from 'axios';



export default function CheckDrivers() {
    
    
    const[request,setRequest] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/routeReq/allRouteReq").then((res)=>{
                setRequest(res.data.existingReqRouter);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])


    const setData = (data) => {
        let {_id,deliveryTown,vehicleType} = data;

        localStorage.setItem('tripId',_id);
        localStorage.setItem('deliveryTown', deliveryTown);
        localStorage.setItem('vehicleType', vehicleType);

        console.log(data);
        

}

    return (
        <div>
            
            <h1><b> <center> All Delivery Orders</center> </b> </h1>

            <div className = "container">
            
            <table className="table">

                <thead>
                        <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Trip Id</th>
                        <th scope="col">Nearby Town</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Delivery Status</th>
                        </tr>

                </thead>
            <tbody>
              {request.map((data,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            
                            <td> {data._id} </td>
                            <td> {data.deliveryTown} </td>
                            <td> {data.vehicleType} </td>
                            <td>Not Assigned</td>
                            <td>
                            <a className="btn btn-warning" 
                            onClick={() => setData(data)}
                            href={`/driver/allProf`}
                            style={{textDecoration:'none'}}>
                            <i></i>&nbsp;Check Available Drivers
                            </a>
                            </td>

                        </tr>
                        

                ))}
                
                
                </tbody> 

            </table>

</div>
            
        </div>
    )
}
