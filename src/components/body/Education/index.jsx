import React from 'react';
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
  const educationHistories = [
    {
      level: 'TERTIARY',
      name: 'Pamantasan ng Lungsod ng Pasig ',
      year: 'S. Y.  2013-2017',
      course: 'Bachelor of Science in Computer Science ',
      icon: faGraduationCap,
    },
    {
      level: 'SECONDARY',
      name: 'La Immaculada Concepcion School',
      year: 'S. Y. 2009-2013',
      icon: faSchool,
    },
    {
      level: 'PRIMARY',
      name: 'La Immaculada Concepcion School',
      year: 'S. Y. 2003-2009',
      icon: faSchool,
    },
  ];

  return (
    <div id="education" className={styles.education_container}>
      <Container fluid>
        <Row className="section_title py-3 text-center">
          <Col>Education</Col>
        </Row>
        <Row className="section_body">
          <Col>
            <VerticalTimeline>
              {educationHistories.map((educationHistory, idx) => {
                return (
                  <VerticalTimelineElement
                    key={`education-${idx}`}
                    date={
                      <div className={`${idx % 2 == 0 ? 'd-flex' : ''} h5`}>
                        <b>{educationHistory.year}</b>
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
