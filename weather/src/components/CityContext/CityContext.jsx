import React, { createContext, useState } from 'react'

const CityContext =createContext()

export function CityProvider({children}) {
    const [city, setCity] = useState('')

    console.log('testing', city);

  return (
    <CityContext.Provider value = {{city, setCity}}>
        {children}
    </CityContext.Provider>
  )
}

export default CityContext