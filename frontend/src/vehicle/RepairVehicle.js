import React,{useState} from "react";
import axios from "axios";

export default function RepairVehicle(){

   const[Vehicle_reg_no,setVehicleName] = useState("");
   const[RepairItem,setRepairItem] = useState();
   const[Action,setAction] = useState("");
   const[Remarks,setRemarks] = useState("");
   
   
  

   function sendData(e){

    e.preventDefault();
    
    const newRepairVehicle = {

        Vehicle_reg_no,
        RepairItem,
        Action,
        Remarks
       
    }
   

     axios.post("http://localhost:8070/repair/add",newRepairVehicle).then(()=> {
         alert("Repair Vehicle Details added")
         e.target.reset(); // to clear input fiels after submission
     }).catch((err)=>{
         alert("err")
     })

   }

   return(


    
    
    <div className="py-4 container">
          <h4 style={{color: 'green', textAlign: 'center'}}>Vehicle Maintenance Report</h4>
         
           <table class="table table-striped table-hover ">
  <thead class = "thread-dark table-dark">
    <tr style ={{textAlign: 'center'}}>
      <th scope="col">Repair Item</th>
      <th scope="col">Action</th>
      <th scope="col">Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Check belts for signs of fray or cracks</th>
      <td style = {{textAlign: 'center'}}>
          <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td >
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>
    <tr>
      <th scope="row">Check wipers</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>

    <tr>
      <th scope="row">Check brake light/tail light</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>

    <tr>
      <th scope="row">Tires -tread/condition proper inflation</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>

    <tr>
      <th scope="row">Fire extinguisher</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>

    <tr>
      <th scope="row">Door locks</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>

    <tr>
      <th scope="row">Liquid level Check</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>

    <tr>
      <th scope="row">Check turn signals</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>

    <tr>
      <th scope="row">Accident information packet in glove box</th>
      <td style = {{textAlign: 'center'}}>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
          </div>
      </td>
      <td>
      <div class="form-floating ">
      <textarea style={{border: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
      </div>
      </td>
      
    </tr>
    
  </tbody>
  
  </table>

  <div class="text-right">
	<button type="button" class="btn btn-success btn-lg float-end">Submit</button>
</div>

  
  </div>

  


   );
}