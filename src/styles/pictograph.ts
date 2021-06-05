import styled from 'styled-components'

const PictographContainer = styled.div`
  display: flex;
`

const Year = styled.div`
  overflow: auto;
  padding: 1rem;
  border: 1px solid lightgrey;
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(52, 12px);
  grid-column-gap: 3px;
  min-height: 0;
  min-width: 0;
`

const Week = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-row-gap: 3px;
  // border: 1px solid red;
  min-width: 0;
  overflow: hidden;
  & > div {
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-size: 10px;
    width: 12px;
    height: 12px;
  }
`

const NoCommits = styled.div`
  background-color: #e8e8e8;
`
export { PictographContainer, Year, Week, NoCommits }
