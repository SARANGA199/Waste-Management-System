import React, {useState} from "react";
import axios from 'axios';


export default function CollectItem() {

    const [itemcategory, setCatItem] = useState();
    const [quantity, setquantity] = useState();
    const [date, setDate] = useState();

    function submitData(e){
          
      e.preventDefault();

      const newReceived = {
        itemcategory,
        quantity,
        date
      }

      axios.post("http://localhost:8070/receivedItem/addReceived",newReceived).then(()=>{

        alert("Received Items added");
         e.target.reset();
         

     }).catch((err)=>{

        alert(err);
     })

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
            required
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
            required
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
            required
            onChange={(e) => {
                setDate(e.target.value);
            }}
          />
        </div>

        <hr className="col-md-10 mb-3" />
        <button type="submit" class="btn btn-warning btn-lg">
         Add Item
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