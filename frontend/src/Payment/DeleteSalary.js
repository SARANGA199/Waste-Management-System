import React, {useState, useEffect}  from 'react';
import axios from "axios";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import "react-credit-cards/es/styles-compiled.css";
//import AddpicupReq from './AddpickupReq.css'
import { useHistory } from 'react-router';
export default function DeleteSalary()  {

   
  let history = useHistory();
    
  const [salaryId, setsalaryId] = useState();
  const [EID, setEID] = useState();
  const [pDate, setpDate] = useState();
  const [TotalSalary, setTotalSalary] = useState();


    useEffect(() => {

        setsalaryId(localStorage.getItem('salaryId'))
        setEID(localStorage.getItem('EID'));
        setpDate(localStorage.getItem('pDate'));
        setTotalSalary(localStorage.getItem('TotalSalary'));


    },[] );


    const submitData = (e)=> {
         e.preventDefault();
        let ans = window.confirm("Do you want to delete this record ?");

        if(ans){

        axios.delete(`http://localhost:8070/salarys/delete/${salaryId}`).then(()=>{

          alert("Salary Delete successfully");
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
                    disabled
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
                    disabled

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
                    disabled
                    onChange={e=>{
                        
                        setTotalSalary(e.target.value);
            
                    }}

                    required
                    />
                </Form.Group>

                <br />
                <center>
                <Button
                    style={{backgroundColor: "red"}}
                    size={"block"}
                    data-testid="validateButton"
                    id="validateButton"
                    type="submit"
                    
                >
                    CONFIRM DELETE
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