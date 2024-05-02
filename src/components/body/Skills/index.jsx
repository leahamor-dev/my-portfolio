import React from 'react';
import { Container, Col, Row, Progress } from 'reactstrap';
import styles from './styles.module.css';

const Skills = () => {
  const skills = [
    { text: 'HTML, CSS', percentage: 90 },
    { text: 'ReactJS', percentage: 85 },
    { text: 'NodeJS, ExpressJS', percentage: 70 },
    { text: 'Javascript, Typescript', percentage: 70 },
    { text: 'SQL, Cypher', percentage: 80 },
    { text: 'Cypress.io', percentage: 80 },
    { text: 'PHP', percentage: 50 },
  ];

  const sortedSkills = skills.sort((a, b) => b.percentage - a.percentage);

  const knowledge = [
    'Proficient in Microsoft Office/O365',
    'Knowledgeable in State management (Redux) and React Hooks',
    'Knowledgeable in Rest API and Postman',
    'Knowledgeable in Git and Sourcetree',
    'Bootstrap & Reactstrap',
    'Agile (Scrum) and Azure DevOps',
    'Visual Studio Code',
    'Knowledgeable in creating automation script using Cypress.io',
    'Figma',
  ];

  const trainingsAndCertifications = [
    {
      title: 'React – The Complete Guild (incl Hooks, React Router, Redux)',
      source: 'Udemy.com',
    },
    {
      title: 'The Complete Node.js Developer Course (3rd Edition)',
      source: 'Udemy.com',
    },
    {
      title: 'Responsive Web Design (May 1, 2024)',
      source: 'freeCodeCamp.org ',
    },
  ];

  return (
    <div id="skills" className={styles.base}>
      <Container className={`${styles.container}`}>
        <Row className="section_title py-3">
          <Col>Skills</Col>
        </Row>

        <Row className="section_body pb-4 mx-1">
          <Row className="mb-4">
            <Col>
              <div className="h4">Trainings & Certifications</div>
              {trainingsAndCertifications.map((tac) => {
                return (
                  <li>
                    {tac.title} - <i>{tac.source}</i>
                  </li>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="h4">
              Technical Skills
            </Col>
            {knowledge.map((k) => {
              return (
                <Col lg={6}>
                  <li>{k}</li>
                </Col>
              );
            })}
          </Row>

          <Row className="my-4">
            {sortedSkills.map((skill, idx) => {
              return (
                <Col key={`skill-${idx}`} className="py-2" lg={12}>
                  <div className="d-flex" style={{ fontSize: '1.25rem' }}>
                    {skill.text}
                  </div>

                  <div>
                    <Progress
                      className="my-2"
                      color="primary"
                      value={skill.percentage}
                      animated
                    >
                      {skill.percentage}%
                    </Progress>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
