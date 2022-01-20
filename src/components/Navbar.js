import React from 'react'
import Avatar from 'react-avatar';
import { Container, Nav } from 'react-bootstrap'

const Navbar = () => {
  return (

    <Navbar  variant="dark" style={{background:'#ECF0F3'}} fixed="top" >
    <Container>
    <Navbar.Brand href="#home" style={{color:'#212528'}}>
    <Avatar googleId="118096717852922241760" size="50" round={true} />
    <span style={{marginLeft:'10px'}} >
    AHMAD
    </span>
    </Navbar.Brand>
    <Nav>
      <Nav.Link href="#home" style={{color:'#212528'}}>HOME</Nav.Link>
      <Nav.Link href="#features" style={{color:'#212528'}}>PORTFOLIO</Nav.Link>
      <Nav.Link href="#pricing" style={{color: '#212528' }}>Contact</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
  )
}

export default Navbar;
