/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from 'react'

type ContributorType = {
  contributor: string
  setContributor: (value: string) => void //eslint-disable-line
}

type Props = {
  children: React.ReactNode
}

const defaultValue = ''
const ContributorContext = createContext<ContributorType | undefined>(undefined)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ContributorProvider = ({ children }: Props) => {
  const [contributor, setContributor] = useState(defaultValue)
  return (
    <ContributorContext.Provider value={{ contributor, setContributor }}>
      {children}
    </ContributorContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useContributor = () => useContext(ContributorContext)
