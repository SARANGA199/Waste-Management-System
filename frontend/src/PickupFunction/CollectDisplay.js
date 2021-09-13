import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function CollectDisplay() {
  
    const[received,setReceived] = useState([]);

    useEffect(()=>{
        

             axios.get("http://localhost:8070/receivedItem/displayReceived").then((res)=>{
                setReceived(res.data);
            }).catch((err)=>{
                alert(err.message);
             })     
        


    },[])




const setData = (data) => {
    let { _id,itemcategory, quantity,date} = data;

    localStorage.setItem('ID', _id);
    localStorage.setItem('itemcategory', itemcategory);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('date', date);


}




    return (
        <div>
            
       

       <h1><b> <center> Received Items</center> </b> </h1>


<div className = "container">
            
            <table className="table">

                <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Weight(KG)</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                        </tr>

                </thead>
            <tbody>
                {received.map((data,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                            
                            {data.itemcategory}
                            
                            </td>

                            <td>{data.quantity}</td>
                            <td>{data.date}</td>
                            <td>

                            <a className="btn btn-danger" href="/collect/delete" onClick={() => setData(data)} style={{textDecoration:'none'}}>
                            <i className="fas fa-edit"></i>&nbsp;Delete 
                            </a>


                            </td>

                        </tr>
                        

                ))}
                
                
                </tbody> 

            </table>
            <center><button className ="btn btn-success"><a href="/" style={{textDecoration:'none', color :'white'}}>Switch To Request </a> </button></center> 

</div>
            
        </div>
    )
}
