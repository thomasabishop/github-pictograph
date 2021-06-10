import React from 'react'
//import '../api/getCommits'
import '../api/getContributionData'
import '../api/userProjects'
import '../api/userCommits'
import '../styles/App.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import SearchForm from './Form'
import DataCard from './DataCard'

const App: React.FunctionComponent = () => (
  <>
    <Header />
    <Container fluid>
      <Row>
        <Col xs={12}>
          <SearchForm />
          <DataCard />
        </Col>
      </Row>
    </Container>
  </>
)
export default App
