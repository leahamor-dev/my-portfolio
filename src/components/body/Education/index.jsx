import React from 'react';
import { useSelector } from 'react-redux';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import styles from './styles.module.css';

const Education = () => {
  const educationState = useSelector((state) => state.education);

  return (
    <div id="education" className={styles.education_container}>
      <Container fluid>
        <Row className="section_title py-3 text-center">
          <Col>Education</Col>
        </Row>
        <Row className="section_body">
          <Col>
            <VerticalTimeline>
              {educationState &&
                educationState.map((educationHistory, idx) => {
                  return (
                    <VerticalTimelineElement
                      key={`education-${idx}`}
                      date={
                        <div className={`${idx % 2 == 0 ? 'd-flex' : ''} h5`}>
                          <b>S. Y. {educationHistory.year}</b>
                        </div>
                      }
                      iconStyle={{
                        background: '#202833',
                        color: '#3fe4d9',
                      }}
                      icon={<FontAwesomeIcon icon={faGraduationCap} />}
                    >
                      <div className="text-center mb-3">
                        <h3 className="mb-3 vertical-timeline-element-title">
                          {educationHistory.level}
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                          {educationHistory.name}
                        </h4>
                        {educationHistory.course && (
                          <div>{educationHistory.course}</div>
                        )}
                      </div>
                    </VerticalTimelineElement>
                  );
                })}
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
