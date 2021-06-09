import React from 'react'
import Card from 'react-bootstrap/Card'

const TopSummary: React.FunctionComponent = () => (
  <>
    <div className="d-flex flex-row  align-items-center justify-content-between">
      <Card.Text>632 contributions in the last year</Card.Text>
      <div className="SparkLine">sparkline</div>
    </div>
  </>
)

export default TopSummary
