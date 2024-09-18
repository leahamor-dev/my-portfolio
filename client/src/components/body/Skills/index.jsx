import React from 'react';
import { Container, Col, Row, Progress } from 'reactstrap';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

const Skills = () => {
  const skillState = useSelector((state) => state.skills);
  const languagesState = useSelector((state) => state.languages);
  const certificationState = useSelector((state) => state.certifications);

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
              {certificationState &&
                certificationState.map((tac, idx) => {
                  return (
                    <li key={`trainingAndCert-${idx}`}>
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
            {skillState &&
              skillState.map((k, idx) => {
                return (
                  <Col key={`knowledge-${idx}`} lg={12}>
                    <li>{k.name}</li>
                  </Col>
                );
              })}
          </Row>

          <Row className="my-4">
            {languagesState &&
              languagesState
                .sort((a, b) => b.percentage - a.percentage)
                .map((skill, idx) => {
                  return (
                    <Col key={`skill-${idx}`} className="py-2" lg={12}>
                      <div className="d-flex" style={{ fontSize: '1.25rem' }}>
                        {skill.language}
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
