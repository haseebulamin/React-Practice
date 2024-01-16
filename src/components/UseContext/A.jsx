import React, { createContext } from 'react'
import B from './B'
const FirstName = createContext()
const LastName = createContext()
export default function A(props) {
  return (
    <FirstName.Provider value="hello, i am haseeb">
    <LastName.Provider value="ul Amin">
    <B/>
    </LastName.Provider>
    </FirstName.Provider>
   
  )
}
export {FirstName,LastName}