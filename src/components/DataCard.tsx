import React, { useState, useEffect } from 'react'
import { useContributor } from '../state/ContributorContext'
import { getContributorData } from '../functions/getContributorData'
import CardBody from './CardBody'
import CardHeader from './CardHeader'
import blankAvatar from '../images/blank-avatar.png'
import { IContributor } from '../model/IContributor'

const startData: IContributor = {
  username: 'Contributor',
  userImage: blankAvatar,
}

const DataCard: React.FunctionComponent = () => {
  const { contributor } = useContributor()!
  const [contributorData, setContributorData] =
    useState<IContributor>(startData)

  useEffect(() => {
    if (contributor) {
      getContributorData(contributor).then((response) => {
        setContributorData(response)
      })
      console.log(contributorData)
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
