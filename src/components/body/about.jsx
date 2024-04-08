import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';

const About = () => {
  return (
    <>
      <div style={{ backgroundColor: '#535C91' }}>
        <Container>
          <Row className="py-3" style={{ fontSize: '3rem' }}>
            <Col id="about_me">About me</Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              Hello, I am Leah Amor, I graduated college at Pamantasan ng
              Lungsod ng Pasig with a course of Computer Science. I have 3 years
              experience as a Programmer or Web Developer using ReactJS for
              front-end and NodeJS for back-end side. I was part of a team and
              we were using Agile methodology specifically SCRUM, I also have
              experience in using Azure DevOps, ExpressJS for Routes or http
              requests, Rest APIs, Typescript, and React libraries such as
              Redux, Reactstrap, Formik, React Router etc. I am also
              knowledgeable in creating automation tests using Cypress
            </Col>
          </Row>
          <Row>
            <Col className="d-flex flex-column align-items-start my-4">
              <div>Name: Leah Amor Salgado</div>
              <div>Age: 27 yrs. old</div>
              <div>Citezenship: Filipino</div>
              <div>Residence: Manggahan, Pasig City</div>
              <div>Email: leahamorsalgado@gmail.com</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
