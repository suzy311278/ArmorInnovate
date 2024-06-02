import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELVES
            </h1>
            <p className="home-about-body">
              ArmorInnovate is dedicated to providing cutting-edge cybersecurity and automation solutions. Our mission is to secure and automate the digital world.
              <br />
              <br />We specialize in
              <i>
                <b className="purple"> cybersecurity solutions and automation technologies.</b>
              </i>
              <br />
              <br />
              We aim to create innovative solutions that enhance security and efficiency, leveraging the latest advancements in technology.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <h2 style={{ fontSize: "2.6em", marginTop: "40px" }}>
          MEET OUR <span className="purple"> TEAM </span>
        </h2>
        <p className="home-about-body">
          Our team is comprised of experienced professionals in the fields of cybersecurity and automation, dedicated to delivering innovative solutions tailored to your needs.
        </p>
        <ul class="left-align">
          <li><b>Pankaj Upadhayay:</b> Des</li>
          <li><b>Sushant Tiwari:</b> Des</li>
         
        </ul>
      </Container>
    </Container>
  );
}

export default Home2;
