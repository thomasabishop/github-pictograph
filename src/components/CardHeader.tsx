import React from 'react'

// -> I define a type for the props local to the file not in .d.ts so I can retain casing convention and promote clarity
type Props = {
  name: string
  avatar: string
}

// -> This component takes props so don't use React.FC : just causes unnecessary aggro with TS compiler
const CardHeader = (props: Props): JSX.Element => {
  //  Destructure the props first
  const { name, avatar } = props
  return (
    <div className="DataCard--header">
      <div>
        <img
          className="DataCard--header_avatar"
          src={avatar}
          alt="Contributor"
        />
      </div>
      <div className="DataCard--header_name">
        <h5>@{name}</h5>
      </div>
    </div>
  )
}
export default CardHeader
