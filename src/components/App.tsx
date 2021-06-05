import React from 'react'
import styled from 'styled-components'
import Pictograph from './Pictograph'

const Wrapper = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: center;
  margin: 2rem;
  color: #131314;
  font-family: Arial, Helvetica, sans-serif;
`

const App: React.FunctionComponent = () => (
  <Wrapper>
    <h2>Recreation of the GitHub Contribution Pictograph</h2>
    <Pictograph />
  </Wrapper>
)

export default App
