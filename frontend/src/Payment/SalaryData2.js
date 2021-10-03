import React, {useState,useEffect} from "react";
import axios from 'axios';
import AddpicupReq from './AddpickupReq.css'


export default function DisplayRouterOrder() {
  

    const[OrderRoute,setOrderRoute] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/salarys/").then((res)=>{
                  setOrderRoute(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,EID,pDate,TotalSalary} = data;

        localStorage.setItem('salaryId', _id);
        localStorage.setItem('EID', EID);
        localStorage.setItem('pDate', pDate);
        localStorage.setItem('TotalSalary', TotalSalary);

}



    return (
        <div className = "container " style={{width:"100%"}}>

<div className="addform2"><h1>All Salary Data </h1></div>
      
        <table className="table" >
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Pay Date</th>
                    <th scope="col">Amount</th>
                    
                  </tr>
                 
          </thead>
         <tbody>
             {OrderRoute.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.EID}</td>
                       <td>{data.pDate}</td>
                       <td>{data.TotalSalary}</td>
                      
                      

                       <td>
  
                         <a className="btn btn-warning" href="/credit-card-validation/EditSalary2"  onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Edit
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" href="/credit-card-validation/deleteSalary" onClick={() => setData(data)}>
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