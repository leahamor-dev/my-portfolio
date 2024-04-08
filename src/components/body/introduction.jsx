import React, { useState } from 'react';
import myImage from './assets/picture.png';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Introduction = (props) => {
  return (
    <>
      <div
        className={`align-items-center d-flex justify-content-around`}
        style={{ backgroundColor: '#45a29f', height: '100vh' }}
      >
        <div className="leftside">
          <div style={{ fontSize: '2.5rem' }}>Hi there, I'm</div>
          <div style={{ fontSize: '3.5rem' }}>Leah Amor Salgado</div>
          <div style={{ fontSize: '3rem' }}>Web developer</div>
          <div style={{ fontSize: '2rem' }}>
            3 years working experience using ReactJS, NodeJS and ExpressJS
          </div>
          <div
            className="mx-auto d-flex justify-content-center"
            style={{
              fontSize: '3rem',
            }}
          >
            <div className="m-2">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="m-2">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="m-2">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="m-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="m-2">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
          <div>
            <Button
              style={{
                fontSize: '1.5rem',
                borderRadius: '20px 20px 20px 20px',
              }}
              className="m-2"
              color="info"
              outline
            >
              Contact me
            </Button>
            <Button
              style={{
                fontSize: '1.5rem',
                borderRadius: '20px 20px 20px 20px',
              }}
              className="m-2"
              color="info"
              outline
            >
              Download Resume
            </Button>
          </div>
        </div>
        <div className="rightside m-0">
          <img src={myImage} alt="My Image" height={500} />
        </div>
      </div>
    </>
  );
};

export default Introduction;
