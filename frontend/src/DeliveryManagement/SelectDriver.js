import React, {useState,useEffect} from "react";
import axios from 'axios';



export default function SelectDriver() {
    
    
    const[request,setRequest] = useState([]);
    const [tripId, settripId] = useState();
    const [deliveryTown, setdeliveryTown] = useState();
    const [vehicle, setvehicle] = useState();
    useEffect(()=>{
             settripId(localStorage.getItem('tripId'));
             setdeliveryTown(localStorage.getItem('deliveryTown'));
             setvehicle(localStorage.getItem('vehicleType'));
        

        axios.get("http://localhost:8070/driver/allprof").then((res)=>{
                setRequest(res.data.existingDRouter);
            }).catch((err)=>{
                alert(err.message);
             })
        
            

    },[])


    const setData = (data) => {
        let {_id,vehicleNo, nearbyTown,vehicleType} = data;

        localStorage.setItem('dId',_id);
        localStorage.setItem('vehicleNo', vehicleNo);
        localStorage.setItem('nearbyTown', nearbyTown);
        localStorage.setItem('vehicleType', vehicleType);

        //localStorage.setItem('deliveryTown', deliveryTown);
        console.log(data);
        
}

    return (
        <div>
            
            <h1><b> <center> Select A Driver </center> </b> </h1>
            
            <div style={{marginLeft:"3%"}}>
           <h3> <b> Delivery Town : {deliveryTown} </b></h3>
           <h3> <b> Vehicle Type : {vehicle} </b></h3> </div>
      <br/>
            <div className = "container">
            
          <form>  <table className="table">

                <thead>
                        <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Driver Id</th>
                        <th scope="col">Vehicle Number</th>
                        <th scope="col">Nearby Town</th>
                        <th scope="col">Vehicle Type</th>
                        </tr>

                </thead>
            <tbody>
              {request.map((data,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            
                            <td> {data._id} </td>
                            <td> {data.vehicleNo} </td>
                            <td> {data.nearbyTown} </td>
                            <td> {data.vehicleType} </td>
                            <td>
                            <a className="btn btn-warning" 
                            //onClick={() => setData(data)}
                            href={`http://localhost:3000/routeReq/allRouteReq`}
                            style={{textDecoration:'none'}}>
                            <i></i>&nbsp;Assign Driver
                            </a>
                            </td>

                        </tr>
                        

                ))}
                
                
                </tbody> 

            </table> </form>
          </div>
            
        </div>
    )
}
