import "./Delivery.css";
import React, { useState , useContext} from "react";
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';

export default function DriverRegister() {
  const [licenseId, setLicense] = useState("");
  const [nearbyTown, setLocation] = useState("");
  const [vehicleNo, setNumber] = useState("");
  const [vehicleType, setType] = useState("");
  const [licenseImg1, setImg1] = useState("");
  const [licenseImg2, setImg2] = useState("");
  const {user} = useContext(AuthContext);

  function regDriver(e) {
    e.preventDefault();
   
    const newDriver = {
     
        licenseId,
        nearbyTown,
        vehicleNo,
        vehicleType,
        licenseImg1,
        licenseImg2
    };

    axios
      .post(
        `http://localhost:8070/driver/${user._id}/reg`,      //ID  Add
        newDriver
      )
      .then(() => {
        alert("Registered Successfully");
        e.target.reset();                       // to clear input field after the submission
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div class="driverimage">
  
    <div className="register">

      <center>  <h1 className="Hfont">Register As Freelance Driver</h1> </center>
        <br></br>
      <form onSubmit={regDriver}>
        <div className="col-md-8 mb-3 font">
          <label htmlFor="license" className="form-label">
            License ID
          </label>
          <input
            type="text"
            className="form-control"
            id="licenseid"
            placeholder="Ex :- B4523249"
            required
            onChange={(e) => {
              setLicense(e.target.value);
            }}
          />
        </div>

        <div className="col-md-8 mb-3 font">
          <label htmlFor="category" className="form-label">
           Nearby Location
          </label>
          <select
            className="form-select"
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option selected>Select the closest location</option>
            <option value={"Akurassa"}>Akuressa</option>
            <option value={"Galle"}>Galle</option>
            <option value={"Matara"}>Matara</option>
            <option value={"Weligama"}>Waligama</option>
          </select>
        </div>

        <div className="col-md-8 mb-3 font">
          <label htmlFor="number" className="form-label">
            Vehicle Number
          </label>
          <input
            type="text"
            className="form-control"
            id="regNumber"
            placeholder="Ex :- BBQ-4311"
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
          
        <div className="col-md-8 mb-3 font">
          <label htmlFor="type" className="form-label">
           Vehicle Type
          </label>
          <select
            className="form-select"
            required
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option selected>Choose Vehicle Type</option> 
            <option value={"Bike"}>Bike</option>
            <option value={"Lorry"}>Lorry</option>
            <option value={"Three-Wheeler"}>Three-Wheeler</option>
            <option value={"Truck"}>Truck</option>
          </select>
        </div>

        <br></br>
      
        
        <div style={{display:"flex"}} className="col-md-10 mb-3">
          <div className="col-md-7 mb-1"> 
          <input
            
            type="file"
            accept="image/png, image/jpeg"
            id="image1"
            required
            onChange={(e) => {
              setImg1(e.target.value);
            }}
          /> </div>

        <div className="col-md-6 mb-1">  <input
            
            type="file"
            accept="image/png, image/jpeg"
            id="image2"
            required
            onChange={(e) => {
              setImg2(e.target.value);
            }}
          />
          </div>  </div>
         
        <div style={{display:"flex"}}>
       <div className="col-md-6 mb-2 font"> <label htmlFor="img1" className="form-label">
       License Image(Front)
          </label></div>

          <div className="col-md-6 mb-2 font"> <label htmlFor="img2" className="form-label">
            License Image(Rear)
          </label></div>
        </div>


        <hr className="col-md-10 mb-3" />

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="term"
            required
          />
          <label className="form-check-label" htmlFor="terms">
            I have read and agree to the term & conditions
          </label>
        </div>
       
        <hr className="col-md-10 mb-3" />
        <button type="submit" class="btn btn-success btn-lg">
          
          Register
         
        </button>
      </form>
    </div>    
    </div> 

    
  );
}
