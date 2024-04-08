import React, { useState } from 'react';
import styles from './styles.module.css';

const Footer = (props) => {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className="d-flex flex-row-reverse py-3">
          <div className="mx-4">© 2024 All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
