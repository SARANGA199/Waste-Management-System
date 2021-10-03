import React, {useState,useEffect,useContext} from "react";
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';


export default function Loyaltypoints() {
  
  const {user} = useContext(AuthContext);

    const[points,setpoints] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/points/allpoints").then((res)=>{
                setpoints(res.data.existingPoints);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,uid,uname,points,description,expdate} = data;

        localStorage.setItem('id', _id);
        localStorage.setItem('uid', uid);
        localStorage.setItem('uname',uname);
        localStorage.setItem('points', points);
        localStorage.setItem('description',description);
        localStorage.setItem('expdate', expdate);

}

function deleteData(data) {
   // e.preventDefault();
   let { _id, points, description, expdate} = data;
   console.log("Delete", _id);
   let ans = window.confirm("Do you want to delete this request ?");

   if (ans) {
     axios
       .delete(`http://localhost:8070/points/deletePoints/${_id}`)
       .then(() => {
         alert("Request Delete successfully");
       })
       .catch((err) => {
         alert(err);
       });
   }
 }



    return (
        <div className = "container " style={{width:"100%"}}>

                 <div className="addform1"><h1>All User Accounts </h1></div>
      
        <table className="table" >
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">UserName</th>
                    <th scope="col">points</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Expdate</th>
                  </tr>
                 
          </thead>
         <tbody>
             {points.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.uname}</td>
                       <td>{data.points}</td>
                       <td>{data.description}</td>
                       <td>{data.expdate}</td>
                       <td>
  
                         <a className="btn btn-warning" href={`/updatepoints/${data._id}`} onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Edit
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" onClick={() => deleteData(data)}>
                            <i className= "fas fa-trash-alt"></i>&nbsp;Delete
                         </a>
                         &nbsp;
  
                       </td>
  
                    </tr>
                  
  
             ))}
             
           
           </tbody> 
  
        </table>
     </div>
    )
}