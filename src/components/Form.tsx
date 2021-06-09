import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SearchForm: React.FunctionComponent = () => (
  <>
    <Form className="pt-4">
      <Row>
        <Col xs={8}>
          <Form.Control placeholder="User name" />
        </Col>
        <Col xs={4}>
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
          <Button className="ml-3" variant="outline-danger" type="submit">
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  </>
)

export default SearchForm
