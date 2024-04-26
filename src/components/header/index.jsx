import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { title: 'About' },
    { title: 'Skills' },
    { title: 'Experience' },
    { title: 'Education' },
    { title: 'Projects' },
    { title: 'Contact' },
  ];

  const navItemsComponent = navItems.map((item) => {
    return (
      <NavItem key={item.title}>
        <NavLink
          offset={-80}
          tag={Link}
          to={item.title.toLocaleLowerCase()}
          className={`${styles.header_navbar_links}`}
        >
          {item.title}
        </NavLink>
      </NavItem>
    );
  });

  return (
    <div id="header">
      <Navbar
        id="header_navbar"
        className={`${styles.header_navbar}`}
        fixed="top"
      >
        <NavbarBrand
          id="header_navbar_brand"
          className={`${styles.header_navbar_brand} mx-2`}
        >
          <div>LA</div>
        </NavbarBrand>
        <Nav className={styles.navItems}>{navItemsComponent}</Nav>

        <Button
          className={styles.navbarToggler}
          onClick={toggle}
          color="muted"
          size="lg"
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>{navItemsComponent}</Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
