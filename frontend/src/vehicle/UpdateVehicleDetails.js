import React, {useState, useEffect}  from 'react';
import axios from "axios";



export default function UpdateVehicleDetails()  {


    const[Vehicle_reg_no,setVehicleName] = useState();
    const[Type,setType] = useState();
    const[Chassis_No,setChassisNo] = useState();
    const[Model,setModel] = useState();
    const[Capacity,setCapacity] = useState();
    const[Price,setPrice] = useState();
    const[Photo,setPhoto] = useState();
    const [loading, setLoading] = useState(false);
    
    

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


    const updateAPIData = () => {
      axios.put(`http://localhost:8070/vehicle/updateVehicle/${_id}`, {
        Vehicle_reg_no,
        Type,
        Chassis_No,
        Model,
        Capacity,
        Price,
        Photo
    }).then(()=> {
      alert("Vehicle Details Updated Successfully")

  }).catch((err)=>{
      alert("err")
  })

  }
   //image upload start
   const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wasteImages");
    setLoading(true);
   


    const res = await fetch(
      //"https://api.cloudinary.com/v1_1/vehicle/image/upload",
      "https://api.cloudinary.com/v1_1/waste123/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file.secure_url);
    setPhoto(file.secure_url);
  };
  //image upload end

    
        return (
       <div>
       <form>
       
        <div className="row mb-3">
        
          <label for="exampleInputEmail1" className="col-sm-2 form-label">Registration No</label>
          <div class="col-sm-4">
          <input type="text" className="form-control" value={Vehicle_reg_no} id="Vehicle_reg_no" onChange={(e)=>{
              
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
          <input type="text" className="form-control" value={Chassis_No} id="Chassis_No" onChange={(e)=>{
              
              setChassisNo(e.target.value);
              }}/>
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label">Model</label>
          <div class="col-sm-4">
          <input type="text" className="form-control" value={Model} id="Model" onChange={(e)=>{
              
              setModel(e.target.value);
              }} />
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label">Capacity</label>
          <div class="col-sm-4">
          <input type="number" step="1" className="form-control" value={Capacity} id="Capacity" onChange={(e)=>{
              
              setCapacity(e.target.value);
              }}/>
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label">Price</label>
          <div class="col-sm-4">
          <input type="number" className="form-control" value={Price} id="Price" onChange={(e)=>{
              
              setPrice(e.target.value);
              }}/>
              </div>
        </div>

        <div class="row mb-3">
        <label for="formFile" class="col-sm-2 form-label">Photo</label>
        <div class="col-sm-4">
        <input
            className="form-control mb-3"
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            onChange={uploadImage}
          />
          <img
            className="img-thumbnail"
            width="150px"
            height="150px"
            src={Photo}
            alt="Card image cap"
          />
        </div>
        </div>

      
        <a type="submit" className="btn btn-warning" href="/all" onClick={updateAPIData}>Update</a>

        

       

       </form>
        </div>

        
        
    )
            
                
            }