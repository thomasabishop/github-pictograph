import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Pictograph from './Pictograph'

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

const CardBody: React.FunctionComponent = () => (
  <div className="DataCard--body">
    <div className="DataCard--summary">
      <div>
        <p>183 contributions in the last 90 days</p>
      </div>
      <div className="Sparkline">
        <ContributorSparkline />
      </div>
    </div>
    <Pictograph />
  </div>
)

export default CardBody
