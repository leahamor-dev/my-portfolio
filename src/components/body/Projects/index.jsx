import React, { useState } from 'react';
import styles from './styles.module.css';
import CarouselComponent from './Carousel';

import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  CardLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
  UncontrolledCarousel,
} from 'reactstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Open API Documentation',
      description:
        'Create a specification language for HTTP APIs that defines structure and syntax written in YAML file',
      tags: 'Swagger.io, YAML, JSON',
      images: ['../images/open_api/1.png'],
    },
    {
      title: 'React Table',
      description:
        'Create table with data filter, sort and pagination with the data that are fetch in the database',
      tags: 'TanStack Table, ReactJS',
      images: ['../images/react_table/1.png'],
    },
    {
      title: 'UI Revamp',
      description:
        'It includes additional Dashboard page, Collapsible sidebar, Responsive UI, and some UI changes',
      tags: 'ReactJS, React Libraries, CSS, Bootstrap/Reactstrap',
      images: [
        '../images/ui_revamp/1.png',
        '../images/ui_revamp/2.png',
        '../images/ui_revamp/3.png',
        '../images/ui_revamp/4.png',
      ],
    },
    {
      title: 'Help Center Page',
      description:
        'Creating a help center page with sidebar and search bar to easity access the content. When selected it automatically scrolls to the specific section',
      tags: 'ReactJS, CSS, Markdown',
      images: [
        '../images/help_center/1.png',
        '../images/help_center/2.png',
        '../images/help_center/3.png',
      ],
    },
    {
      title: 'Cypress Automation Testing',
      description:
        'Create test scripts base on test case scenarios given by QAs',
      tags: 'Cypress.io, QA',
      images: ['../images/cypress.png'],
    },

    {
      title: 'Creating Logs Using Event Emitter',
      description:
        'Create logs in actions performed by users that will be stored in an excel file. The file will be scheduled to mail every week to the admins ',
      tags: 'NodeJS, Event Emitter',
      images: ['../images/eventEmitter.png'],
    },
    {
      title: 'Database Manipulation and API Creation',
      description:
        'Fetching, Inserting, Updating, Deleting data from the database. Accessing database through API, Uploading and Downloading files',
      tags: 'NodeJS,  ExpressJS, AgensGraph (Cypher)',
      images: ['../images/expressjs.png', '../images/neo4j.png'],
    },
    {
      title: 'Create Forms with Validations',
      description:
        'Creating form with fields validation that will prompt an error message when criteria is not met',
      tags: 'ReactJS, Formik, Yup',
      images: [
        '../images/forms_validation/1.png',
        '../images/forms_validation/2.png',
      ],
    },
    {
      title: 'Jobs and Email Sending Scheduler',
      description:
        'Create job that run on a specific schedule and create notification when done. (example: Deleting inactive account weekly)',
      tags: 'NodeJS, node-schedule',
      images: ['../images/node_js.png'],
    },
    {
      title: 'Typescript Migration',
      description:
        'Migrate existing codes to typescript front-end and back-end side',
      tags: 'Typescript',
      images: ['../images/typescript.png'],
    },
  ];

  return (
    <div id="projects" className={`${styles.projects_container}`}>
      <Container fluid>
        <Row className="section_title py-3 text-white">
          <Col>Projects I have worked on as Programmer (Web Developer)</Col>
        </Row>
        <Row className="section_body pb-5">
          {projects.map((proj, idx) => {
            return (
              <Col
                key={`project-${idx}`}
                className="mb-4"
                sm={12}
                md={12}
                lg={6}
                xl={4}
              >
                <Card body className={`${styles.card} m-4 h-100 text-center`}>
                  <CardTitle tag="h3" className={`text-center`}>
                    {proj.title}
                  </CardTitle>
                  <CardText className="h-100" style={{ fontSize: '1.25rem' }}>
                    {proj.description}
                  </CardText>
                  <CardBody className="p-0">
                    <CarouselComponent proj={proj} />
                  </CardBody>
                  <CardText
                    className="mt-3 h-100"
                    style={{ fontSize: '1.25rem' }}
                  >
                    Tags: <b>{proj.tags}</b>
                  </CardText>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
