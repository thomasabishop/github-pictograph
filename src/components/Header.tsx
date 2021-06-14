import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import octocat from '../images/octokat.png'
const Header: React.FunctionComponent = () => (
  <>
    <Navbar variant="light" bg="light">
      <Navbar.Brand href="#home">
        <img
          alt=""
          width="40"
          src={octocat}
          className="d-inline-block align-top mr-2"
        />
        GitHub Contributors Recreation
      </Navbar.Brand>
    </Navbar>
  </>
)

export default Header
