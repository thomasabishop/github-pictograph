import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Pictograph from './Pictograph'
import Scorecards from './Scorecards'
import { Container, Row, Col } from 'react-bootstrap'

const ContributorSparkline: React.FunctionComponent = () => (
  <Sparklines
    data={[5, 10, 5, 20, 5, 10]}
    limit={6}
    width={40}
    height={20}
    margin={5}
  >
    <SparklinesLine color="blue" />
  </Sparklines>
)

const scorecardPlaceholders = [
  {
    category: 'Commits',
    count: 44,
  },
  {
    category: 'Issues',
    count: 68,
  },
  {
    category: 'Pull requests',
    count: 3,
  },
  {
    category: 'New repositories',
    count: 3,
  },
]

const CardBody: React.FunctionComponent = () => (
  <div className="DataCard--body">
    <Container fluid>
      <div className="DataCard--summary">
        <div>
          <p>183 contributions in the last 90 days</p>
        </div>
        <div className="Sparkline">
          <ContributorSparkline />
        </div>
      </div>
      <Scorecards blah={scorecardPlaceholders} />
      <Pictograph />
    </Container>
  </div>
)

export default CardBody
