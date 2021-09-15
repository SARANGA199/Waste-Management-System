import React, {useState, useEffect}  from 'react';
import axios from "axios";



export default function DeleteVehicle()  {


    const[Vehicle_reg_no,setVehicleName] = useState("");
    const[Type,setType] = useState();
    const[Chassis_No,setChassisNo] = useState("");
    const[Model,setModel] = useState("");
    const[Capacity,setCapacity] = useState("");
    const[Price,setPrice] = useState("");
    const[Photo,setPhoto] = useState("");
    

    const [_id, setID] = useState(null);

        useEffect(() => {
        setID(localStorage.getItem('ID'))
        setVehicleName(localStorage.getItem('Vehicle_reg_no'));
        setType(localStorage.getItem('Type'));
        setChassisNo(localStorage.getItem('Chassis_No'));
        setModel(localStorage.getItem('Model'));
        setCapacity(localStorage.getItem('Capacity'));
        setPrice(localStorage.getItem('Price'));
        setPhoto(localStorage.getItem('Photo'))
        
    },[] );


   

  const onDelete = (_id) => {
    axios.delete(`http://localhost:8070/vehicle/deleteVehicle/${_id}`)
    
  }

    
        return (
       <div>
       <form onSubmit={onDelete}>
       
        <div className="row mb-3">
        
          <label for="exampleInputEmail1" className="col-sm-2 form-label">Registration No</label>
          <div class="col-sm-4">
          <input type="text" className="form-control" value={Vehicle_reg_no} id="Vehicle_reg_no" disabled onChange={(e)=>{
              
            setVehicleName(e.target.value);
            }}
            />
            </div>
        </div>
      

        <div className="row mb-3">
                        <label htmlFor="type" className="col-sm-2 form-label">
                          Vehicle Type
                        </label>
                        <div class="col-sm-4">
                        <select
                        className="form-select"
                        value={Type}
                        disabled
                        onChange={e=>{
                  
                            setType(e.target.value);
                
                         }}
                        
                         >
                            <option selected>Select the Vehicle type</option>
                            <option value={"Truck"}>Truck</option>
                            <option value={"Tractor"}>Tractor</option>
                            <option value={"Bike"}>Bike</option>
                           
                            </select>
                            </div>
                        </div> 
        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label">Chassis No</label>
          <div class="col-sm-4">
          <input type="text" className="form-control" value={Chassis_No} id="Chassis_No" disabled onChange={(e)=>{
              
              setChassisNo(e.target.value);
              }}/>
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label">Model</label>
          <div class="col-sm-4">
          <input type="text" className="form-control" value={Model} id="Model" disabled onChange={(e)=>{
              
              setModel(e.target.value);
              }} />
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label">Capacity</label>
          <div class="col-sm-4">
          <input type="text" className="form-control" value={Capacity} id="Capacity" disabled onChange={(e)=>{
              
              setCapacity(e.target.value);
              }}/>
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label">Price</label>
          <div class="col-sm-4">
          <input type="text" className="form-control" value={Price} id="Price" disabled onChange={(e)=>{
              
              setPrice(e.target.value);
              }}/>
              </div>
        </div>

        <div class="row mb-3">
        <label for="formFile" class="col-sm-2 form-label">Photo</label>
        <div class="col-sm-4">
        <input class="form-control" type="file" id="formFile"/>
        </div>
        </div>
      
        <a type="submit" className="btn btn-primary" href="/" onClick={onDelete(_id)}>Delete</a>

       

       </form>
        </div>

        
        
    )
            
                
            }
        

    
