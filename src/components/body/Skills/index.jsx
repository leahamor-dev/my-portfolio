import React from 'react';
import { Container, Col, Row, Progress } from 'reactstrap';
import styles from './styles.module.css';

const Skills = () => {
  const skills = [
    { text: 'HTML, CSS', percentage: 90 },
    { text: 'ReactJS', percentage: 85 },
    { text: 'NodeJS, ExpressJS', percentage: 70 },
    { text: 'Rest API, Postman', percentage: 70 },
    { text: 'Javascript, Typescript', percentage: 70 },
    { text: 'Agile methodology (SCRUM), Azure DevOps', percentage: 80 },
    { text: 'Bootstrap, Reactstrap', percentage: 80 },
    { text: 'SQL, Cypher', percentage: 80 },
    { text: 'Git, Sourcetree', percentage: 80 },
    { text: 'Cypress.io', percentage: 80 },
    { text: 'PHP', percentage: 50 },
  ];

  const sortedSkills = skills.sort((a, b) => b.percentage - a.percentage);

  return (
    <div id="skills" className={styles.base}>
      <Container className={styles.container}>
        <Row className="section_title py-3">
          <Col>Skills</Col>
        </Row>

        <Row className="section_body pb-4 mx-1">
          {sortedSkills.map((skill, idx) => {
            return (
              <Col key={`skill-${idx}`} className="py-2" lg={12}>
                <div className="d-flex" style={{ fontSize: '1.25rem' }}>
                  {skill.text}
                </div>

                <div>
                  <Progress
                    className="my-2"
                    color="info"
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
      </Container>
    </div>
  );
};

export default Skills;
