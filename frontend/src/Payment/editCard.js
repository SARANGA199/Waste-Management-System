import React, {useState, useEffect}  from 'react';
import axios from "axios";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import "react-credit-cards/es/styles-compiled.css";
//import AddpicupReq from './AddpickupReq.css'
import { useHistory } from 'react-router';

export default function EditCardData()  {
  
  let history = useHistory();
  //let pd2;

    
    const [CardId, setsCardId] = useState();
    const [cardNickname, setNickname] = useState();
    const [cardName, setHolder] = useState();
    const [cardNumber, setNumber] = useState();
    const [cardType, setType] = useState();
    const [cardSecurityCode, setCVV] = useState();
    const [cardExpiration, setExp] = useState();
    
    

    useEffect(() => {

        setsCardId(localStorage.getItem('CardId'))
        setNickname(localStorage.getItem('cardNickname'));
        setHolder(localStorage.getItem('cardName'));
        setNumber(localStorage.getItem('cardNumber'));
        setType(localStorage.getItem('cardType'));
        setCVV(localStorage.getItem('cardSecurityCode'));
        setExp(localStorage.getItem('cardExpiration'));

        //pd2 = pDate.substring(0,9);
        
    },[] );

    
    function submitData(e) {
        e.preventDefault();
        const newRoute = {
              
            CardId,
            cardNickname,
            cardName,
            cardNumber,
            cardType,
            cardSecurityCode,
            cardExpiration
        }

        let ans = window.confirm("Are you really wanted to update ?");

        if(ans){

        axios.put(`http://localhost:8070/salarys/update/${CardId}`,newRoute).then(()=>{

            alert("Salary Data Updated Successfully");
           
            history.push('/credit-card-validation/MyCards2/');
    
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
        <h3> Update Card Details</h3>
        </div>
        <Form onSubmit={submitData} >
          <Form.Group>
            <Form.Control
              type="text"
              id="uid"
              data-testid="uid"
              name="uid"
              placeholder="Username"
              value={cardNickname}
              onChange={e=>{
                  
                setNickname(e.target.value);
    
             }}
  
              required
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              type="text"
              id="date"
              data-testid="date"
              name="date"
              placeholder="Holder's Name"
              value={cardName}

              onChange={e=>{
                  
                setHolder(e.target.value);
    
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
              value={cardType}
              onChange={e=>{
                  
                setType(e.target.value);
    
             }}

              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="number"
              id="amount"
              data-testid="amount"
              name="amount"
              placeholder="Payment Amount"
              value={cardSecurityCode}
              onChange={e=>{                 
                setCVV(e.target.value);    
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
            Update
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