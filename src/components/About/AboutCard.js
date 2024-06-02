import React from "react";
import Card from "react-bootstrap/Card";
import { CgArrowLongUpR } from "react-icons/cg";
import { ImPointRight } from "react-icons/im";
import { TbTextColor } from "react-icons/tb";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span style={{ color: "#f3f1f1"}}> Welcome to </span><span className="purple">ArmorInnovate</span> <span style={{ color: "#f3f1f1"}}>, your trusted partner in providing state-of-the-art <span className="purple">cybersecurity</span> and <span className="purple">automation solutions</span>. 
            At ArmorInnovate, we are committed to safeguarding your digital assets and enhancing operational efficiency through innovative technology solutions.</span>
            <br /><br />
            <span style={{ color: "#f3f1f1"}}>Our team of experts specializes in:</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cybersecurity Services
            </li>
            <li className="about-activity">
              <ImPointRight /> Automation Solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Innovative Technology Integration
            </li>
          </ul>
          <p>
          <span style={{ color: "#808080"}}> At ArmorInnovate, we strive to stay ahead of the curve, ensuring that our clients benefit from the latest advancements in technology to protect and streamline their operations.</span>
          </p>
          <footer className="blockquote-footer">ArmorInnovate Team</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
