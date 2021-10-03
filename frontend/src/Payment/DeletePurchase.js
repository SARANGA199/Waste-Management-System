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
    
    const [comID, setcomID] = useState();
    const [pId, setpId] = useState();
    const [date, setdate] = useState();
    const [size, setsize] = useState();
    const [price, setprice] = useState();


    useEffect(() => {

        setpId(localStorage.getItem('pId'))
        setcomID(localStorage.getItem('comID'))
        setdate(localStorage.getItem('date'));
        setsize(localStorage.getItem('size'));
        setprice(localStorage.getItem('price'));


    },[] );


    const submitData = (e)=> {
         e.preventDefault();
        let ans = window.confirm("Do you want to delete this record ?");

        if(ans){

        axios.delete(`http://localhost:8070/companybuys/delete/${pId}`).then(()=>{

          alert("Record Deleted successfully");
          history.push('/credit-card-validation/PurchaseData2/');
           
  
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
        <h3> Update Details</h3>
        </div>
        <Form onSubmit={submitData} >
          <Form.Group>
            <Form.Control
              type="text"
              id="uid"
              data-testid="uid"
              name="uid"
              placeholder="Username"
              value={comID}
              onChange={e=>{
                  
                setcomID(e.target.value);
    
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
              value={date}

              onChange={e=>{
                  
                setdate(e.target.value);
    
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
              value={size}
              onChange={e=>{
                  
                setsize(e.target.value);
    
             }}

              required
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              type="number"
              id="amount"
              data-testid="amount"
              name="amount"
              placeholder="Payment Amount"
              value={price}
              onChange={e=>{
                  
                setprice(e.target.value);
    
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