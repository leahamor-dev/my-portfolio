import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const Experience = () => {
  const experienceState = useSelector((state) => state.experiences);

  return (
    <div id="experience" className={styles.experience_container}>
      <Container fluid>
        <Row className="section_title py-3 text-center text-white">
          <Col>Experience</Col>
        </Row>

        <Row className="section_body">
          <Col>
            <VerticalTimeline>
              {experienceState &&
                experienceState.map((job, idx) => {
                  return (
                    <VerticalTimelineElement
                      key={`experience-${idx}`}
                      date={
                        <div
                          className={`${
                            idx % 2 == 0 ? 'd-flex' : ''
                          } text-warning h5`}
                        >
                          {job.date}
                        </div>
                      }
                      iconStyle={{
                        background: '#3fe4d9',
                        color: '#202833',
                      }}
                      icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                      <div className="text-center mb-3">
                        <h3 className="vertical-timeline-element-title">
                          {job.position}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {job.company}
                        </h4>
                      </div>

                      <ul style={{ fontSize: '1.25rem' }}>
                        {job.description.map((spec, idx) => {
                          return (
                            <li key={`experience-description-${idx}`}>
                              {spec}
                            </li>
                          );
                        })}
                      </ul>
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

export default Experience;
