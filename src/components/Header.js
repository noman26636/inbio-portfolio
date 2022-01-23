import React from 'react'
import Avatar from 'react-avatar';
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (

    <Navbar  variant="dark" style={{background:'#212428', padding: ''}} fixed="top" >
    <Container>
    <Navbar.Brand href="#home" style={{color:'#212528'}}>
    <Avatar googleId="118096717852922241760" size="50" round={true} />
    <span style={{marginLeft:'10px'}} >
    AHMAD
    </span>
    </Navbar.Brand>
    <Nav>
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#features">EXPERIENCE</Nav.Link>
      <Nav.Link href="#pricing">PORTFOLIO</Nav.Link>
      <Nav.Link href="#pricing">RESUME</Nav.Link>
      <Nav.Link href="#pricing">CONTACT</Nav.Link>
  
      </Nav>
      </Container>
      </Navbar>
  )
}

export default Header;
