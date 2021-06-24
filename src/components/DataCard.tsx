import React, { useState, useEffect } from 'react'
import { useContributor } from '../state/ContributorContext'
import { contributorDetails } from '../api/contributorData'
import CardBody from './CardBody'
import CardHeader from './CardHeader'
import blankAvatar from '../images/blank-avatar.png'

const startData: TContributor = {
  username: 'Contributor',
  userImage: blankAvatar,
}

const DataCard: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { contributor } = useContributor()!
  const [contributorData, setContributorData] =
    useState<TContributor>(startData)

  useEffect(() => {
    if (contributor) {
      contributorDetails(contributor).then((response) => {
        setContributorData(response)
      })
    }
  }, [contributor])
  return (
    <>
      <div className="DataCard">
        <CardHeader
          name={contributorData.username}
          avatar={contributorData.userImage}
        />
        <CardBody />
      </div>
    </>
  )
}
export default DataCard
