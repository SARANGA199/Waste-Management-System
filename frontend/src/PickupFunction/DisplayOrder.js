import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function DisplayOrder() {
  
    const[order,setOrder] = useState([]);

    useEffect(()=>{
        

             axios.get("http://localhost:8070/order/").then((res)=>{
                setOrder(res.data);
            }).catch((err)=>{
                alert(err.message);
             })     
        


    },[])




const setDataNew = (dataNEW) => {
    let { _id,deliveryAddress, quantity,orderStatus} = dataNEW;

    localStorage.setItem('ID', _id);
    localStorage.setItem('deliveryAddress', deliveryAddress);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('orderStatus', orderStatus);


}




    return (
        <div>
            
       

       <h1><b> <center> Today's Orders </center> </b> </h1>


<div className = "container">
            
            <table className="table">

                <thead>
                        <tr>
                        <th scope="col">Request</th>
                        <th scope="col">Location</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Action</th>
                        </tr>

                </thead>
            <tbody>
                {order.map((dataNEW,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                            
                            {dataNEW.deliveryAddress}
                            
                            </td>

                            <td>{dataNEW.quantity}</td>
                            <td>{dataNEW.orderStatus}</td>
                            <td>

                            <a className="btn btn-warning" href="/addOrder/route" onClick={() => setDataNew(dataNEW)} style={{textDecoration:'none'}}>
                            <i className="fas fa-edit"></i>&nbsp;Process Order
                            </a>


                            </td>

                        </tr>
                        

                ))}
                
                
                </tbody> 

            </table>
            <center><button className ="btn btn-success"><a href="/req" style={{textDecoration:'none', color :'white'}}>Switch To Request </a> </button></center> 
            <button className ="btn btn-success btn-lg"><a href="/routeOrder" style={{textDecoration:'none', color :'white' }}>All Order Routes </a> </button>
</div>
            
        </div>
    )
}
