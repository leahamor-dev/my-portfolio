import React, { useState } from 'react';
import styles from './styles.module.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Header = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { title: 'About' },
    { title: 'Skills' },
    { title: 'Experience' },
    { title: 'Education' },
    { title: 'Projects' },
    { title: 'Contact' },
  ];

  return (
    <>
      <Navbar
        id="header-navbar"
        className={`${styles.header_navbar}`}
        fixed="top"
      >
        <NavbarBrand
          id="header-navbar-brand"
          className={`${styles.header_navbar_brand}`}
          href="/"
        >
          <div>LA</div>
        </NavbarBrand>
        <Nav>
          {navItems.map((item) => {
            return (
              <NavItem key={item.title} className="my-auto">
                <NavLink className={`${styles.header_navbar_links}`}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
