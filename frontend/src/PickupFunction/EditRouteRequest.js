import React, {useState, useEffect}  from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

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

        axios.put(`http://localhost:8070/routeReq/updateReqRoute/${rid}`,newRoute).then(()=>{

            alert("Route Update successfully");
            history.push('/routeReq');
    
         }).catch((err)=>{
    
            alert(err);
         })
    

    }


   return(
      
            <div> 

<button className ="btn btn-success"><a href="/routeReq" style={{textDecoration:'none', color :'white'}}>Request Routes</a> </button>

                
    <div className="container">

<form onSubmit={submitData} style={{width:"1600px"}}>
  <div className="col-md-4 mb-3">
    <label htmlFor="name" className="form-label">
       Request ID
    </label>
    <input
      type="text"
      className="form-control"
      name="rid"
      required
      value={rid}
      onChange={e=>{
                  
        setrid(e.target.value);

  }}
      
    />
  </div>


  <div className="col-md-4 mb-3">
    <label htmlFor="name" className="form-label">
       Package Size(KG)
    </label>
    <input
      disabled
      value={PackSize}
      type="text"
      className="form-control"
      name="PackSize"
      onChange={e=>{
                  
        setPack(e.target.value);

  }}
      
    />
  </div>
 


              
          <div className="col-md-2 mb-3">
                        <label htmlFor="category" className="form-label">
                          Vehicle Type
                        </label>
                        <select
                        className="form-select"
                        name="vehicleType"
                        value={vehicleType}
                        onChange={e=>{
                  
                            setvehicle(e.target.value);
                
                         }}
                        
                         >
                            <option selected>Select the Nearby Town</option>
                            <option value={"Truck"}>Truck</option>
                            <option value={"Van"}>Van</option>
                            <option value={"Bike"}>Bike</option>
                           
                            </select>
                        </div>  <br/><br/>             


  
                <div className="col-md-4 mb-3">
                    <label className="form-label">
                    Destination
                    </label>
                    <input
                    disabled
                    type="text"
                    className="form-control"
                    name="destination"
                    value={destination}
                    onChange={e=>{
                  
                        setdesti(e.target.value);
            
                  }}
                    
                    />
                </div>


  
                    <div className="col-md-4 mb-3">
                        <label className="form-label">
                        Distance
                        </label>
                        <input
                         required
                        type="text"
                        className="form-control"
                        name="distance"
                        value={distance}
                        onChange={e=>{
                  
                            setdis(e.target.value);
                
                      }}
                        
                        />
                    </div>

                            
                    <div className="col-md-2 mb-3">
                        <label htmlFor="category" className="form-label">
                        Delivery Town
                        </label>
                        <select
                        className="form-select"
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
                        Arrival Time
                        </label>
                        <input
                        required
                        type="text"
                        className="form-control"
                        name="arrivalTime"
                        value={arrivalTime}
                        onChange={e=>{
                  
                            setarrival(e.target.value);
                
                      }}
                        
                        />
                    </div>


                    
                    <div className="col-md-4 mb-3">
                        <label htmlFor="name" className="form-label">
                        Date
                        </label>
                        <input
                        type="text"
                        className="form-control"
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

            <button type="submit" id= " btn1" className="btn btn-primary mb-5" >
                Update
            </button>
            </form>
            </div>
            </div>


   );



}
