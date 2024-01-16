import React, { useContext } from 'react'
import { FirstName, LastName } from './A'
export default function D(props) {
    const firstName = useContext(FirstName)
    const lastName = useContext(LastName)
  return (
    <h1 className='text-center'>{firstName} , {lastName}</h1>
  )
}
