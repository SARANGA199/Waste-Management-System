import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


/*************************************** */
const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit,handleSubmit4, values, errors } = useForm();
  values.uid = "ui22222";
  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
                    
          <h3> Add Purchase Details</h3>
          </div>
          
          <Form onSubmit={handleSubmit4} >
          <input type="hidden" id="uid" name="uid" value="" />
            
          <Form.Group>
              <Form.Control
                type="hidden"
                id="uid"
                data-testid="uid"
                name="uid"
                value={values.uid}
                onChange={handleChange}
                onFocus={handleFocus}

              />
            </Form.Group>
            
            
            <Form.Group>
              <Form.Control
                type="text"
                id="comID"
                data-testid="cardName"
                name="comID"
                placeholder="Company"
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="date"
                id="date"
                data-testid="cardNumber"
                name="date"
                placeholder="Dater"
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="size"
                    id="size"
                    data-testid="cardType"
                    placeholder="Quantity"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="price"
                    data-testid="cardExpiration"
                    name="price"
                    placeholder="Price"

                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              
            </Row>
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
