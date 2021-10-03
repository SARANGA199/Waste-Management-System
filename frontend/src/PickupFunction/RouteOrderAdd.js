import React, {useState, useEffect}  from 'react';
import axios from "axios";
import AddpicupReq from './AddpickupReq.css'
import { useHistory } from 'react-router';

export default function RouteOrderAdd()  {
 
  
  let history = useHistory();//to navigate page



    
    const [orderId, setoid] = useState();
    const [orderType, setType] = useState();
    const [routeDescription, setDescription] = useState();
    const [quantity, setquan] = useState();
    const [vehicleType, setvehicleType] = useState();
    const [destination, setDesti] = useState();
    const [distance, setdistance] = useState();
    const [arrivalTime, setarrival] = useState();
    const [date, setdate] = useState();
    const [time,settime] = useState();


    useEffect(() => {

        setoid(localStorage.getItem('ID'))
        setDescription(localStorage.getItem('orderStatus'));
        setDesti(localStorage.getItem('deliveryAddress'));
        setquan(localStorage.getItem('quantity'));


    },[] );


    function submitData(e) {
        e.preventDefault();
        const newRoute = {
              
            orderId,
            orderType,
            routeDescription,
            quantity,
            vehicleType,
            destination,
            distance,
            arrivalTime,
            date

        }

        axios.post("http://localhost:8070/routeOrder/addOrderRoute",newRoute).then(()=>{

            alert("Route Order added");
             e.target.reset();
             history.push('/routeOrder');
             
    
         }).catch((err)=>{
    
            alert(err);
         })
    

    }


   return(
      
       <div> 
           <div className="addform"><h1>Process Order</h1></div>
                                    
                <div className="main">

                   <form onSubmit={submitData}  className="form">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="name" className="form-label">
                        <h2 className="name1">  Order ID </h2>
                         </label>
                         <input
                          type="text"
                          className="form-control"
                          name="rid"
                          style={{width:"300px"}}
                          required
                          disabled
                          value={orderId}
                          onChange={e=>{
                                      
                            setoid(e.target.value);

                      }}
                          
                        />
                      </div>


                      <div className="col-md-4 mb-3">
                        <label htmlFor="name" className="form-label">
                        <h2 className="name1"> Quantity</h2>
                        </label>
                        <input
                          disabled
                          value={quantity}
                          type="text"
                          style={{width:"200px"}}
                          className="form-control"
                          name="quantity"
                          onChange={e=>{
                                      
                            setquan(e.target.value);

                        }}
                            
                          />
                        </div>



                      
                      <div className="col-md-4 mb-3">
                        <label htmlFor="name" className="form-label">
                        <h2 className="name1"> Description</h2>
                        </label>
                        <input
                          disabled
                          value={routeDescription}
                          type="text"
                          style={{width:"200px"}}
                          className="form-control"
                          name="quantity"
                          onChange={e=>{
                                      
                            setDescription(e.target.value);

                      }}
                          
                        />
                      </div>
                    
 
                     <div className="col-md-2 mb-3">
                        <label htmlFor="category" className="form-label">
                        <h2 className="name1"> Order Type </h2>
                        </label>
                        <select
                        className="form-select"
                        style={{width:"300px"}}
                        name="orderType"
                        onChange={e=>{
                  
                            setType(e.target.value);
                
                         }}
                        
                         >
                            <option selected>Select Order Type</option>
                            <option value={"Normal"}>Normal</option>
                            <option value={"Fast"}>Fast</option>
                            
                           
                            </select>
                        </div>  <br/><br/>                        



              
                    <div className="col-md-2 mb-3">
                          <label htmlFor="category" className="form-label">
                          <h2 className="name1"> Vehicle Type </h2>
                          </label>
                          <select
                          className="form-select"
                          style={{width:"300px"}}
                          name="vehicleType"
                          onChange={e=>{
                    
                              setvehicleType(e.target.value);
                  
                          }}
                          
                          >
                              <option selected>Select Vehicle Type</option>
                              <option value={"Truck"}>Truck</option>
                              <option value={"Van"}>Van</option>
                              <option value={"Bike"}>Bike</option>
                            
                              </select>
                          </div>  <br/><br/>    


              

        
                      <div className="col-md-4 mb-3">
                          <label className="form-label">
                          <h2 className="name1">Delivery Address </h2>
                          </label>
                          <input
                          disabled
                          type="text"
                          className="form-control"
                          style={{width:"500px"}}
                          name="destination"
                          value={destination}
                          onChange={e=>{
                        
                              setDesti(e.target.value);
                  
                        }}
                          
                          />
                      </div>


      
                        <div className="col-md-4 mb-3">
                            <label className="form-label">
                            <h2 className="name1">Distance(KM) </h2>
                            </label>
                            <input
                            required
                            type="text"
                            className="form-control"
                            style={{width:"300px"}}
                            name="distance"
                            onChange={e=>{
                      
                                setdistance(e.target.value);
                    
                          }}
                            
                            />
                           
                        </div>      
                       


                        <div className="col-md-4 mb-3">
                            <label htmlFor="name" className="form-label">
                            <h2 className="name1">Arrival Time </h2>
                            </label>
                            <input
                            required
                            type="time"
                            style={{width:"300px"}}
                            className="form-control"
                            name="arrivalTime"
                            onChange={e=>{
                      
                                setarrival(e.target.value);
                    
                          }}
                            
                            />
                        </div>


                    
                          <div className="col-md-4 mb-3">
                              <label htmlFor="name" className="form-label">
                              <h2 className="name1">Date </h2>
                              </label>
                              <input
                              type="date"
                              className="form-control"
                              style={{width:"300px"}}
                              name="date"
                              onChange={e=>{
                        
                                  setdate(e.target.value);
                      
                            }}
                            
                              
                              />
                          </div>


                          <hr className="col-md-4 mb-3" />
                          
                          <div className="form-check ">
                              <input
                              
                              type="checkbox"
                              className="form-check-input"
                              id="save-info" 
                              required
                              />


                        <label className="col-md-4 form-check-label" htmlFor="save-info">
                        <h5> Confirm to continue</h5>
                        </label>
                    </div>
                    <hr className="col-md-4 mb-4" />

                    <button type="submit" id= " btn1" className="btn btn-outline-success mb-5"  href="/routeReq">
                        Submit
                    </button>
                    </form>
                    </div>
            <br/> <br/>
           <center> <button className ="btn btn-success btn-lg"><a href="/routeOrder" style={{textDecoration:'none', color :'white'}}>View Order Routes</a> </button> </center>
           <br/><br/>
           </div>


   );



}
