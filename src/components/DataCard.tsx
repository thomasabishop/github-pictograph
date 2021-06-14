import React, { useState, useEffect } from 'react'
import Sparkline from './Sparkline'
import { useContributor } from '../state/ContributorContext'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

const DataCard: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { contributor } = useContributor()!
  const [info, setInfo] = useState<any>()
  useEffect(() => {
    if (contributor) {
      //
    }
  }, [contributor])

  return (
    <>
      <div className="DataCard">
        <CardHeader />
        <CardBody />
      </div>
    </>
  )
}
export default DataCard
