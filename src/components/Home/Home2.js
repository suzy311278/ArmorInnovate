import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import pankajImg from "../../Assets/pankaj.png"; // Add path to Pankaj's image
import sushantImg from "../../Assets/sushant.png"; // Add path to Sushant's image
import Tilt from "react-parallax-tilt";

function Home2() {
  const teamMembers = [
    {
      name: "Pankaj Upadhayay",
      image: pankajImg,
      designation: "Cyber Security Consultant",
      description: "Expert in cybersecurity solutions with over 10 years of experience in the industry. Has worked with leading organizations, developing and implementing comprehensive security strategies. Holds certifications in <b className='purple'>CISSP, ISO 27000 Lead Auditor, CCSP, Arbor SP/TMS, and PCI-DSS</b>. Also an experienced pentester.",
    },
    {
      name: "Sushant Tiwari",
      image: sushantImg,
      designation: "Automation Engineer",
      description: "Specializes in developing cutting-edge automation technologies to enhance operational efficiency. Has extensive experience in network security and hardware re-engineering, having worked at DRDO as an intern. Fully equipped engineer with a Bachelor's degree in Cybersecurity and multiple grants for innovative work. Also an experienced pentester.",
    },
  ];

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
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="team-card">
                <div className="img-container zoom">
                  <Card.Img variant="top" src={member.image} alt={member.name} className="rounded-circle" />
                </div>
                <Card.Body>
                  <Card.Title className="purple">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.designation}</Card.Subtitle>
                  <Card.Text dangerouslySetInnerHTML={{ __html: member.description }}></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
