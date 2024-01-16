import React, {useEffect,useState} from 'react'

export default function Fatch() {
  const [myData, setMyData] = useState([])
    document.title ="Api Intergration"

    const API = "https://jsonplaceholder.typicode.com/users";
    
    const ApiData = async (url)=>{
    try {
        const res = await fetch (url);
        const data = await res.json();
        setMyData(data)
    } catch (error) {
        console.log("i am error",error)
        
    }
    }

    useEffect(() => {
     ApiData(API)
    }, [])
    
  return (
    <>
    <h1 className='text-center'>Fetch Api</h1>
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
