import React from 'react'
import Card from 'react-bootstrap/Card'
import TopSummary from './TopSummary'

const DataCard: React.FunctionComponent = () => (
  <>
    <Card className="mt-4">
      <div className="d-inline-flex flex-row CardHeader align-items-center justify-content-between">
        <Card.Header as="h5">@thomasabishop</Card.Header>
        <div className="UserImage">image</div>
      </div>
      <Card.Body>
        <TopSummary />
      </Card.Body>
    </Card>
  </>
)

export default DataCard
