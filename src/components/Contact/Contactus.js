import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import Navbar from "../Navbar"; // Ensure you have the Navbar component imported
import contactImage from "../../Assets/contactus.png"; // Correct the path

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar /> {/* Add the Navbar at the top */}
      <Container fluid className="contact-section" style={{ minHeight: "100vh", paddingTop: "80px", backgroundColor: "#333", color: "#fff" }}>
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", textAlign: "left" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "#fff" }}>
                <strong>Contact Us</strong>
              </h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label style={{ color: "#fff" }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label style={{ color: "#fff" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label style={{ color: "#fff" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ backgroundColor: "#4285F4", borderColor: "#4285F4" }}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={5} className="contact-image" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={contactImage} alt="Contact Us" style={{ maxWidth: "100%", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contact;
