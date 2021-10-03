import React,{useState} from "react";
import axios from "axios";

export default function AddVehicle(){

   const[Vehicle_reg_no,setVehicleName] = useState("");
   const[Type,setType] = useState();
   const[Chassis_No,setChassisNo] = useState("");
   const[Model,setModel] = useState("");
   const[Capacity,setCapacity] = useState("");
   const[Price,setPrice] = useState("");
   const[Photo,setPhoto] = useState("");
   const [loading, setLoading] = useState(false);
  

   function sendData(e){

    e.preventDefault();
    
    const newVehicle = {

    Vehicle_reg_no,
    Type,
    Chassis_No,
    Model,
    Capacity,
    Price,
    Photo
    }
   

     axios.post("http://localhost:8070/vehicle/add",newVehicle).then(()=> {
         alert("Vehicle added")
         e.target.reset(); // to clear input fiels after submission
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

    return(
          
        <div >

       <h4 style={{color: 'green', textAlign: 'center'}} className="mb-4"><b><i>Vehicle Registration</i></b></h4>
       <form onSubmit={sendData}>
       
        <div className="row mb-3">
        
          <label for="exampleInputEmail1" className="col-sm-2 form-label"><b>Registration No</b></label>
          <div class="col-sm-4">
          <input type="text" className="form-control numberinput" id="Vehicle_reg_no" required onChange={(e)=>{
              
            setVehicleName(e.target.value);
            }}
            
            />
            
            </div>
        </div>
      

       
        <div className="row mb-3">
                        <label htmlFor="category" className="col-sm-2 form-label"><b>
                          Vehicle Type</b>
                        </label>
                        <div class="col-sm-4">
                        <select
                        className="form-select"
                        name="vehicleType"
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
          <label htmlFor="exampleInputchassisno" className="col-sm-2 form-label"><b>Chassis No</b></label>
          <div class="col-sm-4">
          <input type="text" className="form-control" id="Chassis_No" required onChange={(e)=>{
              
              setChassisNo(e.target.value);
              }}/>
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label"><b>Model</b></label>
          <div class="col-sm-4">
          <input type="text" className="form-control" id="Model" required onChange={(e)=>{
              
              setModel(e.target.value);
              }} />
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label"><b>Capacity</b></label>
          <div class="col-sm-4">
          <input type="number"step="1" className="form-control" id="Capacity" required onChange={(e)=>{
              
              setCapacity(e.target.value);
              }}/>
              </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="exampleInputPassword1" className="col-sm-2 form-label"><b>Price</b></label>
          <div class="col-sm-4">
          <input type="number" className="form-control" id="Price" required onChange={(e)=>{
              
              setPrice(e.target.value);
              }}/>
              </div>
        </div>

        <div class="row mb-3">
        <label for="formFile" class="col-sm-2 form-label"><b>Photo</b></label>
        <div class="col-sm-4">
        <input
            className="form-control mb-3"
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            onChange={uploadImage}
          />
          {loading ? (
            <img
              className="img-thumbnail"
              width="150px"
              height="150px"
              src={Photo}
              alt="Loading..."
            />
          ) : (
            <label htmlFor="loading" className="form-label" />
          )}
        </div>
        </div>


        

        <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
          <label className="form-check-label" htmlFor="invalidCheck"><b>
            I have read and agree to </b> <b className ="text-danger" >terms and conditions</b>
          </label>
        </div>
      </div>
      <br/> 
        <button type="submit" className="btn btn-success">Submit</button>
       </form>
        </div>
    );
            
  }