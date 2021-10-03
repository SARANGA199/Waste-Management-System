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

    
    const [pId, setpId] = useState();
    const [uid, setuid] = useState();
    const [TripCount, setTripCount] = useState();
    const [amount, setamount] = useState();
    

    useEffect(() => {

        setpId(localStorage.getItem('pId'))
        setuid(localStorage.getItem('uid'));
        setTripCount(localStorage.getItem('TripCount'));
        setamount(localStorage.getItem('amount'));

        //pd2 = pDate.substring(0,9);
        
    },[] );

    
    function submitData(e) {
        e.preventDefault();
        const newRoute = {
              
            uid,
            TripCount,
            amount

        }

        let ans = window.confirm("Are you really wanted to update ?");

        if(ans){

        axios.delete(`http://localhost:8070/userpayments/deletePayment/${pId}`,newRoute).then(()=>{

            alert("Payment Data Updated Successfully");
           
            history.push('/credit-card-validation/PaymentData2/');
    
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
        <h3> Update Payment Details</h3>
        </div>
        <Form onSubmit={submitData} >
          <Form.Group>
            <Form.Control
              type="text"
              id="uid"
              data-testid="uid"
              name="uid"
              placeholder="Username"
              value={uid}
              onChange={e=>{
                  
                setuid(e.target.value);
    
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
              value={TripCount}

              onChange={e=>{
                  
                setTripCount(e.target.value);
    
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
              value={amount}
              onChange={e=>{
                  
                setamount(e.target.value);
    
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