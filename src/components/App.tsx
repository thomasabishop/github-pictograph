import React from 'react'
import '../styles/App.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import SearchForm from './SearchForm'
import DataCard from './DataCard'
import { ContributorProvider } from '../state/ContributorContext'
import '../functions/getContributorData'

const App: React.FunctionComponent = () => (
  <>
    <ContributorProvider>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={12}>
            <SearchForm />
            <DataCard />
          </Col>
        </Row>
      </Container>
    </ContributorProvider>
  </>
)
export default App
