import React from 'react'
import thomas from '../images/thomas.png'

const CardHeader: React.FunctionComponent = () => (
  <div className="DataCard--header">
    <div>
      <img src={thomas} alt="Contributor" />
    </div>
    <div className="DataCard--header_name">
      <h5>@thomasabishop</h5>
    </div>
  </div>
)

export default CardHeader
