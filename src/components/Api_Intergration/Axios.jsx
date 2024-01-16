import React,{useEffect, useState} from 'react'
import axios from 'axios'

export default function Axios() {
    const [myData, setMyData] = useState([])

    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((res)=> setMyData(res.data))
     .catch(()=> document.write("Error is occur"))
    }, [])
    
  return (
    <>
    <h1 className='text-center'>Axios Api</h1>
    <div className=''>
        {myData.map((post)=>{
        const {id, name, username, email, phone, website} = post;
        return(
            <div className="card m-4 p-2 w-25 d-flex" key={id}>
                <h3><strong>Name:</strong> {name}</h3>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
            </div>
        )
    })}
    </div>
    </>
  )
}
