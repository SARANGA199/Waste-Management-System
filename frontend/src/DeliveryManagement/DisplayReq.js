import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function DisplayReq() {
   
    const[request,setRequest] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/marketplace/").then((res)=>{
                setRequest(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])


    const setData = (data) => {
        let { _id,weight, itemLocation} = data;

        localStorage.setItem('ID', _id);
        localStorage.setItem('weight', weight);
        localStorage.setItem('itemLocation', itemLocation);
      

        console.log(data);
        //test

}




    return (
        <div>
            
            <h1><b> <center> Today's Request </center> </b> </h1>

            <div className = "container">
            
            <table className="table">

                <thead>
                        <tr>
                        <th scope="col">Request</th>
                        <th scope="col">Location</th>
                        <th scope="col">PackageSize(KG)</th>
                        <th scope="col">Action</th>
                        </tr>

                </thead>
            <tbody>
                {request.map((data,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                            
                            {data.itemLocation}
                            
                            </td>

                            <td>{data.weight}</td>
                            <td>

                            <a className="btn btn-warning" href="/addReq/route" onClick={() => setData(data)} style={{textDecoration:'none'}}>
                            <i className="fas fa-edit"></i>&nbsp;Add
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
