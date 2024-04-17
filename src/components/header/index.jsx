import React from 'react';
import styles from './styles.module.css';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  const navItems = [
    { title: 'About' },
    { title: 'Skills' },
    { title: 'Experience' },
    { title: 'Education' },
    { title: 'Projects' },
    { title: 'Contact' },
  ];

  return (
    <div id="header">
      <Navbar id="header_navbar" className={`${styles.header_navbar}`}>
        <NavbarBrand
          id="header_navbar_brand"
          className={`${styles.header_navbar_brand} mx-2`}
        >
          <div>LA</div>
        </NavbarBrand>
        <Nav>
          {navItems.map((item) => {
            return (
              <NavItem key={item.title}>
                <NavLink
                  tag={Link}
                  to={item.title.toLocaleLowerCase()}
                  className={`${styles.header_navbar_links}`}
                >
                  {item.title}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
