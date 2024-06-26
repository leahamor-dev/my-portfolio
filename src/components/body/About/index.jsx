import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import styles from './styles.module.css';

const About = () => {
  return (
    <div id="about" className={styles.base}>
      <Container className={styles.container}>
        <Row className="section_title py-3 text-center">
          <Col id="about_me">About me</Col>
        </Row>
        <Row className="section_body mx-1">
          <Row>
            <Col>
              <p>
                Hello, I am Leah Amor, I graduated college at Pamantasan ng
                Lungsod ng Pasig with a course of Computer Science. I have 3
                years experience as a Programmer or Web Developer using ReactJS
                for front-end and NodeJS for back-end side. I was part of a team
                and we were using Agile methodology specifically SCRUM, I also
                have experience in using Azure DevOps, ExpressJS for Routes or
                http requests, Rest APIs, Typescript, and React libraries such
                as Redux, Reactstrap, Formik, React Router etc. I am also
                knowledgeable in creating automation tests using Cypress
              </p>
            </Col>
          </Row>
          <Row className="my-4">
            <Col className="d-flex flex-column align-items-start">
              <div>Name: Leah Amor Salgado</div>
              <div>Age: 27 yrs. old</div>
              <div>Citizenship: Filipino</div>
              <div>Residence: Manggahan, Pasig City</div>
              <div>Email: leahamorsalgado@gmail.com</div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default About;
