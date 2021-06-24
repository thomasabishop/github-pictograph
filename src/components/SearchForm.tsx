import React from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useContributor } from '../state/ContributorContext'

type TContributorFormInput = {
  username: string
}

const SearchForm: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { setContributor } = useContributor()!
  const { register, handleSubmit } = useForm<TContributorFormInput>()
  const onSubmit = (data: TContributorFormInput): void => {
    setContributor(data.username)
  }
  return (
    <>
      <Form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12} sm={8}>
            <Form.Control
              type="text"
              id="username"
              {...register('username')} //eslint-disable-line
              placeholder="User name"
              size="sm"
            />
          </Col>
          <Col xs={12} sm={4} className="mt-2 mt-sm-0">
            <Button variant="outline-primary" type="submit" size="sm">
              Submit
            </Button>
            <Button
              className="ml-3"
              variant="outline-danger"
              size="sm"
              type="reset"
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
