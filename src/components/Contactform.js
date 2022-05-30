import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../utils/Schemas";
import axios from "axios";
import { CONTACT_URL } from "../utils/api";
import { useToggle } from "../hooks/useToggle";

function Contactform() {
  const [error, setError] = useState();
  const [toggle, setToggle] = useToggle();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const sendContact = async (formData) => {
    const options = {
      data: {
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    };
    const responseData = await axios.post(CONTACT_URL, options);
    console.log(responseData);
    if (responseData.statusText === "OK") {
      setToggle();
    }
  };

  const onSubmit = (formData) => {
    sendContact(formData).catch((error) => setError(error));
  };

  const sendAnother = (e) => {
    e.preventDefault();
    setToggle();
  };

  return (
    <div className="contactform">
      <div className="contactform__cont">
        <h3>Contact me for a chat!</h3>
        {toggle ? (
          <div>
            <p className="text">
              Thank you for getting in touch! I will reply to your message as
              soon as possible.
            </p>
            <button className="text-btn" onClick={sendAnother}>
              Send another
            </button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__details">
              <Form.Group
                className="mb-3 form__details--group"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control {...register("email")} type="email" />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Subject</Form.Label>
              <Form.Control {...register("subject")} type="text" />
              {errors.subject && (
                <span className="error">{errors.subject.message}</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control {...register("message")} as="textarea" rows={10} />
              {errors.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </Form.Group>
            <div className="form__btn">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Contactform;
