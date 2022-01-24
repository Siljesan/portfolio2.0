import React from "react";
import { Button, Form } from "react-bootstrap";

function Contactform() {
  return (
    <div className="contactform">
      <div className="contactform__cont">
        <h3>Contact me for a chat!</h3>
        <Form className="form">
          <div className="form__details">
            <Form.Group
              className="mb-3 form__details--group"
              controlId="formBasicName"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 form__details--group"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
          <div className="form__btn">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contactform;
