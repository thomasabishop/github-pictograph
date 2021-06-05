import React from 'react'
import {
  PictographContainer,
  Year,
  Week,
  NoCommits,
} from '../styles/pictograph'

const Pictograph: React.FunctionComponent = () => (
  <PictographContainer>
    <Year>
      <Week>
        <NoCommits />
        <NoCommits />
        <NoCommits />
      </Week>
    </Year>
  </PictographContainer>
)

export default Pictograph
