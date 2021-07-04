import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

type TScorecard = {
  category: string
  count: number
}

type Props = {
  blah: TScorecard[]
}

const Scorecards = (props: Props): JSX.Element => {
  const data = props.blah
  return (
    <Row>
      {data.map((scorecard) => (
        <Col xs={12} md={3}>
          <Card>
            <Card.Body>
              <Card.Title className="Scorecards--title">
                {scorecard.category}
              </Card.Title>
              <Card.Text>{scorecard.count}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
export default Scorecards
