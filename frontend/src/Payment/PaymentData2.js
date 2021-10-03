import React, {useState,useEffect} from "react";
import axios from 'axios';
import AddpicupReq from './AddpickupReq.css'


export default function DisplayRouterOrder() {
  

    const[OrderRoute,setOrderRoute] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/userpayments/").then((res)=>{
                  setOrderRoute(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,uid,TripCount,amount} = data;

        localStorage.setItem('pId', _id);
        localStorage.setItem('uid', uid);
        localStorage.setItem('TripCount', TripCount);
        localStorage.setItem('amount', amount);
}



    return (
        <div className = "container " style={{width:"100%"}}>

<div className="addform2"><h1>All Payment Data </h1></div>
      
        <table className="table" >
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">User ID</th>
                    <th scope="col"> Trip Count</th>
                    <th scope="col"> Total Payment</th>                    
                  </tr>
                 
          </thead>
         <tbody>
             {OrderRoute.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.uid}</td>
                       <td>{data.TripCount}</td>
                       <td>{data.amount}</td>
                    
                      

                       <td>
  
                         <a className="btn btn-warning" href="/credit-card-validation/EditPaymentData"  onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Edit
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" href="/credit-card-validation/DeletePayment" onClick={() => setData(data)}>
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