import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')} style={{cursor: "pointer"}}>Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink to='/add_products' className='nav-link'>Add Products</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;