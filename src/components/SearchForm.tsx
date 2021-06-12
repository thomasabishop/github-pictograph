import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SearchForm: React.FunctionComponent = () => {
  const [contributor, setContributor] = useState()
  return (
    <>
      <Form className="pt-4">
        <Row>
          <Col xs={12} sm={8}>
            <Form.Control placeholder="User name" size="sm" />
          </Col>
          <Col xs={12} sm={4} className="mt-2 mt-sm-0">
            <Button variant="outline-primary" type="submit" size="sm">
              Submit
            </Button>
            <Button
              className="ml-3"
              variant="outline-danger"
              type="submit"
              size="sm"
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
export default SearchForm
