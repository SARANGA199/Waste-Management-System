import React, {useState, useEffect}  from 'react';
import axios from "axios";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import "react-credit-cards/es/styles-compiled.css";
//import AddpicupReq from './AddpickupReq.css'
import { useHistory } from 'react-router';

export default function EditRouteOrder()  {
  
  let history = useHistory();
  //let pd2;

    
    const [salaryId, setsalaryId] = useState();
    const [EID, setEID] = useState();
    const [pDate, setpDate] = useState();
    const [TotalSalary, setTotalSalary] = useState();
    

    useEffect(() => {

        setsalaryId(localStorage.getItem('salaryId'))
        setEID(localStorage.getItem('EID'));
        setpDate(localStorage.getItem('pDate'));
        setTotalSalary(localStorage.getItem('TotalSalary'));

        //pd2 = pDate.substring(0,9);
        
    },[] );

    
    function submitData(e) {
        e.preventDefault();
        const newRoute = {
              
            salaryId,
            EID,
            pDate,
            TotalSalary
        }

        let ans = window.confirm("Are you really wanted to update ?");

        if(ans){

        axios.put(`http://localhost:8070/salarys/update/${salaryId}`,newRoute).then(()=>{

            alert("Salary Data Updated Successfully");
           
            history.push('/credit-card-validation/SalaryData2/');
    
         }).catch((err)=>{
    
            alert(err);
         })
          
         
         
        }   
                 

    }


   return(
      
    <div>
    <div className="cardcontainer">
      <div className="box justify-content-center align-items-center">
        <div className="formDiv">
        <div className="creditCard">
        <h3> Add Salary Details</h3>
        </div>
        <Form onSubmit={submitData} >
          <Form.Group>
            <Form.Control
              type="text"
              id="uid"
              data-testid="uid"
              name="uid"
              placeholder="Username"
              value={EID}
              onChange={e=>{
                  
                setEID(e.target.value);
    
             }}
  
              required
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              type="date"
              id="date"
              data-testid="date"
              name="date"
              placeholder="Date"
              value={pDate}

              onChange={e=>{
                  
                setpDate(e.target.value);
    
             }}
              

    
            />
          </Form.Group>
          <br />
         
          <br />
          <Form.Group>
            <Form.Control
              type="number"
              id="amount"
              data-testid="amount"
              name="amount"
              placeholder="Payment Amount"
              value={TotalSalary}
              onChange={e=>{
                  
                setTotalSalary(e.target.value);
    
             }}

              required
            />
          </Form.Group>

          <br />
          <center>
          <Button
            style={{backgroundColor: "green"}}
            size={"block"}
            data-testid="validateButton"
            id="validateButton"
            type="submit"
            
          >
            Submit
          </Button>
          </center>
        </Form>
        </div>
        {" "}
      </div>
    </div>
  </div>


   );



}