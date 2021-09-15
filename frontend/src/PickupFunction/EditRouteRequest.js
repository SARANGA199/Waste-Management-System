import React, {useState, useEffect}  from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import AddpickupReq from './AddpickupReq.css'

export default function EditRouteRequest()  {

  let history = useHistory();
    
    const [rid, setrid] = useState();
    const [PackSize, setPack] = useState();
    const [vehicleType, setvehicle] = useState();
    const [destination, setdesti] = useState();
    const [distance, setdis] = useState();
    const [deliveryTown, setTown] = useState();
    const [arrivalTime, setarrival] = useState();
    const [date, setdate] = useState();


    useEffect(() => {

        setrid(localStorage.getItem('rid'));
        setPack(localStorage.getItem('PackSize'));
        setvehicle(localStorage.getItem('vehicleType'));
        setdesti(localStorage.getItem('destination'))
        setdis(localStorage.getItem('distance'));
        setTown(localStorage.getItem('deliveryTown'));
        setarrival(localStorage.getItem('arrivalTime'))
        setdate(localStorage.getItem('date'));
       


    },[] );


    function submitData(e) {
        e.preventDefault();
        const newRoute = {
              
            rid,
            PackSize,
            vehicleType,
            destination,
            distance,
            deliveryTown,
            arrivalTime,
            date

        }

        let ans = window.confirm("Are you really wanted to Update?");

        if(ans){

        axios.put(`http://localhost:8070/routeReq/updateReqRoute/${rid}`,newRoute).then(()=>{

            alert("Route Update successfully");
            history.push('/routeReq');
    
         }).catch((err)=>{
    
            alert(err);
         })
    

    }
  }


   return(
      
            <div> 

<button className ="btn btn-success"><a href="/routeReq" style={{textDecoration:'none', color :'white'}}>Request Routes</a> </button>
   
<div className="addform"><h1>Edit Request Route</h1></div>
                
    <div className="main">

<form onSubmit={submitData} className="form">

            {/* <div className="col-md-4 mb-3">
              <label htmlFor="name" className="form-label">
              <h2 className="name1">  Request ID </h2>
              </label>
              <input
                type="text"
                className="form-control"
                name="rid"
                required
                style={{width:"300px"}}
                value={rid}
                onChange={e=>{
                            
                  setrid(e.target.value);

            }}
                
              />
            </div> */}


          <div className="col-md-4 mb-3">
            <label htmlFor="name" className="form-label">
            <h2 className="name1"> Package Size(KG) </h2>
            </label>
            <input
              disabled
              value={PackSize}
              type="text"
              className="form-control"
              style={{width:"300px"}}
              name="PackSize"
              onChange={e=>{
                          
                setPack(e.target.value);

          }}
              
            />
          </div>
 


              
          <div className="col-md-2 mb-3">
                        <label htmlFor="category" className="form-label">
                        <h2 className="name1">Vehicle Type </h2>
                        </label>
                        <select
                        className="form-select"
                        style={{width:"300px"}}
                        name="vehicleType"
                        value={vehicleType}
                        onChange={e=>{
                  
                            setvehicle(e.target.value);
                
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
                    <h2 className="name1"> Destination </h2>
                    </label>
                    <input
                    disabled
                    type="text"
                    className="form-control"
                    style={{width:"500px"}}
                    name="destination"
                    value={destination}
                    onChange={e=>{
                  
                        setdesti(e.target.value);
            
                  }}
                    
                    />
                </div>


  
                    <div className="col-md-4 mb-3">
                        <label className="form-label">
                        <h2 className="name1"> Distance (KM) </h2>
                        </label>
                        <input
                         required
                        type="text"
                        className="form-control"
                        name="distance"
                        style={{width:"300px"}}
                        value={distance}
                        onChange={e=>{
                  
                            setdis(e.target.value);
                
                      }}
                        
                        />
                    </div>

                            
                    <div className="col-md-2 mb-3">
                        <label htmlFor="category" className="form-label">
                        <h2 className="name1"> Delivery Town </h2>
                        </label>
                        <select
                        className="form-select"
                        style={{width:"300px"}}
                        name="deliveryTown"
                        value={deliveryTown}
                        onChange={e=>{
                  
                            setTown(e.target.value);
                
                        }}
                                                >
                            <option selected>Select the Nearby Town</option>
                            <option value={"MATARA"}>MATARA</option>
                            <option value={"GALLE"}>GALLE</option>
                            <option value={"DIKWELLA"}>DIKWELLA</option>
                            <option value={"AKURASSA"}>AKURASSA</option>
                            <option value={"WALIGAMA"}>WALIGAMA</option>
                            </select>
                        </div>  <br/><br/>              



                    <div className="col-md-4 mb-3">
                        <label htmlFor="name" className="form-label">
                        <h2 className="name1"> Arrival Time </h2>
                        </label>
                        <input
                        required
                        type="time"
                        className="form-control"
                        style={{width:"300px"}}
                        name="arrivalTime"
                        value={arrivalTime}
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
                        value={date}
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
                confirm update
                </label>
            </div>
            <hr className="col-md-4 mb-4" />

            <button type="submit" id= " btn1" className="btn btn-outline-success mb-5" >
                Update
            </button>
            </form>
            </div>

           <br/><br/>

            </div>


   );



}
