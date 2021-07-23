import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [emailError, setEmailError] = useState(false);

  const disableSubmit = () => !emailAddress || !name || !msg;

  const validateEmail = (addr) => {
    const re =
      //eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(addr).toLowerCase());
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!validateEmail(emailAddress)) {
      setEmailError(true);
      setLoading(false);
    } else {
      console.log("trying to email");
      console.log(loading);
      setTimeout(() => {
        console.log("sent");
        setName("");
        setEmailAddress("");
        setMsg("");
        setLoading(false);
      }, 1000);
    }
  };

  console.log("hi");
  return (
    <>
      <div
        className="ui raised very padded text container segment"
        id="main-content4"
      >
        <h1 id="contact-title-test">Contact</h1>

        <div className="contact-form form-container">
          <Form>
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              id="form-input-first-name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
              error={emailError}
              fluid
              label="Email Address"
              placeholder="email@email.com"
              id="form-input-email"
              className="contact-input"
              value={emailAddress}
              onChange={(e) => {
                if (emailError) {
                  setEmailError(false);
                }
                setEmailAddress(e.target.value);
              }}
            />

            <Form.TextArea
              id="form-input-message"
              className="contact-input"
              label="Message"
              placeholder="..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />

            <Button
              loading={loading}
              disabled={disableSubmit()}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Contact;
