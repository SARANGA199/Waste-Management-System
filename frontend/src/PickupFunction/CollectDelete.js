import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router';


export default function CollectDelete() {

    let history = useHistory();
    
    const [receivedId, setId] = useState();
    const [itemcategory, setCatItem] = useState();
    const [quantity, setquantity] = useState();
    const [date, setDate] = useState();


    
    useEffect(() => {

        setId(localStorage.getItem('ID'))
        setCatItem(localStorage.getItem('itemcategory'));
        setquantity(localStorage.getItem('quantity'));
        setDate(localStorage.getItem('date'));
        


    },[] );

    function submitData(e){
          
      e.preventDefault();

      let ans = window.confirm("Do you want to delete this record ?");

      if(ans){      

      axios.delete(`http://localhost:8070/receivedItem/deleteRitems/${receivedId}`).then(()=>{

        alert("Received Item Deleted");
        history.push('/collect/dis');
         

     }).catch((err)=>{

        alert(err);
     })

    }
  }

    return(
      <div>
       <center>   <h1>Collected Items</h1> </center>

       <br/> 
      <center> <p class="font"> *Please fill these fields after collecting items </p> </center>

         <br/> 
         <form class="container" onSubmit={submitData}>
         <div className="col-md-8 mb-3 font">
          <label htmlFor="type" className="form-label">
           Item Category
          </label>
          <select
            className="form-select"
           disabled
           value={itemcategory}

            onChange={(e) => {
               setCatItem(e.target.value);
            }}
          >
            <option selected>Choose item category</option>
            <option value={"Plastic"}>Plastic</option>
            <option value={"Polethene"}>Polethene</option>
            <option value={"Glass"}>Glass</option>
            <option value={"Iron"}>Iron</option>
            <option value={"Paper"}>Paper</option>
          </select>
        </div>

        <div className="col-md-8 mb-3 font">
          <label htmlFor="Quantity" className="form-label">
           Quantity
          </label>
           <input
            type="text"
            className="form-control"
            id="Quantity"
            value={quantity}
            disabled
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          />
        </div>

        <div className="col-md-8 mb-3 font">
          <label htmlFor="date" className="form-label">
           Date
          </label>
           <input
            type="date"
            className="form-control"
            id="Date"
           disabled
           value={date}
            onChange={(e) => {
                setDate(e.target.value);
            }}
          />
        </div>

        <hr className="col-md-10 mb-3" />
        <button type="submit" class="btn btn-warning btn-lg">
         Delete
        </button>

               </form>

               <br/>   <br/>  <br/> 
        <hr className="col-md-10 mb-3" />
       <center> <button type="button" class="btn btn-secondary btn-lg">
         Finish Delivery
        </button> </center>


        </div>


    );




}