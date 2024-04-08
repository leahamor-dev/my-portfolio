import React, { useState } from 'react';
import About from './about';
import Contacts from './contacts';
import Education from './education';
import Experience from './experience';
import Introduction from './introduction';
import Projects from './projects';
import Skills from './skills';

const Main = (props) => {
  return (
    <>
      <div>
        <Introduction />
        <About />
        <Skills />
      </div>
    </>
  );
};

export default Main;
