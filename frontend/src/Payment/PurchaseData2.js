import React, {useState,useEffect} from "react";
import axios from 'axios';
import AddpicupReq from './AddpickupReq.css'


export default function DisplayRouterOrder() {
  

    const[OrderRoute,setOrderRoute] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/companybuys/").then((res)=>{
                  setOrderRoute(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,comID,date,size,price} = data;

        localStorage.setItem('pId', _id);
        localStorage.setItem('comID', comID);
        localStorage.setItem('date', date);
        localStorage.setItem('size', size);
        localStorage.setItem('price', price);

}



    return (
        <div className = "container " style={{width:"100%"}}>

<div className="addform2"><h1>All Purchase Data </h1></div>
      
        <table className="table" >
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company ID</th>
                    <th scope="col"> Date</th>
                    <th scope="col"> Quantity</th>
                    <th scope="col">Amount</th>
                    
                  </tr>
                 
          </thead>
         <tbody>
             {OrderRoute.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.comID}</td>
                       <td>{data.date}</td>
                       <td>{data.size}</td>
                       <td>{data.price}</td>
                      
                      

                       <td>
  
                         <a className="btn btn-warning" href="/credit-card-validation/EditPurchase"  onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Edit
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" href="/credit-card-validation/DeletePurchase" onClick={() => setData(data)}>
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