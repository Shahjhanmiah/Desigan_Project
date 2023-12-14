import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logo from '../asserst/whole.png'
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const NavBar = () => {
  return (
    <Navbar className='w-30' bg="light">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="w-50" src={logo} alt='' />
        </a>
        {/* Additional Navbar components or menu items */}
      </div>
    </nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 rounded-pill"/>
          
        </Form>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#create-account">Create Account</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
