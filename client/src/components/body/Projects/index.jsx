import React, { useState } from 'react';
import styles from './styles.module.css';
import CarouselComponent from './Carousel';
import { useSelector } from 'react-redux';

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
  const projectsState = useSelector((state) => state.projects);

  return (
    <div id="projects" className={`${styles.projects_container}`}>
      <Container fluid>
        <Row className="section_title py-3 text-white">
          <Col>Projects I have worked on as Programmer (Web Developer)</Col>
        </Row>
        <Row className="section_body pb-5">
          {projectsState &&
            projectsState.map((proj, idx) => {
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
                      Tags:{' '}
                      <b>
                        {proj.tags.map(
                          (t, idx) =>
                            `${t}${idx + 1 !== proj.tags.length ? ',' : ''} `
                        )}
                      </b>
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
