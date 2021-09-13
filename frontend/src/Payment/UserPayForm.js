import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit2, handleSubmit, values, errors } = useForm();
  return (
    <div>
      <div className="cardcontainer">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <h3> Add Payment Details</h3>
          </div>
          <Form onSubmit={handleSubmit2} >
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
                type="number"
                id="TripCount"
                data-testid="TripCount"
                name="TripCount"
                placeholder="Number of Trips"
                onChange={handleChange}
                onFocus={handleFocus}
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
