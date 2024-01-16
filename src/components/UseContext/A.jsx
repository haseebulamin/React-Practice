import React, { createContext } from 'react'
import B from './B'
const FirstName = createContext()
const LastName = createContext()
export default function A(props) {
  return (
    <>
    <FirstName.Provider value="1st context">
    <LastName.Provider value="2nd context">
    <B/>
    </LastName.Provider>
    </FirstName.Provider>
    </>
   
  )
}
export {FirstName,LastName}