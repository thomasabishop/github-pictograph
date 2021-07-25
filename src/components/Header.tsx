import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import octocat from '../images/github-logo-square.svg'

const Header: React.FunctionComponent = () => (
  <>
    <Navbar variant="dark" bg="primary">
      <Navbar.Brand href="#home">
        {/* <img
          alt=""
          width="30"
          src={octocat}
          className="d-inline-block align-top mr-2"
        /> */}
        GitHub Contributions
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="#home">Source</Nav.Link>
      </Nav>
    </Navbar>
  </>
)

export default Header
