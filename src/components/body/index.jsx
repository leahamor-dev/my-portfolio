import React from 'react';
import About from './About';
import Contacts from './Contacts';
import Education from './Education';
import Experience from './Experience';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
import './body.css';

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'reactstrap';

const Main = () => {
  return (
    <>
      <div className="end-0 position-fixed sticky-bottom">
        <Button
          color="primary"
          className="rounded-circle m-3"
          onClick={() =>
            scroll.scrollToTop({
              duration: 300,
              smooth: true,
            })
          }
        >
          <FontAwesomeIcon icon={faArrowUp} size="2x" className="p-2" />
        </Button>
      </div>
      <Element name="introduction">
        <Introduction />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contacts />
      </Element>
    </>
  );
};

export default Main;
