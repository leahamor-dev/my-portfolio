import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import styles from './styles.module.css';

const Experience = () => {
  const jobs = [
    {
      company: 'Novasolutions (Philippines), Inc.',
      industry: 'Information Technology (IT)',
      position: 'Programmer (Web Developer)',
      date: 'March 2020 - July 2023',
      location: 'Remote',
      description: [
        'Works in a team where we use Agile methodology (SCRUM)',
        'Maintain, enhance, and create new features for a website.',
        'Debugging to keep a website stable and bug free.',
        'Works on both front-end and back-end using ReactJS and NodeJS',
        'Creating automated tests using Cypress.io',
        'Converting created designs in Figma into working components.',
        'Create usable and maintainable components and functions.',
        'Managing data and storing it in Redux store & database.',
        'Creating and integrating APIs and middlewares.',
      ],
      type: 'work',
    },
    {
      company: 'Datahold Philippines. Inc',
      industry: 'Call Center/IT-Enabled Services/BPO',
      position: 'Data Analyst',
      date: 'March 2017 - September 2019',
      location: 'Ortigas, Pasig City',
      description: [
        'Proven ability to clean and prepare data according to user requirements.',
        'Expertise in gathering, viewing, and analyzing data.',
        'Strong understanding of SQL queries and their ability to extract, organize, and update data.',
        'Skilled in extracting data from scanned documents/forms and inserting it into a database.',
      ],
      type: 'work',
    },
    {
      company: 'Accenture',
      industry: 'Information Technology (IT) Services and Consulting',
      position: 'Associate Software Engineer',
      date: 'June 2017 - December 2017',
      location: 'Mandaluyong, Pasig City',
      description: [
        'Completed Salesforce bootcamp and holds multiple Salesforce certifications.',
        'Designated to the Salesforce technical support department.',
        'Proven ability to resolve Salesforce customer issues through the ticketing system.',
        'Provides voice support to customers in a timely and efficient manner.',
        'Excellent communication and problem-solving skills.',
        'Passionate about helping customers succeed with Salesforce.',
      ],
      type: 'work',
    },
    {
      company: 'RJ Globus Solutions',
      industry: 'BPO/Outsource Services',
      position: 'Technical Support (OJT)',
      date: 'November 2016 - February 2017',
      location: 'Ortigas, Pasig City',
      description: [
        'Assist in network and computer problems',
        'Troubleshoot issues',
        'Administrative works',
      ],
      type: 'work',
    },
  ];

  return (
    <div id="experience" className={styles.experience_container}>
      <Container fluid>
        <Row className="section_title py-3 text-center text-white">
          <Col>Experience</Col>
        </Row>

        <Row className="section_body">
          <Col>
            <VerticalTimeline>
              {jobs.map((job, idx) => {
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
                          <li key={`experience-description-${idx}`}>{spec}</li>
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
