import React from 'react'
import Card from 'react-bootstrap/Card'
import Sparkline from './Sparkline'
import { useContributor } from '../state/ContributorContext'

const DataCard: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { contributor, setContributor } = useContributor()!
  setContributor('paddington')
  return (
    <>
      <Card className="mt-4">
        <div className="d-inline-flex flex-row CardHeader align-items-center justify-content-between">
          <Card.Header as="h5">@{contributor}</Card.Header>
          <div className="UserImage">image</div>
        </div>
        <Card.Body>
          <Sparkline />
        </Card.Body>
      </Card>
    </>
  )
}
export default DataCard
