import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import "react-credit-cards/es/styles-compiled.css";


const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit3, handleSubmit, values, errors } = useForm();
  return (
    <div>
      <div className="cardcontainer">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <h3> Add Salary Details</h3>
          </div>
          <Form onSubmit={handleSubmit3} >
            <Form.Group>
              <Form.Control
                type="text"
                id="uid"
                data-testid="uid"
                name="uid"
                placeholder="Username"
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="date"
                id="date"
                data-testid="date"
                name="date"
                placeholder="Date"
                onChange={handleChange}
                onFocus={handleFocus}
                
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="number"
                id="OTHours"
                data-testid="OTHours"
                name="OTHours"
                placeholder="OT Hours"
                onChange={handleChange}
                onFocus={handleFocus}
                
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="number"
                id="amount"
                data-testid="amount"
                name="amount"
                placeholder="Payment Amount"
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
            </Form.Group>

            
            <Button
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
