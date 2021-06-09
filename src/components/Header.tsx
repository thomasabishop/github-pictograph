import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header: React.FunctionComponent = () => (
  <>
    <Navbar variant="light" bg="light">
      <Container fluid>
        <Navbar.Brand href="#">GitHub Contributions Recreation</Navbar.Brand>
      </Container>
    </Navbar>
  </>
)

export default Header
