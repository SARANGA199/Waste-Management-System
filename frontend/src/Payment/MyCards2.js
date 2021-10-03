import React, {useState,useEffect} from "react";
import axios from 'axios';
import AddpicupReq from './AddpickupReq.css'
import {useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';


export default function DisplayMyCardData() {
    
    const {user} = useContext(AuthContext);
    const id = user.username;

    const[CardRoute,setOrderRoute] = useState([]);

    useEffect(()=>{
        const URL = "http://localhost:8070/formcards/";    
        axios.get(URL).then((res)=>{
                  setOrderRoute(res.data);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,cardNickname,cardName,cardNumber,cardType,cardSecurityCode,cardExpiration} = data;

        localStorage.setItem('CardId', _id);
        localStorage.setItem('cardNickname', cardNickname);
        localStorage.setItem('cardName', cardName);
        localStorage.setItem('cardNumber', cardNumber);
        localStorage.setItem('cardType', cardType);
        localStorage.setItem('cardSecurityCode', cardSecurityCode);
        localStorage.setItem('cardExpiration', cardExpiration);

}



    return (
       
      <div className = "container " style={{width:"100%"}}>
      <center><h1>Saved Payment Methods</h1>
            <a href="/credit-card-validation/addcard"><button className ="btn btn-success">Add new</button> </a>
            </center>
        <table className="table" >
  
          <thead>
                  <tr>
                  <th scope="col">#</th>
                            <th scope="col">Nickname</th>
                            <th scope="col">Card holder</th>
                            <th scope="col">Card number</th>
                            <th scope="col">Type</th>
                            <th scope="col">Exp Date</th>
                    
                  </tr>
                 
          </thead>
         <tbody>
             {CardRoute.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index + 1}</th>
                                <td>{data.cardNickname}</td>
                                <td>{data.cardName}</td>
                                <td>{data.cardNickname}</td>
                                <td style={{ width: '250px' }}>{data.cardType}</td>
                                <td>{data.cardExpiration}</td>
                      
                      

                       <td>
  
                         <a className="btn btn-warning" href="/credit-card-validation/EditCard"  onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Edit
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" href="/credit-card-validation/DeleteCard" onClick={() => setData(data)}>
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