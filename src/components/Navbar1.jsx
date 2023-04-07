import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function Navbar1() {
  const state = useSelector((state) => state.handleCart)
  return (
    <div>
      <div className="container">
        <Navbar bg="white" expand="lg" className='py-3 shadow-sm'>
          <Container fluid>
            <NavLink to='/'><Navbar.Brand  className='fw-bold fs-4'>Shop.it</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0 "
                style={{ maxHeight: '100px', fontSize: '18px' }}
                navbarScroll
              >
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink  className="nav-link" to="/products">Products</NavLink>
                <NavLink   className="nav-link" to="/about">About</NavLink>
                <NavLink  className="nav-link" to="/contact">Contact</NavLink>
              </Nav>
              <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark"> <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2"> <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Navbar1