import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfStroke as halfStar } from '@fortawesome/free-regular-svg-icons';

const Skills = () => {
  const numberOfStars = (number) => {
    let result = [];
    let starsNumber = number;

    for (let i = 1; i <= 5; i++) {
      if (starsNumber < 1 && starsNumber > 0) {
        result.push(halfStar);
        starsNumber--;
      } else if (starsNumber >= 1) {
        result.push(fullStar);
        starsNumber--;
      } else {
        result.push(emptyStar);
        starsNumber--;
      }
    }

    return result.map((starType) => {
      return <FontAwesomeIcon icon={starType} style={{ color: '#FFD43B' }} />;
    });
  };

  const starLegend = [
    {
      text: (
        <div>
          <b>Uh?</b> Next question?
        </div>
      ),
      numberOfStars: 1,
    },
    {
      text: (
        <div>
          <b>Basic</b>, you can't always win...
        </div>
      ),
      numberOfStars: 2,
    },
    {
      text: (
        <div>
          <b>Medium</b>, I'm trying to improve.
        </div>
      ),
      numberOfStars: 3,
    },
    {
      text: (
        <div>
          <b>High</b>, I'm pretty good.
        </div>
      ),
      numberOfStars: 4,
    },
    {
      text: (
        <div>
          I'm the <b>master</b> of the universe.
        </div>
      ),
      numberOfStars: 5,
    },
  ];

  const skillsStars = [
    { text: 'ReactJS', numberOfStars: 4 },
    { text: 'NodeJS, ExpressJS', numberOfStars: 3 },
    { text: 'Agile methodology (SCRUM), Azure DevOps', numberOfStars: 3.5 },
    { text: 'SQL, Cypher', numberOfStars: 4 },
    { text: 'Bootstrap, Reactstrap', numberOfStars: 3.5 },
    { text: 'Git, Sourcetree', numberOfStars: 3.5 },
    { text: 'Cypress.io', numberOfStars: 4 },
    { text: 'Rest API, Postman', numberOfStars: 3.5 },
    { text: 'Javascript, Typescript', numberOfStars: 3.5 },
    { text: 'HTML, CSS', numberOfStars: 3.5 },
    { text: 'PHP', numberOfStars: 2 },
  ];

  return (
    <>
      <div className="bg-secondary">
        <Container fluid>
          <Row className="py-3" style={{ fontSize: '3rem' }}>
            <Col>Skills</Col>
          </Row>
          <Row className=" border-top border-bottom py-4 d-flex flex-row-reverse">
            {starLegend.map((legend) => {
              return (
                <Col>
                  <div style={{ fontSize: '2rem' }}>
                    {numberOfStars(legend.numberOfStars)}
                  </div>
                  <div style={{ fontSize: '1.25rem' }}>{legend.text}</div>
                </Col>
              );
            })}
          </Row>

          <Row className="py-3">
            {skillsStars.map((skill) => {
              return (
                <Col lg={6}>
                  <Row className="align-items-center my-3">
                    <Col lg={7} style={{ fontSize: '1.5rem' }}>
                      {skill.text}
                    </Col>
                    <Col lg={4} style={{ fontSize: '2rem' }}>
                      {numberOfStars(skill.numberOfStars)}
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
