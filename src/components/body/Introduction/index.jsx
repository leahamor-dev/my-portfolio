import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

import { Link } from 'react-scroll';
import styles from './styles.module.css';

import Header from '../../header';

const Introduction = () => {
  const onButtonClick = () => {
    const pdfUrl = '../pdf/Leah-Amor-Salgado.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Leah-Amor-Salgado.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="introduction" className={styles.introduction_container}>
      <Container fluid>
        <Row className={`${styles.customRow}`}>
          <Header />
          <Row className="h-100 w-100 align-items-center w-100 mt-5 pt-5">
            <Col xs={12} lg={8} className={`${styles.introText}`}>
              <div>Hi there, I'm</div>
              <div>Leah Amor Salgado</div>
              <div>Web developer</div>
              <div>
                3 years working experience using ReactJS, NodeJS and ExpressJS
              </div>

              <div className={`${styles.button_container} my-4`}>
                <Link to="contact">
                  <Button className="mx-3 mb-3" color="info" outline>
                    Contact me
                  </Button>
                </Link>
                <Button
                  className="mx-3 mb-3"
                  color="info"
                  outline
                  onClick={onButtonClick}
                >
                  Download Resume
                </Button>
              </div>
            </Col>
            <Col xs={12} lg={4} className="rightside pb-5 text-center">
              <img src="../images/picture.png" alt="My Image" width="75%" />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
