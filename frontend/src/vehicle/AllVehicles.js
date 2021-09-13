import React, {useState,useEffect} from "react";
import axios from "axios";




export default function AllVehicles(){

    const[vehicles,setVehicles] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/vehicle/").then((res)=>{
                setVehicles(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    const setData = (data) => {
        let { _id,Vehicle_reg_no, Type, Chassis_No,Model,Capacity,Price,Photo } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Vehicle_reg_no', Vehicle_reg_no);
        localStorage.setItem('Type', Type);
        localStorage.setItem('Chassis_No', Chassis_No);
        localStorage.setItem('Model', Model);
        localStorage.setItem('Capacity', Capacity);
        localStorage.setItem('Price', Price);
        localStorage.setItem('Photo', Photo);


        console.log(data);
        

}



    

    return(
        <div className="py-4 " >
           <table class="table border shadow">
  <thead class = "thread-dark">
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">Vehicle Reg_No</th>
      <th scope="col">Type</th>
      <th scope="col">Chassis No</th>
      <th scope="col">Model</th>
      <th scope="col">Capacity</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
      {vehicles.map((data,index)=>(

            <tr key={index}>
                <td><img
                 width="100px"
                 height="100px"
                 src={data.Photo}
                 alt="vehicle"
                ></img></td>
                <td className="py-5 ">{data.Vehicle_reg_no}</td>
                <td className="py-5 ">{data.Type}</td>
                <td className="py-5 ">{data.Chassis_No}</td>
                <td className="py-5 ">{data.Model}</td>
                <td className="py-5 ">{data.Capacity}</td>
                <td className="py-5 ">{data.Price}</td>
                <td className="py-5 ">
                    <a className="btn btn-warning " href="/details" onClick={() => setData(data)}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>

                    &nbsp;
                    &nbsp;

                    <a className="btn btn-danger" href="/delete" onClick={() => setData(data)} >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                    
                </td>
            
            </tr>
      
            )
    )
    
      }
      
    
    
  </tbody>
</table>
        </div>
    )
}