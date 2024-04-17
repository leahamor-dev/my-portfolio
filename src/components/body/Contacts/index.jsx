import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';

import styles from './styles.module.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('xbjnpzaq');
  // const [isAlertOpen, setIsAlertOpen] = useState(false);

  const socials_icons = [
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/leahamor03/',
    },
    { icon: faInstagram, link: 'https://www.instagram.com/leahamor03/' },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/leah-amor-ablaza-34b135166/',
    },
    { icon: faGithub, link: 'https://github.com/leahamor-dev' },
    { icon: faXTwitter, link: 'https://twitter.com/leahamor03' },
  ];

  // useEffect(() => {
  //   if (state.succeeded) {
  //     setIsAlertOpen(isAlertOpen);
  //   }
  // }, [state.succeeded]);

  // useEffect(() => {
  //   if (isAlertOpen) {
  //     setTimeout(() => {
  //       setIsAlertOpen(false);
  //     }, 2000);
  //   }
  // }, [isAlertOpen]);

  return (
    <div id="contact" className={styles.contact_container}>
      <Container className="h-100" fluid>
        <Row className="pt-4 section_title text-center">
          <Col id="contact_me">Contact Me</Col>
        </Row>

        <Row className="section_body py-4 mx-3">
          <Col
            sm={12}
            md={6}
            className=" d-flex flex-column justify-content-center"
          >
            <div
              className="d-flex justify-content-center"
              style={{
                fontSize: '2rem',
              }}
            >
              {socials_icons.map((icon, idx) => {
                return (
                  <div key={`icon-${idx}`} className="mx-2">
                    <a
                      className="text-decoration-none"
                      href={icon.link}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={icon.icon}
                        style={{ color: 'black' }}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="mb-4">
              <div style={{ fontSize: '3rem' }}>
                <p>Let's chat.</p>
                <p>Tell me about your project.</p>
              </div>

              <div style={{ fontSize: '2rem' }}>
                <p>Let's create something together!</p>
              </div>
              <div className="d-flex flex-row align-items-center">
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: 'black', fontSize: '3rem' }}
                  />
                </div>
                <div className="mx-3">
                  <div>Mail me at</div>
                  <div className="text-break">leahamorsalgado@gmail.com</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <Form
              id="contact-form"
              onSubmit={(e) => {
                handleSubmit(e);
                e.target.reset();
              }}
            >
              <FormGroup>
                <Label for="email" className="d-flex">
                  Email Address
                </Label>
                <Input id="email" type="email" name="email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Label for="message" className="d-flex">
                  Message
                </Label>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  required
                  rows={10}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormGroup>
              <Button
                block
                color="info"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </Button>

              <Alert className="mt-3" isOpen={state.succeeded}>
                <div>Message sent successfully</div>
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
